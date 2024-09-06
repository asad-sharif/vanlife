import React from 'react';
import '../../server';
import { Link } from 'react-router-dom';

type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

function HostVans() {
  const [vans, setVans] = React.useState<Van[]>([]); // State to store fetched vans

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/host/vans`);
      const data = await response.json();
      setVans(data.vans); // Store fetched vans in state
    }
    fetchData();
  }, []);

  // Map over vans and create a card for each van
  const vanCards = vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      {/* Image with badge */}
      <div className="relative">
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <span className="absolute top-2 right-2 border border-[#FF8C38] rounded-full px-3 bg-transparent backdrop-blur-xl backdrop-brightness-75 text-white text-sm">
          {van.type}
        </span>
      </div>

      {/* Van details */}
      <div className="px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="font-semibold text-lg">{van.name}</h3>
          <p className="font-semibold text-md">
            ${van.price}
            <span className="text-sm font-normal">/day</span>
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl md:text-4xl font-semibold my-4 md:my-8">
        Your Hosted Vans
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-8 md:gap-y-16">
        {vanCards}
      </div>
    </div>
  );
}

export default HostVans;
