import Heading from "../../Custom/Heading"
import Search from "../../Custom/Search"
import Table from "../../Custom/Table"
import { staffData } from "../../Data/staffData"
import { subjectsData } from "../../Data/subjectsData"

const Subjects = () => {
    const headings = Object.keys(subjectsData[0])
    return (
        <>
            <Heading  heading= "Subject Management"/>
            <Search type={"search"} placeholder={"Search subject by class"}/>
            <Table headings={headings} dataSource = {subjectsData}/>
        </>
    )
}

export default Subjects