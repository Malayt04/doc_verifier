import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function SignUpOrg() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!formData.name || !formData.username || !formData.email || !formData.password) {
        setError('All fields are required');
        return;
      }

      setLoading(true);
      const res = await fetch('/api/auth/org/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!data.success) {
        setError(data.message || 'Something went wrong');
        setLoading(false);
        return;
      }

      setLoading(false);
      console.log(data);
      navigate('/');

    } catch (error) {
      setLoading(false);
      setError(error.message || 'Something went wrong');
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className='text-3xl text-center font-semibold my-7'>Sign up as an Organisation</h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <input type='text' className='border p-3 rounded-lg' id='name' placeholder='Name' onChange={handleChange}/>
      <input type='text' className='border p-3 rounded-lg' id='username' placeholder='Username' onChange={handleChange}/>
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

export default SignUpOrg;

   