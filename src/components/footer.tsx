import Penus from '/assets/penus.png';


const Footer: React.FC = () => {

  return (
    <footer className=' flex bg-gradient-to-t from-merah-penus from-5% mt-5 flex-col items-center justify-end gap-[2rem] text-putih-putih p-4 h-72' >
      <div className='flex mt-10'>
        <img src={Penus} alt="Penus" className='w-14' />
        <p className='align-bottom self-center text-base text-[#d9d9d9] font-semibold'>SMK PLUS PELITA NUSANTARA</p>
      </div>
      <h5 className='text-xs'>© 2024SMK PLUS PELITA NUSANTARA™. All Rights Reserved.</h5>
    </footer>
  )
}

export default Footer;
