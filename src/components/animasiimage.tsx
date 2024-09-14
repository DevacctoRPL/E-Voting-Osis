import { useEffect, useState } from 'react'

export default function ImageAnimation() {
const [images, setImages] = useState<string[]>([]);
  const [FotoPaslon, setFotoPaslon] = useState(images[0])
  const [Opacity, setOpacity] = useState<1 | 0>(1)

  useEffect(() => {
    const images = import.meta.glob('/public/assets/FOTO_OSIS1/*.{png,jpg,jpeg}');
    
    const loadImages = async () => {
      const importedImages: string[] = [];
      
      for (const path in images) {
        // Dynamically import each image and store it
        const imageModule:any = await images[path]();
        importedImages.push(imageModule.default)
      }
      
      setImages(importedImages);
    };

    loadImages();
  }, []);
  useEffect(()=>{
    console.log(images)
  },[images])
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        const rad = Math.floor(Math.random() * images.length)
        setFotoPaslon(images[rad])
        console.log(images[rad])
        setOpacity(1)
      }, 4000)
    }, 10000)
    return () => clearInterval(interval)
  }, [images])
  
  if(images.filter((im)=>im ===null || im === undefined || im === "").length > 0) {
    return <p className="w-full">bentar cog</p>
  }
  return (
    <img src={FotoPaslon} alt="Foto Calon" className={` opacity-${Opacity} transition-all duration-[5000ms]`} id="img" />
  )
}

