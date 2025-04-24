export const formData = {
    studentForm : {
        labels : ["Id", "Name", "Age", "Email", "Class"],
        fields : [
            {id : "id", name : "id", placeholder : "enter serial Number", type: "number"},
            {id : "username", name : "username", placeholder : "enter name", type: "text"},
            {id : "age", name : "age", placeholder : "enter age", type: "number"},
            {id : "email", name : "email", placeholder : "enter email", type: "email"},
            {id : "class", name : "class", placeholder : "enter class", type: "text"},
        ]
    },
    staffForm : {
        labels : ["Id", "Name", "Age", "Role", "Class", "Email"],
        fields : [
            {id : "id", name : "id", placeholder : "enter serial Number", type: "number"},
            {id : "username", name : "username", placeholder : "enter name", type: "text"},
            {id : "age", name : "age", placeholder : "enter age", type: "number"},
            {id : "role", name : "role", placeholder : "enter role", type: "text"},
            {id : "class", name : "class", placeholder : "enter class", type: "text"},
            {id : "email", name : "email", placeholder : "enter email", type: "email"},
        ]
    },
    subjectForm : {
        labels : ["Id", "Subject Name", "Class"],
        fields : [
            {id : "id", name : "id", placeholder : "enter serial Number", type: "number"},
            {id : "subjectname", name : "subjectname", placeholder : "enter subject", type: "text"},
            {id : "class", name : "class", placeholder : "enter class", type: "text"},
        ]
    }
}
