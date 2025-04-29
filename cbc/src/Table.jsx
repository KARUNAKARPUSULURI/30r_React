import { Component } from "react";

class Table extends Component {
    render() {
        return (
            <>
                {
                    this.props.data.map((person, index) => {
                        return (
                            <tr>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
                            </tr>
                        )
                    })
                }
            </>
        )
    }
}

export default Table