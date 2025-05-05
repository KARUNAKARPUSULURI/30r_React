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
