import Image from "next/image";
import { useEffect, useState } from "react";

export default function LazyImage({ src, alt, width, height, className }) {
  const [isLoading, setLoading] = useState(true);
  const [isVideo, setIsVideo] = useState(false)
  const [fileFormat, setFileFormat] = useState('')

  useEffect(() => {
    if (src && src.length) {
      const videoFormats = ['mp4', 'webm', 'mov']
      videoFormats.forEach((format) => {
        const isVideoUrl = src?.split('.')?.includes(format)
        if (isVideoUrl) {
          setFileFormat(format)
          setIsVideo(true)
        }
      })
    }
  }, [src])

  if (isVideo) {
    return (
      <video placeholder="/placeholder.png" autoPlay muted loop className='h-96 w-full object-cover'  >
        <source src={src} type={`video/${fileFormat}`}></source>
      </video>
    )
  }

  return (
    <Image
      alt={alt}
      src={src ?? "/placeholder.png"}
      width={width ?? 100}
      height={height ?? 100}
      className={`${className}
                duration-700 ease-in-out
                ${isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
        })`}
      placeholder="blur"
      blurDataURL="/placeholder.png"
      onLoad={() => setLoading(false)}
    />
  );
}
