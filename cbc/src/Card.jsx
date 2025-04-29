import { Component } from "react"

class Card extends Component {
    render() {
        const arr = [
            {
                id: 1,
                productName: "product 1",
                description: "this is product 1 description"
            }, {
                id: 2,
                productName: "product 2",
                description: "this is product 2 description"
            }
        ]
        return <>
            {/* //write cards logic here */}
            {arr.length > 0 ? (
                <>
                    {arr.map((product, index) => {
                        return (
                            <></>
                        )
                    })}
                </>
            ) : (
                <>
                    <p>No cards available</p>
                </>
            )}
        </>
    }
}

export default Card