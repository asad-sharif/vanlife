import React from "react"
import '../server'
import { Link } from "react-router-dom"

type Van = {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  type: string
}

function Vans() {
  const [vans, setVans] = React.useState<Van[]>([])

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/vans')
      const data = await response.json()
      // console.log(data);      
      setVans(data.vans)
    }

    fetchData()
  }, [])

  const vanCard = vans.map(van => (
    <Link to={`/vans/${van.id}`} key={van.id} className="flex flex-col bg-white rounded-lg shadow-md">
      <div className="relative">
        <img src={van.imageUrl} alt="" className="w-full rounded-t-lg" />
        <i className="text-sm absolute top-2 right-2 border border-[#FF8C38] rounded-full px-3 bg-transparent backdrop-blur-xl backdrop-brightness-75 text-white">{van.type}</i>
      </div>

      <div className="px-2 py-3">
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="font-semibold">{van.name}</h3>
          <p className="font-semibold">${van.price}
            <span className="text-sm font-normal">
              /day
            </span></p>
        </div>
      </div>

    </Link>
  ))


  return (
    <div className="container mx-auto px-8 md:px-12">
      <h1 className='text-2xl md:text-4xl font-semibold my-4 md:my-8'>Explore our vans</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-8 md:gap-y-16">
        {vanCard}
      </div>
    </div>
  )
}

export default Vans