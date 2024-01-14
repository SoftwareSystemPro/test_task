import React from 'react'
import {
    Button,
    Form,
    Input,
    Modal,
    Tabs
  } from 'antd';
  import './style.css'

export default function RegisterModal() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    return (
        <>
            <div>
                <Form
                    layout='vertical'
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{
                        maxWidth: "100%",
                    }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="Ism familiya"
                        label="Ism familiya"
                        tooltip="Ism familiya yoki o'z taxallusingnizni ham yozishingiz mumkin"
                        rules={[
                            {
                                required: true,
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input rootClassName='register_input' />
                    </Form.Item>
                    <Form.Item
                        name="E-mail"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email'
                            },
                            {
                                required: true
                            },
                        ]}
                    >
                        <Input rootClassName='register_input' />
                    </Form.Item>

                    <Form.Item
                        name="Parol"
                        label="Parol"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password rootClassName='register_input' />
                    </Form.Item>

                    <Form.Item
                        name="Parolni tasdiqlang"
                        label="Parolni tasdiqlang"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password rootClassName='register_input' />
                    </Form.Item>
                    <Form.Item>
                        <Button rootClassName='register_form_btn' type="primary" htmlType="submit">
                            Ro'yxatdan o'tish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
