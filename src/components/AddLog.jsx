import axios from 'axios'
import React, { useState } from 'react'

const AddLog = () => {
    const [input, changeInput] = useState(
        {
            "name": "",
            "dept": "",
            "sem": "",
            "course": "",
            "systemNo": "",
            "logintime": "",
            "logoutDate": "",
            "date": "",
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:9000/add-Lab", input).then(
            (response) => {
                console.log(response.data)
                alert("Log added successfully")
            }
        ).catch(
            (error) => {
                console.error("Error adding course:", error)

                alert("Failed to add Log")
            }
        )
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Student Name</label>
                                <input type="text" className="form-control" placeholder="" required name="name" value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Department</label>
                                <input type="text" className="form-control" placeholder="" required  name="dept" value={input.dept} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Semester</label>
                                <input type="text" className="form-control" placeholder="" required  name="sem" value={input.sem} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" placeholder="" required  name="course" value={input.course} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">System Number</label>
                                <input type="tel" className="form-control" placeholder="" required  name="systemNo" value={input.systemNo} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Login Time</label>
                                <input type="text" className="form-control" placeholder="" name="logintime" value={input.logintime} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Logout Time</label>
                                <input type="text" className="form-control" placeholder="" required name="logoutDate" value={input.logoutDate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Date</label>
                                <input type="text" className="form-control" placeholder="YYYY-MM-DD" maxLength={10} name="date" value={input.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-warning" onClick={readValue}>SUBMIT</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddLog