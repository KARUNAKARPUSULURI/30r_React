import React from 'react'

const Table = ({ headings, dataSource }) => {
    console.log(headings)
    return (
        <table border={1} cellSpacing={0}>
            <thead>
                <tr>
                    {headings.map((column, index) => {
                        return (
                            <th>{column[0].toUpperCase() + column.slice(1,)}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {dataSource.length > 0 ? (
                    <>
                        {dataSource.map((row, index)=>{ //{} -> 1st
                            return (
                                <tr>
                                    {headings.map((cell, index)=>{ //"id" -> 
                                        return (
                                            <td style={{textAlign: "center"}}>{row[cell] || "-"}</td> //row[cell] -> {}["id"]
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </>
                ) : (
                    <>
                        <p>No Data Found</p>
                    </>
                )}
            </tbody>
        </table>
    )
}

export default Table