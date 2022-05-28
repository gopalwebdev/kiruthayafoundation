import './App.scss'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Trustee from './components/Trustee'

function App() {
  return (
   <>
   <div className='antialiased'>
    <Navbar/>
    <Landing/>
    <Trustee/>
   </div>
   </>
  )
}

export default App
