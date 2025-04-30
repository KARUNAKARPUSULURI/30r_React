import { Component } from "react";
import "../App.css"

class CreateAndReadInput extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: "",
            list: []
        }
    }
    handleChange = (event) => {
        this.setState({ inputValue: event.target.value })
    }
    handleAdd = (event) => {
        event.preventDefault()
        this.setState({ list: [...this.state.list, this.state.inputValue] })
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleAdd}>
                    <label htmlFor="type">Type: </label>
                    <input
                        type="text"
                        placeholder="type something"
                        name="inputData"
                        id="type"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add</button>
                </form>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Input Value</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.length > 0 ? (
                                <>
                                    {
                                        this.state.list.map((str, index) => {
                                            console.log(str)
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{str}</td>
                                                    <td>
                                                        <button>Del</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </>
                            ) : (
                                <>
                                    No Data Available
                                </>
                            )
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default CreateAndReadInput