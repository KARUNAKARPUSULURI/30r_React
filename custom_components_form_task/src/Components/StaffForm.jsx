import { formData } from "../form"
import "../App.css"
const StaffForm = () => {
    const {staffForm} = formData
    return (
        <>
            <form>
                {
                    staffForm.fields.map((field, index)=>{
                        console.log(field)
                        return (
                            <>
                            <label>{staffForm.labels[index]}: </label>
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

export default StaffForm