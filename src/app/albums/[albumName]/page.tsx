import Result from "postcss/lib/result";
import cloudinary from "cloudinary"
import { CldImage } from 'next-cloudinary';
import { Columns } from "lucide-react";
import { ImageGrid } from "@/components/image-grid";
import AlbumGrid from "./album-grid";
import { SearchResult } from "@/app/gallery/page";
import { ForceRefresh } from "@/components/ui/force-refresh";




export default async function galleryPage({
    params:{
        albumName
    }
}:{params:{
    albumName:string
}}

) {

const results = (await cloudinary.v2.search
.expression(`resource_type:image AND folder=${albumName}`)
.sort_by('created_at','desc')
.with_field("tags")
.max_results(30)
.execute()) as {resources: SearchResult[]};

return(
  <section>
    <ForceRefresh/>
    <div className="flex flex-col m-5">
      <div className="flex justify-between ">
      <h1 className="text-4xl font-bold">Album: {albumName}</h1>
    </div>
    <AlbumGrid
    images={results.resources}
    />
    
    </div>
  </section>

  ) 
}

    