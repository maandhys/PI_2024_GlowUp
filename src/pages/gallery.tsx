/* eslint-disable */
// pages/gallery.tsx
import { useState } from 'react';

const Gallery: React.FC = () => {
  // eslint-disable-next-line
  const [filter, setFilter] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-semibold mt-12">Galeria de Transformações</h1>

      <input
        type="text"
        placeholder="Filtrar por idade, estilo..."
        className="mt-6 p-2 border rounded-lg max-w-xs"
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-5xl p-4">
        {/* Exemplo de transformação */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
        // eslint-disable-next-line
          {/* <img src="/images/example1.jpg" alt="Transformação" className="rounded-lg" /> */}
          <p className="mt-2 text-center">Transformação de Laura</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
