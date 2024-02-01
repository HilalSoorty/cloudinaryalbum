'use client'
import Result from "postcss/lib/result";
import UploadBUtton from "./uplload-button";
import cloudinary from "cloudinary"
import { CldImage } from 'next-cloudinary';
import { CloudinaryImage } from "../../components/clourdinary-image";
import { Columns } from "lucide-react";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";



export default function GalleryGrid({images}: {images: SearchResult[]}) {

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

    