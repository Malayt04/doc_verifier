import Header from "./Components/Header"
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ProfilePage from "./Pages/ProfilePage"
import SignInOrg from "./Pages/SignInOrg"
import SignUpOrg from "./Pages/SignUpOrg"
import Home from "./Pages/Home"


function App() {


  return (
  
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" Component={Home}/>
  <Route path="/profile" Component={ProfilePage}/>
  <Route path="/signin/org" Component={SignInOrg}/>
  <Route path="/signup/org" Component={SignUpOrg}/>
</Routes>
</BrowserRouter>
        
    
  )
}

export default App
