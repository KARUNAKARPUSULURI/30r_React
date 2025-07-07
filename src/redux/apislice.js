// src/redux/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getStudents: builder.query({ query: () => '/students' }),
        deleteStudent: builder.mutation({
            query: (id) => ({
                url: `/students/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Students"], // Ensures UI updates after delete
        }), 
        getStaff: builder.query({ query: () => '/staff' }), //Get Staff Data from here
        getClasses: builder.query({ query: () => '/classes' }),
        getSubjects: builder.query({ query: () => '/subjects' }) //Get Subjects Data from here
    })
});

export const { useGetStudentsQuery, useDeleteStudentMutation, useGetStaffQuery, useGetClassesQuery, useGetSubjectsQuery } = apiSlice;
