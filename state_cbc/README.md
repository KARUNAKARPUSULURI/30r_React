State Management: -

State is an object, 


state is used to store data which changes overtime.
local state, means it works specifically to that component only.
to  get the updated state value, you need to trigger a re-render, React will trigger re-render, when ? a state value changes -> how ? setState()

baseClass -> Component
derived Class -> 
super()

constructor(){
    super();
    this.state = {
        name : "asd",
        age : 30,
        btnValue : "Login" //Logout
    }
}
<!-- state = {} -->
handleClick = () => {
    this.state.btnValue = "Logout"
    console.log(this,state.btnValue)
}

onClick = {handleClick} {this.state.btnValue} //login 

setState() -> base Class


setState({btnValue : "Logout"}) //{}

setState is a method which is used to update state, this setState generally takes two args, 1st -> state, 2nd -> callback

this.state = {
    name : "",
    age : 0, //1
    gender : "male"
}

setState({gender : "female", age : this.state.age + 1, name: "chaitanya"})



Tasks : -

1. TypedValue.jsx -> cbc syntax -> 
this.state = {
names : ["","","",""], -<>
colors : ["","","",""]
}

jsx- > 
""
""
""
""

jsx -> {
    <h1></h1>
    <input />
}
