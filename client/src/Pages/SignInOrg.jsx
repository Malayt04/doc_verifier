import { useState } from "react"
import {useNavigate,Link} from 'react-router-dom'

function SignInOrg() {
  const [formData,setFormData] =useState({
    email:'',password:''
  })

  const [error,setError]=useState(null);
  const [loading,setLoading] = useState(false);

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }

  const navigate =useNavigate();

  const handleSubmit=async(e)=>{
    try {
      e.preventDefault();
      setLoading(true);
      const res= await fetch('/api/auth/org/signin',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data=await res.json();
      if(data.success===false){
        setLoading(false);
        setError(data.message);
      }
      setLoading(false);
      console.log(data);
      navigate('/');
    } catch (error) {
      setError(error);
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <input type='email' className='border p-3 rounded-lg' id='email' placeholder='Email' onChange={handleChange}/>
      <input type='password' className='border p-3 rounded-lg' id='password' placeholder='Password' onChange={handleChange}/>
      <button disabled={loading} type='submit' className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">{loading?'Loading':'Sign Up'}</button>
    </form>
    <div className="flex gap-2 mt-5">
    <p>Already have an account? <Link to='/signin/org'><span className="text-blue-700 hover:underline">Sign in</span></Link></p>
    <p>To sign in as a user:  <Link to='/signin/user'><span className="text-blue-700 hover:underline">Click here</span></Link></p>
  </div>
  {error && <p className="text-red-500">{error}</p>}
  </div>
  )
}

export default SignInOrg
