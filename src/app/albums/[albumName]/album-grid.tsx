'use client'
import cloudinary from "cloudinary"
import { CldImage } from 'next-cloudinary';
import { Columns } from "lucide-react";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "@/app/gallery/page";
import { CloudinaryImage } from "@/components/clourdinary-image";



export default function AlbumGrid({images}: {images: SearchResult[]}) {

return(
    <ImageGrid images={images}
    getImage = {(imageData: SearchResult) =>{
      return(

        <CloudinaryImage
        key = {imageData.public_id}
        imageData = {imageData}
        alt = "an image of something"
        width = "400"
        height = "300"
        />
        );
    }}
    />

  ) 
}

    