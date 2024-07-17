import Penus from '/penus.png';
import Instagram from '/instagram.png';
import Youtube from '/youtube.png';
import Facebook from '/facebook.png';
import Website from '/web.png';
import Tiktok from '/tiktok.png'


const Footer: React.FC = () => {

    return (
        <footer className='bg-gradient-to-t from-merah-penus from-5% mt-5 flex flex-col items-center justify-between text-putih-putih p-4 h-72' >
        <div className='flex mt-10'>
            <img src={Penus} alt="Penus" className='w-14'/>
            <p className='align-bottom self-center text-base text-[#d9d9d9] font-semibold'>SMK PLUS PELITA NUSANTARA</p>
        </div>
        <div className=''>
            <ul className='flex gap-8 mt-5'>
                <li>
                    <img src={Instagram} className='rounded-full w-9' alt='ig'/>
                </li>
                <li>
                    <img src={Youtube} className='rounded-full w-9' alt='yt'/>
                </li>
                <li>
                    <img src={Facebook} className='rounded-full w-9' alt='fb'/>
                </li>
                <li>
                    <img src={Website} className='rounded-full w-9' alt='web'/>
                </li>
                <li>
                    <img src={Tiktok} className='rounded-full w-9' alt='tktk'/>
                </li>
            </ul>
        </div>
        <h5 className='text-xs '>© 2024 SMK PLUS PELITA NUSANTARA™. All Rights Reserved.</h5>
    </footer>
    )
}

export default Footer;