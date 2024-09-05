import React from 'react'
import { useParams } from 'react-router-dom'
import '../server'

type Van = {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
}

function VanDetails() {
  // Correct the state type to Van | null, since it will be null initially before fetching data
  const [van, setVan] = React.useState<Van | null>(null)
  const { id } = useParams() // Destructure id from useParams for clarity

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/vans/${id}`) // Use destructured id directly
        if (!response.ok) {
          throw new Error("Failed to fetch van data")
        }
        const data = await response.json()
        setVan(data.van) // Assuming the server returns { van: { ...van details... } }
      } catch (error) {
        console.error("Error fetching van details:", error)
      }
    }

    fetchData()
  }, [id]) // Add id as a dependency to useEffect

  if (!van) {
    return <div className="text-center text-xl py-8">Loading...</div> // Render a loading state while fetching data
  }

  return (
    <div className="container mx-auto px-8 md:px-12 py-8">
      {/* Flex container for product page layout */}
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Left half: Van Image */}
        <div className="flex-1 h-[85vh]">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-full h-full object-cover rounded-md shadow-2xl"
          />
        </div>

        {/* Right half: Van Details */}
        <div className="flex-1">
          <h1 className='text-3xl md:text-4xl font-semibold mb-4'>{van.name}</h1>
          <p className="text-2xl font-medium text-gray-800 mb-4">${van.price}/day</p>
          <p className="text-md font-semibold text-gray-600 mb-4">Type: <span className="capitalize">{van.type}</span></p>
          <p className="text-gray-700 mb-6">{van.description}</p>
          <p className="text-gray-700 mb-6">{van.description}</p>
          <p className="text-gray-700 mb-6">{van.description}</p>
          <p className="text-gray-700 mb-6">{van.description}</p>

          {/* Action Button */}
          <button className="bg-orange-500 hover:bg-orange-600 w-full text-white py-2 px-6 rounded-md transition duration-200">
            Rent this Van
          </button>
        </div>
      </div>
    </div>
  )
}

export default VanDetails
