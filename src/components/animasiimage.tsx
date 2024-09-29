import { Loader2Icon } from 'lucide-react';
import { useEffect, useState } from 'react'
import FotoMPK from '/assets/mpk.png'
import FotoOSIS from '/assets/osis.png'

export default function ImageAnimation({ candidate }: { candidate: number }) {
  const [FotoPaslon, setFotoPaslon] = useState("")
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
    const img = document.getElementById("imeg")

    setFotoPaslon(images[0])

    const interval = setInterval(() => {
      img?.classList.remove("opacity-1")
      img?.classList.add("opacity-0")

      setTimeout(() => {

        const rad = Math.floor(Math.random() * images.length)
        setFotoPaslon(images[rad])
        img?.classList.remove("opacity-0")
        img?.classList.add("opacity-1")

      }, 3500)

    }, 7000)

    return () => clearInterval(interval)
  }, [images])

  if (FotoPaslon === "" || images.length <= 0) {
    return <LoaderZ h={"35rem"}/>
  }

  return (
    <div className="a">
      <img id="imeg" src={FotoPaslon} alt="Foto Calon" className={' transition-all duration-[4000ms]'} />
    </div>
  )
}

export function OrgImage({ Org, className }: { Org: "OSIS" | "MPK", className: string }) {
  const [OrgFoto, setOrgFoto] = useState<string>()
  useEffect(() => {
    switch (Org) {
      case "OSIS":
        setOrgFoto(FotoOSIS)
        break;

      case "MPK":
        setOrgFoto(FotoMPK)
        break;
    }
  }, [Org])

  return <img src={OrgFoto} alt={`Foto ${Org}`} className={className} />
}

export function LoaderZ({h = "1rem"}:{h:string}) {
  return <div className={`flex items-center justify-center h-[${h}]`}><Loader2Icon className="animate-spin w-[25rem]" /></div>
}
