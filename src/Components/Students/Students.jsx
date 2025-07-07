import React, { useState } from "react";
import { Table, Button, Input, message, Spin, Modal } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useDeleteStudentMutation, useGetStudentsQuery } from "../../redux/apislice";

const { confirm } = Modal;

const Students = () => {
    const { data: students, isLoading, error, refetch } = useGetStudentsQuery();
    const [deleteStudent] = useDeleteStudentMutation();
    const [searchText, setSearchText] = useState("");

    // Filter students based on search input
    const filteredStudents = students?.filter(student =>
        student.name.toLowerCase().includes(searchText.toLowerCase()) ||
        student.email.toLowerCase().includes(searchText.toLowerCase())
    );

    // Delete student with confirmation
    const handleDelete = (id, name) => {
        confirm({
            title: `Are you sure you want to delete ${name}?`,
            icon: <ExclamationCircleOutlined />,
            content: "This action cannot be undone.",
            onOk: async () => {
                await deleteStudent(id);
                message.success(`Successfully deleted ${name}`);
                refetch(); // Refresh data
            },
            onCancel() {
                message.info("Deletion cancelled.");
            },
        });
    };

    // Define Table Columns
    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Gender", dataIndex: "gender", key: "gender" },
        { title: "Class", dataIndex: "class", key: "class" },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(record.id, record.name)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <div style={{ padding: "20px", background: "#fff" }}>
            <h2>Students Management</h2>

            {/* Search Bar */}
            <Input
                placeholder="Search students by name or email"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: "300px", marginBottom: "15px" }}
            />

            {/* Display Loading, Error, or Students Table */}
            {isLoading ? (
                <Spin size="large" />
            ) : error ? (
                <p style={{ color: "red" }}>Error loading students! Please try again.</p>
            ) : (
                <Table dataSource={filteredStudents} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />
            )}
        </div>
    );
};

export default Students;
