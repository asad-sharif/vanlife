import { Link } from 'react-router-dom'
import homeVanImage from '../assets/home-van-img.jpg'
import homeVans from '../assets/home-vans.jpg'

function Home() {
    return (
        <div className='home-container'>
            <div className="home-hero-section h-[95vh] text-white flex flex-col justify-center items-start gap-6 px-4 md:px-12 lg:px-20">
                <h1 className='text-3xl md:text-5xl lg:text-7xl tracking-wider font-bold drop-shadow-2xl shadow-black'>You got the plans, <br />we got
                    the vans.</h1>
                <p className='text-sm sm:text-xl drop-shadow-2xl shadow-black'>Rent the perfect van to make your road trip perfect.</p>
                <Link to='/vans' className='bg-[#FF8C38] text-black text-sm md:text-[16px]  px-4 md:px-6 py-2 rounded-md'>
                    <button>Find your van</button></Link>
            </div>

            <div className="container mx-auto md:w-3/4 px-4 my-12">
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>The leading road trip services in Pakistan</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
                    <div className="bg-white px-3 py-4 rounded-lg shadow-md">
                        <h3 className='text-lg font-bold mb-4'>Flexible cancellation</h3>
                        <p className='text-sm text-neutral-500'>Cancel your trip for a full refund up to 20 days or opt for an 85% value voucher up to 72h before your pick-up date!</p>
                    </div>
                    <div className="bg-white px-3 py-4 rounded-lg shadow-md">
                        <h3 className='text-lg font-bold mb-4'>One-way trips are available</h3>
                        <p className='text-sm text-neutral-500'>Collect and return your campervan at over 70 locations spanning North America, Europe, and Oceania.</p>
                    </div>
                    <div className="bg-white px-3 py-4 rounded-lg shadow-md">
                        <h3 className='text-lg font-bold mb-4'>RAC Breakdown Cover</h3>
                        <p className='text-sm text-neutral-500'>Our collaboration with RAC ensures 24/7 nationwide breakdown coverage to ensure your adventure stays on course.</p>
                    </div>
                    <div className="bg-white px-3 py-4 rounded-lg shadow-md">
                        <h3 className='text-lg font-bold mb-4'>Book now, pay later!</h3>
                        <p className='text-sm text-neutral-500'>With our highly flexible cancellation policy for campervans, you're only required to pay the complete booking amount 20 days before your trip begins.</p>
                    </div>

                </div>
            </div>

            <div className='home-vans-section'>

                <div className="first-section flex flex-col md:flex-row bg-[#FFCC8D] ">
                    <div className='flex-1 md:order-2 md:h-[50vh] lg:h-[60vh] '>
                        <img src={homeVans} alt="" className='w-full h-[300px] md:h-full  object-cover object-center' />
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-start gap-8 py-4 md:py-0">
                        <h2 className='text-xl md:text-2xl lg:text-4xl mx-8 font-semibold'>Check out all of the Vanlife models!</h2>
                        <p className='text-neutral-900 mx-8'>Explore our range of Vanlife Camper models and locate your ideal travel home that fulfills all your desires and turns your travel dreams into reality. We provide a varied assortment of campervans from well-known manufacturers such as Knaus, Fiat, VW, and many others.</p>

                        <Link to='/vans' className='bg-[#161616] text-white text-sm md:text-[16px]  px-2 md:px-6 py-2 rounded-md mx-8'>
                            <button>Find your van</button>
                        </Link>
                    </div>
                </div>

                <div className="second-section flex flex-col md:flex-row bg-[#FFCC8D] ">
                    <div className='flex-1 md:h-[50vh] lg:h-[60vh]'>
                        <img src={homeVanImage} alt="" className='w-full h-[300px] md:h-full  object-cover object-center' />
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-start gap-8 py-4 md:py-0">
                        <h2 className='text-xl md:text-2xl lg:text-4xl mx-8 font-semibold'>Do you own a campervan?
                            Generate more than 50,000Rs monthly!</h2>
                        <p className='text-neutral-900 mx-8'>Have you thought about generating income during the times when your campervan is not in use? Register your vehicle for free and make it available for rent whenever you choose.</p>

                        <Link to='' className='bg-[#161616] text-white text-sm md:text-[16px]  px-2 md:px-6 py-2 rounded-md mx-8'>
                        <button>Rent your campervan</button>
                        </Link>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default Home