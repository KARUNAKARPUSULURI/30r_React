import MenuItems from "./MenuItems"

function Header() {
    return <header>
        <div className="logo"><img width="50px" height="50px" src="https://images.unsplash.com/photo-1744361448609-c5d3417f00ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" /></div>
        <MenuItems />
    </header>
}

export default Header