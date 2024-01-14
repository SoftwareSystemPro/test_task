import React, { useState } from 'react';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Radio,
    Select,
    TimePicker,
    TreeSelect,
    message, Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../../App.css'
import './style.css'
import { Col, Row } from 'react-grid-system';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
const { RangePicker } = DatePicker;
function AnnouncComponent() {
    const [value, setValue] = useState(1);
    const dateFormat = 'YYYY/MM/DD';
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const onChangeTextArea = (e) => {
        return e.target.value
    };

    const onChangeRadio = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const props = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const options1 = [
        {
            label: 'Information Technologies',
            value: 'Information Technologies',
        },
        {
            label: 'Information Techno',
            value: 'Information Techno',
        },
    ];
    const options2 = [
        {
            label: 'Information Technologies',
            value: 'Information Technologies',
        },
        {
            label: 'Information Techno',
            value: 'Information Techno',
        },
    ];
    return (
        <>
            <div className='announc_section'>
                <div className='container'>
                    <div className='announc_wrapper'>
                        <h2 className='announc_title'>E’lon berish</h2>
                        <Form
                            rootClassName='announc_form'
                            variant="filled"
                            style={{
                                maxWidth: 600,
                            }}
                            layout="vertical"
                        >
                            <Row>
                                <Col lg={6}>
                                    <div className='time_form'>
                                        <h4 className='time_form_title'>Vaqt va yo’nalishni tanlang</h4>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="O’tkaziladigan sanani kiriting"
                                                    name="O’tkaziladigan sanani kiriting"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <DatePicker
                                                        placeholder="2024-01-01"
                                                        defaultValue={dayjs('2024/01/01', dateFormat)}
                                                        format={dateFormat}
                                                        onChange={onChange}
                                                        rootClassName='announc_date'
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Vaqtni kiriting"
                                                    name="Vaqtni kiriting"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <TimePicker rootClassName='announc_timePicker' placeholder="13:00" onChange={onChange} />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Yo’nalishni belgilang"
                                                    name="Yo’nalishni belgilang"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Select rootClassName='announc_select' options={options1} placeholder="Tanlang" />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Ichki yo’nalish"
                                                    name="Ichki yo’nalish"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Select rootClassName='announc_select' options={options2} placeholder="Tanlang" />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Tadbir turi"
                                                    name="Tadbir turi"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Radio.Group onChange={onChange} value={value}>
                                                        <Radio rootClassName='announc_radio' value="online"> Online </Radio>
                                                        <Radio rootClassName='announc_radio' value="offline"> Offline </Radio>
                                                    </Radio.Group>
                                                </Form.Item>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Linkni kiriting"
                                                    name="Linkni kiriting"
                                                >
                                                    <Input
                                                        placeholder='https://example.com'
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='organ_form'>
                                        <h4 className='time_form_title'>Tashkilotchi</h4>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Ismi sharifi"
                                                    name="Ismi sharifi"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Professiya"
                                                    name="Professiya"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Telefon raqami"
                                                    name="Telefon raqami"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Item
                                                    label="Qo’shimcha telefon raqam"
                                                    name="Qo’shimcha telefon raqam"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col style={{ marginTop: "30px" }} lg={6}>
                                    <div className='post_form'>
                                        <h4 className='time_form_title'>Post</h4>
                                        <Row>
                                            <Col lg={12}>
                                                <Form.Item
                                                    label="Mavzu sarlavhasi"
                                                    name="Mavzu sarlavhasi"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={12}>
                                                <Form.Item
                                                    label="Tavsifi"
                                                    name="Tavsifi"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={12}>
                                                <Form.Item
                                                    label="Rasm yuklash"
                                                    name="Rasm yuklash"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Upload {...props}>
                                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                    </Upload>
                                                    <p className='alert_test'>Yuklanyotgan rasm o’lchami 1920x1080 hajmi 1 mb dan oshmasin</p>
                                                </Form.Item>
                                            </Col>
                                            <Col lg={12}>
                                                <Form.Item
                                                    label="Mavzu matni"
                                                    name="Mavzu matni"
                                                    rules={[
                                                        {
                                                            required: true
                                                        },
                                                    ]}
                                                >
                                                    <Input.TextArea
                                                        showCount
                                                        maxLength={1000}
                                                        onChange={onChangeTextArea}
                                                        placeholder="Yozing..."
                                                        style={{
                                                            width: "100%",
                                                            height: 200,
                                                            resize: 'none',
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col style={{ marginTop: "30px" }} lg={12}>
                                    <div className='btn_form_wrapper'>
                                        <Form.Item>
                                            <Button style={{ borderColor: "#FE8B37", marginRight: "20px" }}>
                                                <NavLink style={{ color: "#FE8B37" }} to={"/"}>Bekor qilish</NavLink>
                                            </Button>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button style={{ background: "#FE8B37" }} type="primary" htmlType="submit">
                                                E’lonni yuborish
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default AnnouncComponent;