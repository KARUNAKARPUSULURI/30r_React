import { formData } from "../form"
import "../App.css"
const SubjectForm = () => {
    const {subjectForm} = formData
    return (
        <>
            <form>
                {
                    subjectForm.fields.map((field, index)=>{
                        console.log(field)
                        return (
                            <>
                            <label>{subjectForm.labels[index]}: </label>
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

export default SubjectForm