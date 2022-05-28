import Dhandapani from '../assets/images/Dhandapani.jpg'
import Ashok from '../assets/images/Ashok.jpg'
import Gopinath from '../assets/images/Gopinath.jpg'
import Mohanraj from '../assets/images/Mohanraj.jpg'


function Trustee() {
  return (
    <>
    <div className="container mx-auto grid gap-y-20 grid-flow-row grid-cols-2 lg:grid-cols-4 justify-center text-center mt-16 md:mt-28">
        <div className='flex justify-center items-center flex-col'>
            <img src={Dhandapani} alt="Dhandapani - Kiruthaya Foundation" width={120} className='rounded-full drop-shadow-2xl' />
            <p className='mt-6 text-black text-opacity-80 font-normal md:font-medium text-sm md:text-xl'>Dhandapani</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <img src={Ashok} alt="Ashok - Kiruthaya Foundation" width={120} className='rounded-full drop-shadow-2xl'/>
            <p className='mt-6 text-black text-opacity-80 font-normal md:font-medium text-sm md:text-xl'>Ashok</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <img src={Gopinath} alt="Gopinath - Kiruthaya Foundation" width={120} className='rounded-full drop-shadow-2xl'/>
            <p className='mt-6 text-black text-opacity-80 font-normal md:font-medium text-sm md:text-xl'>Gopinath</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <img src={Mohanraj} alt="Mohanraj - Kiruthaya Foundation" width={120} className='rounded-full drop-shadow-2xl'/>
            <p className='mt-6 text-black text-opacity-80 font-normal md:font-medium text-sm md:text-xl'>Mohanraj</p>
        </div>
    </div>
    <svg viewBox="0 0 1440 320"><path fill="rgb(22 163 74)" fill-opacity="0.8" d="M0,128L48,128C96,128,192,128,288,154.7C384,181,480,235,576,218.7C672,203,768,117,864,112C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </>
  )
}

export default Trustee