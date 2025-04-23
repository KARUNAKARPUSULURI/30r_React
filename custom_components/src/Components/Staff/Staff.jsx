import Heading from "../../Custom/Heading"
import Search from "../../Custom/Search"
import Table from "../../Custom/Table"
import { staffData } from "../../Data/staffData"

const Staff = () => {
    const headings = Object.keys(staffData[0])
    return (
        <>
            <Heading heading = "Staff Management" />
            <Search type={"search"} placeholder={"Search staff by name or email" }/>
            <Table headings={headings} dataSource = {staffData} />
        </>
    )
}

export default Staff