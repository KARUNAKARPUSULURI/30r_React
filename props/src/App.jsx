import Cards from "./Components/Cards"
import GrandParent from "./Components/GrandParent"

function App() {
    const name = "Madhavika"
    const age = 30
    console.log(age)
    return (
        <>
            <Cards />
            {/* <GrandParent
                app={name}
                age={age}
                location="Earth"
                occupation="Engineer"
                hobbies={["Reading", "Traveling"]}
            /> */}
        </>
    )
}

export default App