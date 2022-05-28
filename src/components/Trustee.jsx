import Dhandapani from '../assets/images/Dhandapani.jpg'
import Ashok from '../assets/images/Ashok.jpg'
import Gopinath from '../assets/images/Gopinath.jpg'
import Mohanraj from '../assets/images/Mohanraj.jpg'


function Trustee() {
  return (
    <>
    <div className="container mx-auto grid gap-y-20 grid-flow-row grid-cols-2 lg:grid-cols-4 justify-center text-center my-16 md:my-28">
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
    </>
  )
}

export default Trustee