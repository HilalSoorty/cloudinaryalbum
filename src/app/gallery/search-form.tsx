'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Ghost } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function SearchForm({initialSearch}: {initialSearch:string}){
    const [tagName, setTagName] = useState(initialSearch ?? "")
    const router = useRouter();
    useEffect(() => {
    setTagName(initialSearch);
    }, [initialSearch]);

    return(
        <form 
        onSubmit={(e) => {
        e.preventDefault();
        router.replace(`gallery?search=${encodeURIComponent(tagName)}`)
        
        }}
        >
             <Label htmlFor="tag-name" className="text-right">
              Search By Tag
            </Label>
            <div className="flex gap-2">
            <Input className="border border-white rounded mb-4"
            value={tagName}
            onChange={(e) => setTagName(e.currentTarget.value)}
              id="tag-name"
              
            />
            <Button type="submit">Search</Button>
            </div>
        </form>
    )
}