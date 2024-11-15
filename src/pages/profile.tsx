// pages/profile.tsx
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Component para exibição de imagem de perfil
const ProfileImage = ({ imageSrc }: { imageSrc: string }) => (
  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
    // eslint-disable-next-line
    {/* <img src={imageSrc} alt="Imagem de perfil" className="object-cover w-full h-full" /> */}
  </div>
);

const Profile: React.FC = () => {
  // Estado para gerenciar as informações do perfil
  const [bio, setBio] = useState('');
  const [interests, setInterests] = useState('');
  const [image, setImage] = useState('/images/default-profile.jpg'); // Imagem padrão
  const [goals, setGoals] = useState('');
  const [milestones, setMilestones] = useState('');

  // eslint-disable-next-line
  const router = useRouter();

  const handleSave = () => {
    // Salvar as informações do perfil (simulado)
    alert('Perfil salvo com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center p-6">
      <Head>
        <title>Perfil de Usuário | GlowUpJourney</title>
      </Head>

      {/* Título do Perfil */}
      <header className="w-full text-center mb-8">
        <h1 className="text-4xl font-semibold">Meu Perfil</h1>
      </header>

      {/* Seção de imagem de perfil */}
      <div className="flex flex-col items-center mb-6">
        <ProfileImage imageSrc={image} />
        <button
          onClick={() => setImage('/images/new-profile.jpg')} // Simulação de alteração de imagem
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          Alterar Imagem
        </button>
      </div>

      {/* Seção de bio e interesses */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mb-8">
        <label htmlFor="bio" className="text-lg font-medium">Bio</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Compartilhe um pouco sobre você"
          className="w-full mt-2 p-4 border rounded-lg"
          rows={4}
        />

        <label htmlFor="interests" className="text-lg font-medium mt-6">Interesses</label>
        <input
          id="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Quais são seus interesses?"
          className="w-full mt-2 p-4 border rounded-lg"
        />
      </div>

      {/* Seção de objetivos e marcos */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mb-8">
        <label htmlFor="goals" className="text-lg font-medium">Objetivos</label>
        <textarea
          id="goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          placeholder="Defina seus objetivos"
          className="w-full mt-2 p-4 border rounded-lg"
          rows={4}
        />

        <label htmlFor="milestones" className="text-lg font-medium mt-6">Marcos Importantes</label>
        <textarea
          id="milestones"
          value={milestones}
          onChange={(e) => setMilestones(e.target.value)}
          placeholder="Liste os marcos alcançados"
          className="w-full mt-2 p-4 border rounded-lg"
          rows={4}
        />
      </div>

      {/* Botão de Salvar */}
      <button
        onClick={handleSave}
        className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      >
        Salvar Perfil
      </button>
    </div>
  );
};

export default Profile;
