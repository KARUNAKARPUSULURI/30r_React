import React from 'react'
import { Table } from "antd";
import { studentData } from './StudentsData';

const Table1 = () => {
    const columns = [
        {
            title: 'S No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title : "Subject",
            dataIndex : "subjects",
            key : "subjects"
        }
    ]
    return (
        <div>
            <Table columns={columns} dataSource={studentData} />
        </div>
    )
}

export default Table1