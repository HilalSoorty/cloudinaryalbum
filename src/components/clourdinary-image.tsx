"use client"
import { CldImage, CldImageProps } from 'next-cloudinary';
import Heart from '@/components/ui/icons/heart'
import cloudinary from "cloudinary"
import SetasFavouriteAction from "../app/gallery/actions"
import { useState, useTransition } from 'react';
import { SearchResult } from '../app/gallery/page';
import FullHeart from '@/components/ui/icons/full-heart';
import path from 'path';
import { ImageMenu } from './image-menu';


export function CloudinaryImage(props:
     {imageData :SearchResult; onUnheart?:(
    unheartedResource:SearchResult
) => void;
[key:string]:any;
} & Omit<CldImageProps, "src">
) {
    const [transition, startTransition] = useTransition();
    
    const {imageData, onUnheart} = props; 

    const [isFavorited, setisFavorited] = useState(
        imageData.tags.includes("favorite")
    )


    return (
        <div className='relative'>
            <CldImage {...props} src={imageData.public_id} />

            {isFavorited ?
                <FullHeart
                    onClick={() => {
                        onUnheart?.(imageData)
                        setisFavorited(false)
                        startTransition(() => {
                            SetasFavouriteAction(imageData.public_id, false)
                        })
                    }}
                    className='absolute top-2 left-2 hover:text-white  text-red-500 cursor-pointer'
                />
                :

                <Heart
                    onClick={() => {
                        setisFavorited(true)
                        startTransition(() => {
                            SetasFavouriteAction(imageData.public_id, true)
                        })
                    }}
                    className='absolute top-2 left-2 hover:text-red-500 cursor-pointer'
                />}
                <ImageMenu
                image={imageData}
                />
        </div>

    )
}