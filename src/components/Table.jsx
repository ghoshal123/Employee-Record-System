import React, { useState } from 'react'

const Table = ({ tabledata, setTableData, setUser, setToggleBtn, setEditId }) => {

    const [mySearch, setMySearch] = useState("");
    const [order, setOrder] = useState("ASC");

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...tabledata].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            )
            setTableData(sorted);
            setOrder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...tabledata].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            )
            setTableData(sorted);
            setOrder("ASC");
        }

    }
    const deleteData = (id) => {
        const newArray = tabledata.filter((elem) => {
            return (
                elem.id !== id
            )
        })
        setTableData(newArray);
    }
    const editData = (id) => {
        const editArray = tabledata.find((elem) => {
            return (
                elem.id === id
            )
        })
        setUser({ name: editArray.name, email: editArray.email, phone: editArray.phone, course: editArray.course, city: editArray.city, state: editArray.state })
        setToggleBtn(false);
        setEditId(id);
    }
    return (
        <div>

            <h1 className='text-center'>Table Data</h1>
            <div class=" d-flex justify-content-center">
                <input type="text" name="search" style={{ width: "30%", height: "50px", outline: "1px solid grey", borderRadius: "10px" }} placeholder="Search By Student Name" value={mySearch} onChange={e => setMySearch(e.target.value)} />
            </div><br /><br />
            <table className="table table-hover" style={{ width: "90%", margin: "auto", outline: "2px solid black", backgroundColor: "whitesmoke" }}>

                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">S.No<img src="/images/sort.png" alt="" /></th>
                        <th scope="col">Student Name<img src="/images/sort.png" alt="" onClick={() => sorting("name")} /></th>
                        <th scope="col">Email Address<img src="/images/sort.png" alt="" onClick={() => sorting("email")} /></th>
                        <th scope="col">Contact Number<img src="/images/sort.png" alt="" onClick={() => sorting("phone")} /></th>
                        <th scope="col">City<img src="/images/sort.png" alt="" onClick={() => sorting("city")} /></th>
                        <th scope="col">State<img src="/images/sort.png" alt="" onClick={() => sorting("state")} /></th>
                        <th scope="col">Course<img src="/images/sort.png" alt="" onClick={() => sorting("course")} /></th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tabledata.length === 0 ?
                            <h5 style={{ color: "red", textAlign: "center" }}>No Data to Display</h5> :
                            tabledata.filter(elem => elem.name.toLowerCase().includes(mySearch.toLowerCase())).map((elem, index) => {
                                return (
                                    <tr key={elem.id}>
                                        <td>{index + 1}.</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>{elem.city}</td>
                                        <td>{elem.state}</td>
                                        <td>{elem.course}</td>
                                        <td>

                                            <button className="btn btn-success" onClick={() => editData(elem.id)}  ><b>Edit</b></button>
                                            <button className="btn btn-danger mx-4" onClick={() => deleteData(elem.id)}  ><b>Delete</b></button>
                                        </td>
                                    </tr>
                                )

                            })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table