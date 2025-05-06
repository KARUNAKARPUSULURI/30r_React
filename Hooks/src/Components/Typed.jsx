const TypedValue = () => {
    constructor(){
        super()
        this.state={
            name=""
        }

    }
    const handleChange=()=>{

    }
    return (

        <>
        <h1>Counter</h1>
        <input type="text" placeholder="typed value" onChange={this.handleChange} />
        <input type="text" placeholder="typed value" ></input>
        </>

    )
}

export default TypedValue;