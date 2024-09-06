import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../server';

type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

function VanDetails() {
  const [van, setVan] = React.useState<Van | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  if (!van) {
    return <div className="text-center text-xl py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-8 md:px-12 py-8">
      <Link
        to=".."
        relative='path'
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

      <div className="flex flex-col md:flex-row gap-8 items-start mt-3">
        <div className="flex-1 h-[85vh]">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-full h-full object-cover rounded-md shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">{van.name}</h1>
          <p className="text-2xl font-medium text-gray-800 mb-4">${van.price}/day</p>
          <p className="text-md font-semibold text-gray-600 mb-4">
            Type: <span className="capitalize">{van.type}</span>
          </p>
          <p className="text-gray-700 mb-6">{van.description}</p>
          <p className="text-gray-700 mb-6">{van.description}</p>
          <p className="text-gray-700 mb-6">{van.description}</p>
          <button className="bg-orange-500 hover:bg-orange-600 w-full text-white py-2 px-6 rounded-md transition duration-200">
            Rent this Van
          </button>
        </div>
      </div>
    </div>
  );
}

export default VanDetails;
