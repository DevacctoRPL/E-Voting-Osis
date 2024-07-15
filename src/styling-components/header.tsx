import Penus from '../assets/penus.png'
import User from '../assets/user.png'

function Head() {
  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('backdrop-blur', window.scrollY > 5);
  });

  return (
    <nav className="bg-transparent transition-all duration-600 ease-in-out sticky top-0 w-full z-50 p-3">
    <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="">
            <img src={Penus} alt="Logo" className="w-16"/>
        </a>
        <h3 className='text-3xl font-bold text-[#d9d9d9]'>SMK <span className='text-[#d32710]'>PLUS</span> PELITA NUSANTARA</h3>
        <div className='group flex flex-col items-center bg-orange-950'>
            <img src={User} className='rounded-full cursor-pointer'/>
            <aside className='hidden flex-col bg-[#d9d9d9] top-[4.5rem] fixed group-hover:flex'>
                <ul>
                    <li>Username</li>
                    <li>Kelas</li>
                    <hr className='border-black'/>
                    <li>Logout</li>
                </ul>
            </aside>
        </div>
    </div>
    </nav>
  )
}

export default Head;