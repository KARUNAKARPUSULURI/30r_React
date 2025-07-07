import React, { useState } from "react";
import { Table, Button, Input, message, Spin, Modal } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useGetStaffQuery, useGetStudentsQuery } from "../../redux/apislice";

const { confirm } = Modal;

const Staff = () => {
    const { data: staff, isLoading, error, refetch } = useGetStaffQuery();
    const { data: students, isStudentsLoading, isStudentserror } = useGetStudentsQuery();
    const [searchText, setSearchText] = useState("");

    // Filter students based on search input
    const filteredStaff = staff?.filter(staff =>
        staff.name.toLowerCase().includes(searchText.toLowerCase()) ||
        staff.email.toLowerCase().includes(searchText.toLowerCase())
    );

    // Delete student with confirmation
    //Incase If you wanna add delete functionality, write your function(handleDelete) here
    // Define Table Columns
    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Role", dataIndex: "role", key: "role" },
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
            <h2>Staff Management</h2>

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
                <Table dataSource={filteredStaff} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />
            )}
        </div>
    );
};

export default Staff;
