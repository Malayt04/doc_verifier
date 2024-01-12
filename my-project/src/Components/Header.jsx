import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
function Header() {
    return (
      <header className='bg-black'>
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
          <Link to="/">
            <img src={logo} className="logo" alt="Bal.dev" />
          </Link>
          <ul  className='flex gap-4'>
           <Link to='/'><li className='hidden sm:inline text-slate-100 hover:underline'>Home</li></Link> 
           <Link to='/about'> <li className='hidden sm:inline text-slate-100 hover:underline'>About Us</li></Link>
           <Link to='/contactus'><li className='hidden sm:inline text-slate-100 hover:underline'>Contact us</li></Link>
           <Link to='/signin/org'><li className='hidden sm:inline text-slate-100 hover:underline'>SignIn</li></Link>
          </ul>
        </div>
      </header>
    );
  }

export default Header
