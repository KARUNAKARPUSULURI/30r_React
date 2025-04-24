import { formData } from "../form"
import "../App.css"
const StudentForm = () => {
    const {studentForm} = formData
    return (
        <>
            <form>
                {
                    studentForm.fields.map((field, index)=>{
                        console.log(field)
                        return (
                            <>
                            <label>{studentForm.labels[index]}: </label>
                            <input type={field.type} placeholder={field.placeholder} id={field.id} name={field.name}/><br />
                            </>
                        )
                    })
                }
                <button>Submit</button>
            </form>
        </>
    )
}

export default StudentForm