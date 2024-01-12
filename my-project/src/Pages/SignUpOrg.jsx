import { Link } from "react-router-dom";

function SignUpOrg() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' className='border p-3 rounded-lg' id='name' placeholder='Name'/>
        <input type='text' className='border p-3 rounded-lg' id='username' placeholder='Username'/>
        <input type='email' className='border p-3 rounded-lg' id='email' placeholder='Email'/>
        <input type='password' className='border p-3 rounded-lg' id='password' placeholder='Password'/>
        <button type='submit' className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">Sign Up</button>
      </form>
      <p>Already have an account? <Link to='/signin/org'><span className="text-blue-700 hover:underline">Sign in</span></Link></p>
      <p>To sign in as a user:  <Link to='/signin/user'><span className="text-blue-700 hover:underline">Click here</span></Link></p>
    </div>
  )
}

export default SignUpOrg;
