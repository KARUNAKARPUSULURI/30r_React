import { createContext } from "react"
import GrandParent from "./GrandParent";
import Parent from "./Parent";

const token = "sdfghjklkfdsfghjlgfdsfghjkl.kfdghjotfooutfdghkloogfd.jhfdklyfdhjklfdsdfgh"
export const context = createContext(token);

const UseContext = () => {
  
  const obj = {
    name: "karunakar"
  }
  const arr = [1,2,3]

  return (
    <div>
      <div>UseContext</div>
      <context.Provider value={{obj, arr}}>
        <GrandParent />
      </context.Provider>
      <Parent />
    </div>
  )
}

export default UseContext