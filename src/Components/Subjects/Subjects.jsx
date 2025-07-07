import React, { useState } from "react";
import { Table, Button, Input, message, Spin, Modal } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useGetSubjectsQuery } from "../../redux/apislice";

const { confirm } = Modal;

const Subjects = () => {
    const { data: subject, isLoading, error, refetch } = useGetSubjectsQuery();
    const [searchText, setSearchText] = useState("");

    // Filter students based on search input
    const filteredSubjects = subject?.filter(subject =>
        subject.name.toLowerCase().includes(searchText.toLowerCase()) 
    );

    // Delete student with confirmation
    //Incase If you wanna add delete functionality, write your function(handleDelete) here
    // Define Table Columns
    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Name", dataIndex: "name", key: "name" },
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
            <h2>Subjects Management</h2>

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
                <Table dataSource={filteredSubjects} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />
            )}
        </div>
    );
};

export default Subjects;
