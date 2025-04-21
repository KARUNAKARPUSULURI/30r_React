import { studentsData } from "../Data/StudentData"
import NoDataFound from "./NoDataFound"

function Cards() {
    const cardsContainer = {
        // display : "flex",
        border: "2px solid black",
        flex: 1,
        height: "80vh",
        margin: "20px 20px",
        overflow : "scroll"
    }

    const cardDiv = {
        padding : "10px 20px",
        border : "2px solid black",
        marginBottom : "5px"
    }
    console.log(studentsData)
    return (
        <div style={cardsContainer}>
            {studentsData.length > 0 ? (
                <>
                    {studentsData.map((student, index) => {
                        return (
                            <div style={cardDiv}>
                                <div>
                                    <h3>Id : {student.id}</h3>
                                </div>
                                <div>
                                    <p><strong>{student.studentName}</strong></p>
                                    <p>{student.email}</p>
                                    <p>{student.age}</p>
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : (
                <NoDataFound />
            )}
        </div>
    )
}

export default Cards