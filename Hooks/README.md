Phase 3 -> Functional based components -> 

Phase 1 -> functional based components -> drawbacks -> ?

-> we dont have state in fbc -> stateless components
-> we dont have life cycle methods -> X
-> this  
------------------------------

Phase 2 -> Class based components -> advantages ->
1. statefull components -> state presents
2. Life cycle methods -> mounting, unmounting, updating
3. this
------------------------------------------

drawbacks -> code complexity -> moderate -> boiler plate -> constructor --> super
                                                        -> render(){}
                                                        -> this
------------------------------------------------------------------------------------------      

React introduced Hooks concept -> 16.8 version -> 

Messy class components,
this binding -> arrow function
----------------------------------- > Hooks -> hooks are Functions which are easier to code and to read -> need to invoke

why ? 
-> functional based components -> to manage state, side effects, prevents prop drilling, complex state logic, ref(without causing re-renders), memory caching etc.,
-> you can create your own hook (customize)

constraints:- nned to follow some rules
1. Always hooks should be used inside a function body, dont use at top level, loops, conditions 
2. UseState -> useState -> range exceeded -> infinite loop
3. conventions -> use -> always your hook should have a prefix called `use`


Types:- 
#Basic hooks:- 
useState -> state management -> 
useEffect -> to perform side effects

image -> video
image, audio ->  video

{
    id : 2b32,
    artistPhoto : url,
    artistName : taylor,
    songname : enchanted,
    audio : url,
    video : url,  
}
--------------------------------
 

---------------------------------------------
#Advanced Hooks:- 
useRef -> to interact with the dom nodes directly without causing any re-renders
useContext -> to share data globally, ? to prevent prop drilling  
useReducer -> complex state logic
----------------------------------------------
#Advanced Hooks:- 
useMemo -> caches values across re-renders
Note:- dont get confused between memo(HOC) and useMemo(Hook), both are different
useCallback -> caches functions across re-renders
(child to parent)
----------------------------------------------------------------------

useState:- 
1. It is used to store or hold values(primitive, non-primitive) which changes overtime
2. syntax -> useState(initialValue)(new Value) || useState(callback) (prev value)-> [state,setState]
          -> useState("karunakar")  -> ["karunakar", setState]
          -> useState(0)  -> [0, setState]
          -> useState(null)  -> [null, setState]
          -> useState(undefined)  -> [undefined, setState]
          -> useState()  -> [undefined, setState]
          -> useState(true)  -> [true, setState]
          ---non primitive cases -> 
          -> useState({namae: "karunakar"})  -> [{name : "karunakar"}, setState]
          -> useState([1,2,3,4])  -> [[1,2,3,4], setState]
          -> useState(()=>{})  -> [()=>{}, setState] -> lazy initialization

----------------------------------------------------------------------------------------

Asynchronous of setstate with batching updates

Closures -> js feature -> 

stale -> outdated value or old value -> stale value 
stale closures

function Counter(){
    const [count, setCount] = useState(0);  //1
    const [age, setAge] = useState(0); //1
    function handleClick(){
        console.log(count) //0
        setCount(count + 1) //0 -> 1     re-render     count  is coming from its lexical parent
        setCount(count + 1) //0 -> 2        again re-render
        setCount(count + 1) //0 -> 6      again re-render
    }
    return <button onClick = {handleClick}>
}

Batching -> Combining updates and procesing them into a single render
React internal queue -> [1, 1, 1]
               queue -> [1, 2, 3]
Schedule -> React processes the updates and fixes a time

setCount()
[1, 2, 3] -> [1, 3, 6] -> 6
setCount((prev)=> 0 + 1 ) // 1 -> react internal memory -> [1]
setCount((prev)=> 1 + 2 ) // 2 -> 
setCount((prev)=> 3 + 3 ) // 3 -> 
---------------------------------------------------------
<!-- console.log(count)  // 0
setCount(count - 1); // 0 - 1 => -1
setCount(prev => prev + 1); // -1 + 1 => 0


Queue = [-1, 0] -->
----------------------------------------------------------------------------


useEffect:-  To perform side effects -> 

side effects :- network calls, function calls, subscriptions, timer funtions, etc.,

function useEffect(){}
-----------------------------------------------------------------------------------------------------------------

FLCIKERING UI -> 

Batching?    X


-> CLEARING INTERVAL


-----------------------------------------------------


React-router-dom :- 
It is a open source react library which is used to build single page applications fully featured with client side routing as well as server side routing that too enables dynamic routing, that also routing(loads the content without refreshing the page even when user navigate between page.)
-> Now, you can use Link tag for navigating between pages with refreshing

Link -> BrowserRouter(APP)
used to build single page applications
library
fully featured cliend side and server side routing 
dynamic routing
display pages and allow userd to navigate them
 page is never refreshed  instead the content is dynamically fetched based on the URL





























