import homebg from '../assets/homepage_background.jpg'
import './home.css'

function Home() {
  return (
    <div style={{backgroundImage:`url(${homebg})`, backgroundSize:`cover`,backgroundRepeat:`no-repeat`, height:`100vh`}}>
     <div className="flex justify-center items-center h-screen">
        <h1 className='text-white text-8xl font-bold'>
          Certify Verify Enjoy
        </h1>
     </div>
     </div>
  )
}

export default Home
