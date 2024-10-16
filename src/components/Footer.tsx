import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  // Create an array that stores the open/close state of each FAQ
  const [faqState, setFaqState] = useState<boolean[]>([false, false, false]);

  // Handler to toggle the FAQ state for a specific index
  const handleOpen = (index: number): void => {
    // Create a new array that toggles the clicked FAQ's open state
    const newFaqState = faqState.map((isOpen, i) =>
      i === index ? !isOpen : false // Toggle the clicked FAQ and close others
    );
    setFaqState(newFaqState);
  };

  return (
    <footer className='mt-8'>
      <div className="top-footer py-8 px-8 bg-[#e5e7eb] flex flex-col md:flex-row md:gap-12 gap-6 justify-around">
        <div className='mr-12 flex flex-col gap-2'>
          <h3 className='font-bold text-lg mb-2'>#VANLIFE</h3>
          <Link to='/' className='hover:underline'>Home</Link>
          <Link to='/about' className='hover:underline'>About us</Link>
          <Link to='/vans' className='hover:underline'>Vans</Link>
          <Link to='/host' className='hover:underline'>List your van</Link>
        </div>

        <div className='flex-1'>
          <h3 className='font-bold text-lg mb-2'>FAQs</h3>

          {/* FAQ 1 */}
          <h4
            className={` cursor-pointer  text-sm ${faqState[0] ? 'font-bold' : ''}`}  // Conditional class for boldness
            onClick={() => handleOpen(0)}  // Passing index 0 to handleOpen
          >
            Can I get a discount for last-minute hire?
          </h4>
          {faqState[0] && (  // Conditionally render based on faqState[0]
            <p className='text-sm text-neutral-700 mt-2 mb-4'>
              Absolutely! We're all about spontaneous adventures. While we can't promise last-minute discounts, we do have some great deals for those who embrace the unexpected. Check out our current promotions and hit the road with a smile!
            </p>
          )}

          <hr className='h-[2px] bg-neutral-400 opacity-50 rounded-full w-1/2 my-2 ' />
          {/* FAQ 2 */}
          <h4
            className={` cursor-pointer  text-sm ${faqState[1] ? 'font-bold' : ''}`}  // Conditional class for boldness
            onClick={() => handleOpen(1)}  // Passing index 1 to handleOpen
          >
            What if I need to cancel?
          </h4>
          {faqState[1] && (  // Conditionally render based on faqState[1]
            <p className='text-sm text-neutral-700 mt-2 mb-4'>
              Change of plans? No worries! If you cancel 20 or more days before your pick-up, you get a full refund. For cancellations 72 hours to 20 days prior, choose between a 50% refund or a travel voucher (full value with a 15% fee). Unfortunately, within 72 hours, no refunds or vouchers. We appreciate your understanding and flexibility!
            </p>
          )}

          <hr className='h-[2px] bg-neutral-400 opacity-50 rounded-full w-1/2 my-2 ' />
          {/* FAQ 3 */}
          <h4
            className={` cursor-pointer  text-sm ${faqState[2] ? 'font-bold' : ''}`}  // Conditional class for boldness
            onClick={() => handleOpen(2)}  // Passing index 2 to handleOpen
          >
            Can I return my campervan to a different location?
          </h4>
          {faqState[2] && (  // Conditionally render based on faqState[2]
            <p className='text-sm text-neutral-700 mt-2 mb-4'>
              Yes, we offer one-way rentals for those who like to mix up their journey. Just let us know in advance, and we'll make sure your road trip ends right where you want it to.
            </p>
          )}
        </div>

        <div className='flex-1'>
          <h3 className='font-bold text-lg mb-2'>VanLife</h3>
          <p className='text-sm text-neutral-700'>
            Explore Pakistan's beauty at your own pace with our high-quality campervans. Whether renting or buying, our user-friendly platform ensures a seamless journey. Begin your unforgettable adventure today!
          </p>
        </div>

        <div className='flex-1'>
          <h3 className='font-bold text-lg mb-2'>Subscribe to our newsletter</h3>
          <p className='text-sm text-neutral-700'>
            Stay informed by subscribing to receive periodic notifications about the latest campervan rental promotions, exclusive deals, and informative news!
          </p>
          <form>
            <input type="email" name="Email" id="email" required className='w-full rounded-md px-4 py-2 mt-6' />
            <button className='w-full rounded-md px-4 py-2 my-2 bg-[#FF8C38] font-bold'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className="bottom-footer text-center bg-[#252525] text-[#AAAAAA] py-2">
        Developed by <Link to='https://github.com/asad-sharif' className='underline font-semibold hover:text-white'>Asad Sharif</Link>
      </div>
    </footer>
  );
}

export default Footer;
