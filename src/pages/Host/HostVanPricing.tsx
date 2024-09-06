import React from 'react'
import { useOutletContext } from 'react-router-dom'

export const HostVanPricing: React.FC = () => {
    const {currentVan}: {currentVan: any} = useOutletContext()
  return (
    <p className="text-2xl font-medium text-gray-800 mb-4">${currentVan.price}/day</p>
  )
}
