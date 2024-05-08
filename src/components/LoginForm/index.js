import React, { useContext } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import { loginAction } from '../../actions/admin.actions';
import { HomeContext } from '../../context';


const LoginForm = ({ }) => {
    const { setCurrentuser } = useContext(HomeContext);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const loginResponse = await loginAction(values);
            if (loginResponse.success === true) {
                localStorage.setItem('user', JSON.stringify(loginResponse))
                setCurrentuser(loginResponse);
                return navigate('/dashboard');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                width: '40%',
                maxWidth: 700
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input valid email',
                        type: 'email',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )

}

export default LoginForm;