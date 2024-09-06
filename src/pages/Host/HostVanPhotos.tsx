import React from 'react'
import { useOutletContext } from 'react-router-dom'

export const HostVanPhotos = () => {
    const { currentVan } = useOutletContext<{ currentVan: { imageUrl: string } }>()
    return (
        <div className='flex gap-4'>
            <img src={currentVan.imageUrl} alt="" className='w-[120px] h-[120px] object-cover rounded-lg'/>
            <img src={currentVan.imageUrl} alt="" className='w-[120px] h-[120px] object-cover rounded-lg'/>
            <img src={currentVan.imageUrl} alt="" className='w-[120px] h-[120px] object-cover rounded-lg'/>
        </div>
    )
}
