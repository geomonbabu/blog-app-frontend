import React, { useState } from 'react'
import axios from 'axios'
import BlogNav from './BlogNav'

const AddBlog = () => {
    const [input,setInput] = new useState(
        { "username": "",
          "email": "",
          "image":"",
          "description":""
         
        }   
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/blog/addblog",input).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status=="success") {
                    alert ("Submitted successfully")
                    setInput(
                        { "username": "",
                        "email": "",
                        "image":"",
                        "description":""
        }
                    )
                        
                } else {
                    alert("Soemthing went wrong");
                }
            }
            
        )
    }
  return (
    <div>
        <BlogNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='username'value={input.username} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Image Upload</label>
                            <input type="file" className="form-control" name='image' value={input.image} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Description</label>
                            <input type="text" className="form-control" name='description' value={input.description} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <button className="btn btn-success" onClick={readvalues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBlog