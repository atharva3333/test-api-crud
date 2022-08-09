import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const Update = () => {

    const [id,setid]=useState(0);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const history = useNavigate();

    useEffect(() => {
      setid(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));
      
    }, [])

    const handleUpdate =(e)=>{
           e.preventDefault();
        axios.put(`https://62e39bc63c89b95396cbfcf6.mockapi.io/crud-op/${id}`,
        {
            name:name,
            email:email,
            
            
        })
        .then(()=>{
            history("/read")
        })
    }
    
  return (
    <>
    <h3>Update Details</h3>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control"
    value={name}
     onChange={(e)=> setName(e.target.value)}

     />
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" className="form-control" 
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
     />
  </div>

  
  
  <button type="submit" className="btn btn-primary" 
   onClick={handleUpdate}
  >Submit</button>
</form>
    </>
  )
}

export default Update