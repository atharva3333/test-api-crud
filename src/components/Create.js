import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Create = () => {


    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [image,setImage]=useState('');
    
    const history = useNavigate();
    
    const header={"Access-Control-Allow-Origin":"multipart/form-data"}

    const handleSubmit=(e)=>{
        e.preventDefault();
          console.log("Clicked")
        axios.post(
            'https://62e39bc63c89b95396cbfcf6.mockapi.io/crud-op',
             {
                name:name,
                email:email,
                image:image,
                header
            })

            .then(()=>{
              history("/read")
            })
    }
  return (
    <>                                        

    <div className='container'>
    <h1>Create User</h1>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} />
  </div>

  <div className="mb-3">
  <label for="formFile" className="form-label">Upload Images</label>
  <input className="form-control" type="file" onChange={(e)=> setImage(URL.createObjectURL(e.target.files[0]))}/>
  <img src={image} alt='image cannot view'/>
</div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
</div>


    </>
  )
}

export default Create