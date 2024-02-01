"use client"

import { Button } from "@/components/ui/button";
import {UploadResult} from "../page"
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from "next/navigation";


export default function UploadBUtton (){

  const router = useRouter();
    return(
<Button asChild className="p-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 focus:outline-none focus:shadow-outline-blue active:shadow-none">
    
   

<CldUploadButton 
      onUpload={(result:UploadResult |any) =>{
          // setImageId(result.info.public_id);
          setTimeout(() => {
            
            console.log("refresh");
            router.refresh();
          }, 1000);
        }}
        uploadPreset="xtyutecs"
        >
          <div className="flex gap-2 items-center">          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
</svg>
Upload
</div>
 
          </CldUploadButton>
        
      </Button>
        )
}