import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Input } from 'antd';
import './style.css'
const count = 4;
const { TextArea } = Input
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const Commentary = () => {
    const onChange = (e) => {
        return e.target.value
    };
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    console.log(list)
    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);
    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                })),
            ),
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                window.dispatchEvent(new Event('resize'));
            });
    };
    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button className='comment_more_btn' onClick={onLoadMore}>Ko'proq ko'rish...</Button>
            </div>
        ) : null;
    return (
        <>
            <div className='comment_wrapper'>
                <h4 className='comment_title'><i class='bx bx-conversation' ></i>Izohlar</h4>
                <div className='textArea_wrapp'>
                    <div className='avatar'>
                        <Avatar size={50} src="https://randomuser.me/api/portraits/men/64.jpg" />
                    </div>
                    <div className='textarea_box'>
                        <TextArea
                            rootClassName='textareA'
                            showCount
                            maxLength={300}
                            onChange={onChange}
                            placeholder="Izoh yozing..."
                            style={{
                                width: "100%",
                                height: 250,
                                resize: 'none',
                            }}
                        />
                    </div>
                </div>
                <List
                    className="demo-loadmore-list"
                    loading={initLoading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item>
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.picture.large} />}
                                    title={`${item.name?.title} ${item.name?.first} ${item.name?.last} `}
                                    description={
                                        <>
                                            <p className='time_p'> Bugun 15:00</p>
                                            <p className='chat_text'>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                                        </>
                                    }
                                />

                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
};
export default Commentary;