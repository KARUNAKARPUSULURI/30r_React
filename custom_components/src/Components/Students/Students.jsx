import Heading from "../../Custom/Heading"
import Search from "../../Custom/Search"
import Table from "../../Custom/Table"
import { studentsData } from "../../Data/studentsData"

const Students = () => {
    const headings = Object.keys(studentsData[0])
    return (
        <>
            <Heading heading = "Students Management"/>
            <Search type = "search" placeholder = "Search students by name or email" />
            <Table headings = {headings} dataSource = {studentsData}/>
        </>
    )
}

export default Students