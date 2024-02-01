'use client'
import cloudinary from "cloudinary"
import { CloudinaryImage } from "../../components/clourdinary-image";
import { ForceRefresh } from "@/components/ui/force-refresh";
import { SearchResult } from "../gallery/page";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";

export default  function FavoritesList({initialResources}: {initialResources: SearchResult[];}) {
  const [resources,setResources] = useState(initialResources)

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources])

  return(
    <ImageGrid images={resources}
    getImage = {(imageData: SearchResult) =>{
      return(
        <CloudinaryImage
        path = "/Favorites"
        key = {imageData.public_id}
        imageData = {imageData}
        alt = "an image of something"
        onUnheart = {(unheartedResource) =>{
          setResources((currentResources:any) =>
          currentResources.filter(
            (resource:any) => resource.public_id !== unheartedResource.public_id
          )
          )
        }}
        width = "400"
        height = "300"
        />
        );
    }}
    />
  )
}


    