import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub,FaLinkedin,FaTwitter   } from "react-icons/fa";



const Footer = () => {
  return (
  <div className='bg-[#0b1120]'>
  <footer className="py-10 text-center border-t border-gray-800">
        <div className="flex justify-center gap-6 mb-6 text-white">
            <Link to={'https://github.com/mesbaulrafi'}><i className='cursor-pointer hover:text-[#10b981]'><FaGithub /></i> </Link>
            <Link to={'https://www.linkedin.com/in/mesbaulrafi/'}><i className='cursor-pointer hover:text-[#10b981]'><FaLinkedin /></i> </Link>
            <Link to={'https://x.com/MesbaulRafi'}><i className='cursor-pointer hover:text-[#10b981]'><FaTwitter /></i></Link>
        </div>
        <p className="text-xs text-gray-500">© 2026 Mesbaul Rafi. All Rights Reserved.</p>
    </footer>
  </div>
  )
}

export default Footer