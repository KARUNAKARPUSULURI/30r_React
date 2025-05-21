import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData] = useState(null)
    const handleSubmit = (values) => {
        setFormData(values)
    }
    return (
        <div>
            <Form name='loginform' autoComplete='off' onFinish={handleSubmit}>
                <Form.Item name="username" label="Name">
                    <Input type='text' />
                </Form.Item>
                <Form.Item name = "password" label="Password">
                    <Input type='password' />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Login</Button>
                </Form.Item>
            </Form>
            {
                formData && <p>{formData.username}</p>
            }
        </div>
    )
}

export default LoginForm