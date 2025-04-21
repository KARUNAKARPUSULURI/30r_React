import "./App.css"
import Cards from "./Components/Cards"
import Table from "./Components/Table"
const App = () => {
  const isLoggedIn = false
  const arr = [] //{name : "karunakar", age : 30}
  const containerStyles = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "2rem",
    backgroundColor: "#E1D6DC",
    width: "100%",
    height: "100vh"
  }
  return (
    <>
      <div style={containerStyles}>
        {
          isLoggedIn ? (
            <>
              <Cards />
              <Table />
            </>
          ) : (
            <>
            <p>Nothing to show because you havent logged in</p>
            </>
          )
        }
      </div>
      {isLoggedIn ? <p>Login Successfull</p> : <p>Login Failed</p>}
      <div>
        {
          arr.length > 0 ? (
            <>
              {arr.map((ele, index) => (
                <>{ele.name} - {ele.age}</>
              ))}
            </>
          ) : (
            <>
              no data
            </>
          )
        }
      </div>
    </>
  )
}

export default App;