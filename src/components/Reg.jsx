import React from 'react'

const Reg = ({ name, email, phone, city, state, setCourse, handleInput, handleSubmit, toggleBtn }) => {
    return (
        <div>
            <h2  className='text-center my-4'> <b>Student Form</b></h2>
            <div className='card mt-5 mx-auto' style={{ outline: "2px solid black", width: "30%", backgroundColor: "whitesmoke" }}>
                <div className="card-body">
                    <form>
                        <div className="form-group ">
                            <label><b>Student Name</b></label><br />
                            <input type="text" style={{ outline: "2px solid grey" }} className='form-control form-control-lg' placeholder='Enter your Name' name="name" value={name} onChange={handleInput} />
                        </div><br />
                        <div className="form-group ">
                            <label ><b>Email Id</b></label><br />
                            <input type="text" style={{ outline: "2px solid grey" }} className='form-control form-control-lg' placeholder='Enter your email' name='email' value={email} onChange={handleInput} />
                        </div><br />
                        <div className="form-group ">
                            <label ><b>Contact Number</b></label><br />
                            <input type="text" style={{ outline: "2px solid grey" }} className='form-control form-control-lg' placeholder='Enter Mobile Number' name='phone' value={phone} onChange={handleInput} />
                        </div><br />
                        <div className="form-group ">
                            <label><b>City</b></label><br />
                            <input type="text" style={{ outline: "2px solid grey" }} className='form-control form-control-lg' placeholder='Enter your City' name='city' value={city} onChange={handleInput} />
                        </div><br />
                        <div className="form-group ">
                            <label><b>State</b></label><br />
                            <input type="text" style={{ outline: "2px solid grey" }} className='form-control form-control-lg' placeholder='Enter your state' name='state' value={state} onChange={handleInput} />
                        </div><br />
                        <div className="form-group ">
                            <label><b>Course</b></label><br />
                            <input type="radio" style={{ height: "20px", width: "20px" }} aria-label="Radio button for following text input" name='course'   value="Front-End" onChange={(e) => setCourse(e.target.value)} /><label style={{ fontSize: "20px" }}>Front-End</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="radio" style={{ height: "20px", width: "20px" }} aria-label="Radio button for following text input" name='course' value="Back-End" onChange={(e) => setCourse(e.target.value)} /><label style={{ fontSize: "20px" }}>Back-End</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="radio" style={{ height: "20px", width: "20px" }} aria-label="Radio button for following text input" name='course' value="Full-Stack" onChange={(e) => setCourse(e.target.value)} /><label style={{ fontSize: "20px" }}>Full-Stack</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div><br />
                        <div className="d-flex justify-content-center">
                            {
                                toggleBtn ? <button className="btn btn-primary" onClick={handleSubmit} ><b>Submit</b></button> :
                                    <button className="btn btn-warning" onClick={handleSubmit} ><b>Update</b></button>
                            }
                        </div>
                    </form>
                </div>
            </div><br /><br />
        </div>
    )
}

export default Reg