import React from 'react';
import Image from 'next/image';

interface CardProps {
  name: string;
  image: string;
}

const Card = ({ name, image }: CardProps) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden max-w-sm">
      <Image
        src={image}
        alt={`Imagen para ${name}`}
        width={500} 
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
      </div>
    </div>
  );
};

export default Card;