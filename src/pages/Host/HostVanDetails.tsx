import React from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';

// Define a type for the Van data
type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

const HostVanDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Ensure 'id' is typed correctly
  const [currentVan, setCurrentVan] = React.useState<Van | null>(null); // Use the correct type for the state

  const activeStyles = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: 'underline'
  }

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/host/vans/${id}`);
      const data = await response.json(); // Directly use the fetched object
      setCurrentVan(data.vans); // Use the data directly since it is already a Van object
    }

    fetchData();
  }, [id]);

  if (!currentVan) {
    return <div className="text-center text-xl py-8">Loading...</div>; // Display a loading message while fetching
  }

  // Display fetched van details
  return (
    <div>
      <Link
        to=".."
        relative='path'
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

      <div className='flex flex-col md:flex-row gap-8'>
        <div className='flex-1 mt-3'><img src={currentVan.imageUrl} alt="" className='w-full h-[60vh] object-cover rounded-lg' /></div>

        <div className='flex-1 py-4'>
          {/* <h2 className='text-4xl'>{currentVan.name}</h2> */}

          <nav className='flex gap-4 mb-4'>
            <NavLink to='.' end
              style={({ isActive }) => isActive ? activeStyles : {}}>Overview
            </NavLink>
            <NavLink to='pricing'
              style={({ isActive }) => isActive ? activeStyles : {}}>Pricing
            </NavLink>
            <NavLink to='photos'
              style={({ isActive }) => isActive ? activeStyles : {}}>Photos
            </NavLink>
          </nav>

          <Outlet context={{currentVan}}/>
        </div>
      </div>
    </div>

  )
};

export default HostVanDetails;
