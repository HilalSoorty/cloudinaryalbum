import cloudinary from "cloudinary"
import { CloudinaryImage } from "../../components/clourdinary-image";
import { ForceRefresh } from "@/components/ui/force-refresh";
import FavoritesList from "./favourites-list";

export type SearchResult = {
  public_id: string;
  tags : string[];
}


export default async function FavoritesPage() {

const results = (await cloudinary.v2.search
.expression('resource_type:image AND tags=favorite ')
.sort_by('created_at','desc')
.with_field("tags")
.max_results(30)
.execute()) as {resources: SearchResult[]};




  return(
  <section>
    <ForceRefresh/>
    <div className="flex flex-col m-5">
      <div className="flex justify-between ">
      <h1 className="text-4xl font-extrabold leading-tight tracking-wide uppercase text-transparent bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text">Favorite Images 🧡</h1>
    
    </div>
    <FavoritesList
    initialResources={results.resources}
    />

    </div>
  </section>

  ) 
}

    