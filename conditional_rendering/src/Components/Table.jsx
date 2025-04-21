import { studentsData } from "../Data/StudentData"
import NoDataFound from "./NoDataFound"
function Table() {
    const TableContainer = {
        // display : "flex",
        border: "2px solid black",
        flex: 1,
        height: "80vh",
        margin: "20px 20px"
    }
    return (
        <div style={TableContainer}>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentsData.length > 0 ? (
                            <>
                                {studentsData.map((student, index) => {
                                    return (
                                        <tr>
                                            <td>{student.id}</td>
                                            <td>{student.studentName}</td>
                                            <td>{student.email}</td>
                                            <td>{student.age}</td>
                                        </tr>
                                    )
                                })}
                            </>
                        ) : (
                            <>
                                <NoDataFound />
                            </>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Table