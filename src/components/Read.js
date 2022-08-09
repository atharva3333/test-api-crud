import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Read = () => {

    const [data, setdata] = useState([])

    function getData() {
        
        axios.get("https://62e39bc63c89b95396cbfcf6.mockapi.io/crud-op")
            .then((res) => {
                console.log(res);
                setdata(res.data)
            });

            
    }

    function handleDelete(id) {
        axios.delete(`https://62e39bc63c89b95396cbfcf6.mockapi.io/crud-op/${id}`)
        .then(()=>{
            getData();
        });
    }

    const setToLocalStorage =(id,name,email)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }


    useEffect(() => {
        
        getData();
    }, [])




    return (
        <>

            <div className='c'>
                <h2>Read</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            
                            <th scope="col">Edit Data</th>
                            <th scope="col">Delete Data</th>

                        </tr>
                    </thead>
                    {
                        data.map((eachData) => {
                            return (
                                <>

                                    <tbody>
                                        <tr>
                                            <th scope="row">{eachData.id}</th>
                                            <td>{eachData.name}</td>
                                            <td>{eachData.email}</td>
                                            
                                            <td>
                                            <Link to ="/update">
                                            <button className=' btn btn-success' onClick={()=> setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                                            </Link>
                                            
                                            </td>
                                            <td><button className='btn btn-danger' onClick={()=>handleDelete(eachData.id)}>Delete</button></td>


                                        </tr>


                                    </tbody>

                                    
                                </>
                            )
                        })
                    }
                </table>
            </div>


            <button className='btn btn-dark align-middle'><a className='.text-white' href='/'>Add User</a></button>

        </>
    )
}

export default Read