import {User, FolderPlus, Pencil} from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from "./ui/icons/menu"
import { AddToAlbumDialog } from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
  
  export function ImageMenu({image}:{image: SearchResult}) {
    const [open,setOpen] = useState(false)
    return (
        <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="w-8 h-8 p-0 bg-gray-900 rounded">
          <Menu/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
            <DropdownMenuItem asChild >
              <AddToAlbumDialog
              image={image}
              onclose={() => setOpen(false)}
              />
            </DropdownMenuItem> 
            <DropdownMenuItem asChild >
            <Button asChild variant="ghost" className="cursor-pointer
            flex justify-start pl-4
            ">
              <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                <Pencil className="mr-2 w-4 h-8"/>
                Edit
                </Link>
                </Button>
              </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        </div>
    )
  }
  