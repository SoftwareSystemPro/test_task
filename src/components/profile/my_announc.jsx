import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, Col, List, Row, Skeleton } from 'antd';
import './style.css'
import '../../App.css'
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

const count = 6;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const MyAnnounc = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

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
                <Button style={{ background: "#FE8B37" }} type='primary' onClick={onLoadMore}>Ko’proq ko’rish</Button>
            </div>
        ) : null;
    return (
        <div className='last_section'>
            <div className='container'>
                <div className='last_wrapper'>
                    {/* <h4 className='last_title'>E'lonlarim</h4> */}
                    <List
                        grid={{
                            gutter: 12,
                            column: 3,
                        }}
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item

                            >
                                <Skeleton title={false} loading={item.loading} active>
                                    <NavLink to={`/single/${item.email}`}>
                                        <Card
                                            hoverable
                                            style={{
                                                width: "100%",
                                            }}
                                            cover={<img alt="example" src={item.picture.large} />}
                                        >
                                            <Meta title={`${item.name?.title} ${item.name?.first} ${item.name?.last} `} description={
                                                <div>
                                                    <Row gutter={[16, 24]}>
                                                        <Col className="gutter-row" span={12}>
                                                            <p>
                                                                <i class='bx bxs-user-circle' ></i>
                                                                {` ${item.name?.first} ${item.name?.last} `}
                                                            </p>
                                                        </Col>
                                                        <Col className="gutter-row" span={12}>
                                                            <p>
                                                                <i class='bx bxs-briefcase-alt-2' ></i>
                                                                Tadbirkor
                                                            </p>
                                                        </Col>
                                                        <Col className="gutter-row" span={12}>
                                                            <p>
                                                                <i class='bx bx-calendar'></i>
                                                                17.01.2022
                                                            </p>
                                                        </Col>
                                                        <Col className="gutter-row" span={12}>
                                                            <p>
                                                                <i class='bx bxs-time-five'></i>
                                                                15:00
                                                            </p>
                                                        </Col>
                                                        <Col className="gutter-row" span={12}>
                                                            <p>
                                                                <i class='bx bx-rss' ></i>
                                                                Online
                                                            </p>
                                                        </Col>
                                                        <Col className="gutter-row" span={12}>
                                                            <p>
                                                                <i class='bx bx-show'></i>
                                                                2550
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            } />
                                        </Card>
                                    </NavLink>
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};
export default MyAnnounc;