// pages/register.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', goal: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para registrar o usuário
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-gray-800 font-serif">
      <h1 className="text-4xl font-light mt-16">Registre-se no GLOWUPDIARIES</h1>

      <form onSubmit={handleSubmit} className="mt-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-gray-600 mb-4">
          Nome
          <input
            type="text"
            className="mt-2 p-2 w-full border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>

        <label className="block text-gray-600 mb-4">
          Meta
          <input
            type="text"
            className="mt-2 p-2 w-full border rounded"
            placeholder="Ex: Fitness, estilo, saúde..."
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            required
          />
        </label>

        <button type="submit" className="mt-6 w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
          Registrar-se
        </button>
      </form>
    </div>
  );
};

export default Register;
