import { Loader2Icon } from 'lucide-react';
import { useEffect, useState } from 'react'

export default function ImageAnimation({ candidate }: { candidate: number }) {
  const [FotoPaslon, setFotoPaslon] = useState("")
  const [Opacity, setOpacity] = useState<1 | 0>(1)
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let images: any;
    switch (candidate) {
      case 1:
        images = import.meta.glob('/src/assets/FOTO_OSIS1/*.webp')
        break;

      case 2:
        images = import.meta.glob('/src/assets/FOTO_MPK1/*.webp')
        break;

      case 3:
        images = import.meta.glob('/src/assets/FOTO_OSIS2/*.webp')
        break;

      case 4:
        images = import.meta.glob('/src/assets/FOTO_MPK2/*.webp')
        break;

      default:
        return () => console.log("lmao")
    }

    const loadImages = async () => {
      const importedImages: string[] = [];

      for (const path in images) {
        const imageModule: any = await images[path]();
        importedImages.push(imageModule.default)
      }

      setImages(importedImages);
    };

    loadImages();
  }, []);


  useEffect(() => {
    setFotoPaslon(images[0])

    const interval = setInterval(() => {
      setOpacity(0)

      setTimeout(() => {
        const rad = Math.floor(Math.random() * images.length)
        setOpacity(1)
        setFotoPaslon(images[rad])
        console.log(Opacity)
      }, 5000)
    }, 10000)

    return () => clearInterval(interval)
  }, [images])

  if (FotoPaslon === "" || images.length <= 0) {
    return <div className="flex items-center justify-center h-[35rem]"><Loader2Icon className="animate-spin w-[25rem]" /></div>
  }

  return (
    <img src={FotoPaslon} alt="Foto Calon" className={`opacity-${Opacity} transition-all duration-[7000ms]`} />
  )
}

