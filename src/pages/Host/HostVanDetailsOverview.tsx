import { useOutletContext } from 'react-router-dom'

export const HostVanDetailsOverview = () => {
    const { currentVan } = useOutletContext() as { currentVan: { name: string, price: number, type: string, description: string, imageUrl: string } }
    return (
        <div className='flex flex-col gap-y-4'>
            <p className='font-semibold text-base'>Name: <span className='text-sm font-normal'>{currentVan.name}</span></p>
            <p className='font-semibold text-base'>Price: <span className='text-sm font-normal'>${currentVan.price}/day</span></p>
            <p className='font-semibold text-base'>Type: <span className='text-sm font-normal'>{currentVan.type}</span></p>
            <p className='font-semibold text-base'>Visibility: <span className='text-sm font-normal'>Public</span></p>
            <p className='font-semibold text-base'>Description: <span className='text-sm font-normal'>{currentVan.description}</span></p>
            <div className='flex gap-4'>
                <img src={currentVan.imageUrl} alt="" className='w-[120px] h-[120px] object-cover rounded-lg' />
                <img src={currentVan.imageUrl} alt="" className='w-[120px] h-[120px] object-cover rounded-lg' />
                <img src={currentVan.imageUrl} alt="" className='w-[120px] h-[120px] object-cover rounded-lg' />
            </div>
        </div>
    )
}
