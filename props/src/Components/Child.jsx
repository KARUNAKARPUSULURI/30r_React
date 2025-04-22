function Child(props){ //{parent : {}}
    console.log("props", props.parent.grandparent.app)  //{parent : {}}
    return <p>{props.parent.grandparent.app}</p>
}

export default Child