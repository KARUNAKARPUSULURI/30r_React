import React, { useEffect, useState } from 'react';
import {
    Button,
    Form,
    Input,
    Modal,
    Select,
    Space,
    Table,
    Flex,
} from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import {
    getStudentsApiData,
    postStudentsApiData,
    deleteStudentsApiData,
} from '../Services/api';

const genderOptions = [
    { value: '', label: 'Select' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
];

const TodoList = () => {
    const [form] = Form.useForm();
    const [isModalOpen, setModalOpen] = useState(false);
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const data = await getStudentsApiData();
        setStudents(data);
    };

    const handleDelete = async (record) => {
        await deleteStudentsApiData(record.id);
        fetchStudents();
    };

    const handleFormSubmit = async (values) => {
        try {
            await postStudentsApiData(values);
            form.resetFields();
            setModalOpen(false);
            fetchStudents();
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const columns = [
        {
            title: 'S No',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
        },
        {
            title: 'Student Name',
            dataIndex: 'student_name',
            key: 'student_name',
            align: 'center',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            align: 'center',
        },
        {
            title: 'Actions',
            key: 'actions',
            align: 'center',
            render: (_, record) => (
                <Space>
                    <Button icon={<EyeOutlined />} />
                    <Button icon={<EditOutlined />} />
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Flex justify="start" style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={() => setModalOpen(true)}>
                    + Add Student
                </Button>
            </Flex>

            <Table
                columns={columns}
                dataSource={students}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />

            <Modal
                title="Student Management System"
                open={isModalOpen}
                onCancel={() => {
                    form.resetFields();
                    setModalOpen(false);
                }}
                footer={null}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="student_form"
                    onFinish={handleFormSubmit}
                >
                    <Form.Item
                        label="Student Name"
                        name="student_name"
                        rules={[{ required: true, message: 'Please enter name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[{ required: true, message: 'Please enter age' }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{ required: true, message: 'Please select gender' }]}
                    >
                        <Select options={genderOptions} />
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button onClick={() => {
                                form.resetFields();
                                setModalOpen(false);
                            }}>
                                Cancel
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default TodoList;
