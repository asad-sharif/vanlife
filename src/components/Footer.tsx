import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='text-center bg-[#252525] text-[#AAAAAA] py-2 mt-8'>
      Developed by <Link to='https://github.com/asad-sharif' className='underline font-semibold'>Asad Sharif</Link>
    </footer>
  )
}

export default Footer