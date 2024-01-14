import React, { useState } from 'react'
import "../../App.css"
import './style.css'
import { Tabs, Button, Checkbox, Form, Input } from 'antd';
import { Col, Row } from 'react-grid-system';
import ImageUpload from './upload';
import MyAnnounc from './my_announc';

export default function ProfileComponent() {
    const [files, setFiles] = useState('')
    const [selectImage, setSelectImage] = useState('')

    const HandleChange = (e) => {
        setFiles(e.target.files[0])
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const onChange = (key) => {
        console.log(key);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const items = [
        {
            key: '1',
            label: 'Malumotlarim',
            children: (
                <>
                    <div className='profile_form_wrapper'>
                        <Form
                            layout="vertical"
                            name="basic"
                            style={{
                                maxWidth: "100%",
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <div className='profile_row_wrap'>
                                <Row>
                                    <Col lg={4}>
                                        <Form.Item
                                            label="Ism familiya"
                                            name="Ism familiya"
                                        >
                                            <Input rootClassName='profile_input' />
                                        </Form.Item>
                                        <Form.Item
                                            label="Email"
                                            name="Email"
                                        >
                                            <Input rootClassName='profile_input' />
                                        </Form.Item>
                                        <Form.Item
                                            label="Password"
                                            name="password"
                                        >
                                            <Input.Password rootClassName='profile_input' />
                                        </Form.Item>
                                        <p className='alart_text'>
                                            Yuklanyotgan rasm o’lchami <span>1080x1080</span> hajmi 1 mb dan oshmasin (PNG, JPEG, JPG, SVG.)
                                        </p>
                                    </Col>
                                    <Col lg={3}>
                                        <ImageUpload selectImage={selectImage} elem={files} HandleChange={HandleChange} />
                                    </Col>
                                </Row>
                            </div>
                            <Form.Item>
                                <Button className='profile_btn' type="primary" htmlType="submit">
                                    Tahrirlash
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </>
            ),
        },
        {
            key: '2',
            label: "E'lonlarim",
            children: <MyAnnounc />,
        }
    ];
    return (
        <>
            <div className='profile_section'>
                <div className='container'>
                    <div className='profile_wrapper'>
                        <h1 className='profile_title'>Shaxsiy kabinet</h1>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                </div>
            </div>
        </>
    )
}
