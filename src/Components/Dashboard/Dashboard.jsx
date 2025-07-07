import React, { useEffect, useState } from "react";
import { Card, Select, Spin } from "antd";
import { UserOutlined, TeamOutlined, BookOutlined } from "@ant-design/icons";
import { useGetStudentsQuery, useGetStaffQuery, useGetClassesQuery, useGetSubjectsQuery } from "../../redux/apislice.js";

const { Option } = Select;

const Dashboard = () => {
  const { data: students, isLoading: loadingStudents } = useGetStudentsQuery();
  const { data: staff, isLoading: loadingStaff } = useGetStaffQuery();
  const { data: classes, isLoading: loadingClasses } = useGetClassesQuery();
  const { data: subjects, isLoading: loadingSubjects } = useGetSubjectsQuery();

  const [selectedClass, setSelectedClass] = useState(null);
  const [filteredSubjects, setFilteredSubjects] = useState([]);

  useEffect(() => {
    if (selectedClass) {
      setFilteredSubjects(subjects?.filter((subject) => subject.class === classes?.find(cls => cls.id === selectedClass)?.name));
    }
  }, [selectedClass, subjects, classes]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", width: "100%" }}>
      
      {/* Students Card */}
      <Card
        title={<span style={{ color: "#ffffff" }}>Students</span>}
        style={{ 
          flex: 1, 
          backgroundColor: "#1890ff", 
          borderRadius: "8px", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
          padding: "20px",
          color: "#ffffff"
        }}
        headStyle={{ backgroundColor: "#0073e6", borderRadius: "8px 8px 0 0" }}
      >
        {loadingStudents ? <Spin /> : <h2 style={{ color: "#ffffff" }}><UserOutlined /> {students?.length ?? 0}</h2>}
      </Card>

      {/* Staff Card */}
      <Card
        title={<span style={{ color: "#ffffff" }}>Staff</span>}
        style={{ 
          flex: 1, 
          backgroundColor: "#52c41a", 
          borderRadius: "8px", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
          padding: "20px",
          color: "#ffffff"
        }}
        headStyle={{ backgroundColor: "#409913", borderRadius: "8px 8px 0 0" }}
      >
        {loadingStaff ? <Spin /> : <h2 style={{ color: "#ffffff" }}><TeamOutlined /> {staff?.length ?? 0}</h2>}
      </Card>

      {/* Class & Subjects Card */}
      <Card
        title={<span style={{ color: "#ffffff" }}>Class & Subjects</span>}
        style={{ 
          flex: 1, 
          backgroundColor: "#fa541c", 
          borderRadius: "8px", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
          padding: "20px",
          color: "#ffffff"
        }}
        headStyle={{ backgroundColor: "#d4380d", borderRadius: "8px 8px 0 0" }}
      >
        {loadingClasses ? <Spin /> : (
          <Select
            style={{ width: "100%" }}
            placeholder="Select Class"
            onChange={(value) => setSelectedClass(value)}
          >
            {classes?.map((cls) => (
              <Option key={cls.id} value={cls.id}>{cls.name}</Option>
            ))}
          </Select>
        )}

        {loadingSubjects ? (
          <Spin />
        ) : (
          filteredSubjects.length > 0 ? (
            <ul style={{ marginTop: "10px" }}>
              {filteredSubjects.map((subj) => (
                <li key={subj.id} style={{ color: "#ffffff" }}>
                  <BookOutlined /> {subj.name}
                </li>
              ))}
            </ul>
          ) : (
            selectedClass && <p style={{ marginTop: "10px", color: "#ffffff" }}>
              No subjects found for this class.
            </p>
          )
        )}
      </Card>

    </div>
  );
};

export default Dashboard;
