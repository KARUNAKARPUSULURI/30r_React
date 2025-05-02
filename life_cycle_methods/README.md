 methodsLife cycle : -
Here we are going to discuss about component's life cycle 

Creation Phase or Mounting Phase:- This phase is all about creating a component and inserting into the DOM...

1. constructor(){} -> this gets called when class is being initialized
2. render(){} -> it is used to return the jsx
3. ComponentDidMount(){} ->This gets called after render means browser finishes painting UI, and this method will get called once. 
-> To perform side effects 
1. Function calls
2. Fetch api 
3. Timer functions
4. Subscriptions




Updation Phase :- This gets trigger whenever a particular value gets updated

constructor(){}
render(){}
componentDidUpdate(prevState, prevProps){
    console.log(prevState.count) // {}
}

//1 

Deletetion Phase or unmounting phase : - Component gets deleted or removed
