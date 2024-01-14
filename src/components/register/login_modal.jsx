import React from 'react'
import {
    Button,
    Form,
    Input,
    Modal,
    Tabs
  } from 'antd';
  import './style.css'

export default function LoginModal() {
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
                    name="login"
                    onFinish={onFinish}
                    style={{
                        maxWidth: "100%",
                    }}
                    scrollToFirstError
                >
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
                    <Form.Item>
                        <Button rootClassName='register_form_btn' type="primary" htmlType="submit">
                            Tizimga kirish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
