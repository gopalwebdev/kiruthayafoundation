import './App.scss'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Trustee from './components/Trustee'
import Quote from './components/Quote'

function App() {
  return (
   <>
   <div className='antialiased'>
    <Navbar/>
    <Landing/>
    <Trustee/>
    <Quote/>
   </div>
   </>
  )
}

export default App
