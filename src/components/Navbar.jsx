import Logo from '../assets/images/logo.png'

function Navbar() {
  
  return (
   <>
   <div className="container mx-auto px-6 py-6 flex justify-between items-center md:px-20 lg:px-44">
       <img src={Logo} alt="Kiruthaya Foundation Logo" width={150} className="hover:animate-pulse"/>
       <button className="h-8 w-24 rounded-lg text-sm font-semibold text-opacity-95 bg-green-500 text-white shadow-lg shadow-green-500/50 hover:animate-pulse">Gallery</button>
   </div>
   </>
  )
}

export default Navbar