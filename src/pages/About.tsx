import '../index.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="wrapper w-full">
            <div className="hero-section h-[60vh]">
                <h1 className='text-3xl md:text-5xl bg-transparent text-white font-semibold'>About VanLife</h1>
            </div>
            <div className="container lg:w-3/5 mx-auto py-8 border-black">
                <h2 className='text-center text-2xl md:text-4xl font-bold md:w-3/4 mx-auto px-2'>Don’t squeeze in a sedan when you could relax in a van.</h2>

                <div className=' content flex flex-col gap-y-4 my-8 px-4'>
                    <p className='text-neutral-800'>Welcome to <strong>#VANLIFE</strong>, your one-stop destination for campervan adventures. Whether you're a seasoned campervan enthusiast or a curious newcomer, we're here to make your road trip dreams a reality.</p>

                    <p className='text-neutral-800'>At Vanlife, we believe in the transformative power of van life. It's an opportunity to escape the ordinary, embrace the open road, and connect with nature on a deeper level. It's about forging new paths, discovering hidden gems, and creating memories that will last a lifetime.</p>

                    <div className='grid md:grid-cols-2 gap-x-20 gap-y-12 my-12 border-neutral-400'>
                        <div>
                            <h3 className='text-lg font-bold mb-4'>Rent a Campervan</h3>
                            <p className='text-neutral-700 text-sm'>Our comprehensive fleet of campervans caters to every need and budget. From compact pop-top vans to spacious motorhomes, we have the perfect vehicle to suit your adventure plans. Each campervan is meticulously maintained and equipped with all the essentials for a comfortable and enjoyable journey.</p>
                        </div>
                        <div>
                            <h3 className='text-lg font-bold mb-4'>Our Community</h3>
                            <p className='text-neutral-700 text-sm'>Join our vibrant community of campervan enthusiasts and connect with fellow adventurers. Share your experiences, exchange tips, and discover new destinations along the way. We're here to support you every step of your van life journey.</p>
                        </div>
                        <div>
                            <h3 className='text-lg font-bold mb-4'>Host Your Campervan</h3>
                            <p className='text-neutral-700 text-sm'>If you own a campervan that's not in constant use, why not share it with others and earn some extra income? With #VANLIFE, you can list your campervan for rent and reach a wide network of potential renters. We handle the booking process, payments, and insurance, so you can sit back and relax while earning passive income.</p>
                        </div>
                        <div>
                            <h3 className='text-lg font-bold mb-4'>Embrace the #VANLIFE Experience</h3>
                            <p className='text-neutral-700 text-sm'>#VANLIFE is more than just renting a campervan; it's a lifestyle. It's about embracing the freedom of the open road, exploring new horizons, and living life on your own terms. Let us be your guide as you embark on your unforgettable #VANLIFE adventure.</p>
                        </div>
                    </div>

                    <div className='py-8 px-4 md:px-8 bg-[#FFCC8D] rounded-xl'>
                        <p className='text-xl md:text-2xl font-bold mb-4'>Your destination is waiting.</p>
                        <p className='text-xl md:text-2xl font-bold mb-8'>Your van is ready.</p>
                        <Link to='/vans' className='bg-[#161616] text-white text-sm md:text-[16px]  px-2 md:px-6 py-2 rounded-md mt-20'>
                            <button>Explore our vans</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About