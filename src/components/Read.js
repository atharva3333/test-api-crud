import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
                            <th scope="col">Image</th>
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
                                            <td><img src={eachData.image} alt="image not selected" /></td>
                                            <td><button className='btn-light'>Edit</button></td>
                                            <td><button className='btn-danger' onClick={()=>handleDelete(eachData.id)}>Delete</button></td>


                                        </tr>


                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
            </div>

        </>
    )
}

export default Read