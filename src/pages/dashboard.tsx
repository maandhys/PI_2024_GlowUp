// pages/dashboard.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState({
    name: 'Joana', // Substitua com dados reais do usuário
    progress: 75, // Exemplo de progresso
  });
  const router = useRouter();

  // Função para log out (ajuste conforme sua lógica de autenticação)
  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center font-mono">
      {/* Boas-vindas ao usuário */}
      <header className="w-full max-w-3xl p-6 text-center text-gray-800 mt-10">
        <h1 className="text-4xl font-bold">Bem-vindo(a), {user.name}!</h1>
        <p className="mt-2 text-gray-600 text-lg">
          Explore sua jornada no GLOWUPDIARIES e acompanhe seu progresso.
        </p>
      </header>

      {/* Conteúdo principal */}
      <main className="w-full max-w-3xl bg-white shadow-sm rounded-lg p-6 mt-6">
        {/* Resumo da Jornada */}
        <section className="text-gray-700 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Seu Progresso</h2>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-900">{user.progress}% completo</span>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${user.progress}%` }}
              ></div>
            </div>
          </div>
        </section>

        {/* Links Rápidos */}
        <section className="grid grid-cols-2 gap-4 text-center mt-6">
          <Link href="/diary" legacyBehavior>
            <a className="bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all">
              Meu Diário
            </a>
          </Link>
          <Link href="/community" legacyBehavior>
            <a className="bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all">
              Comunidade
            </a>
          </Link>
          <Link href="/challenges" legacyBehavior>
            <a className="bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all">
              Desafios
            </a>
          </Link>
          <Link href="/resources" legacyBehavior>
            <a className="bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all">
              Recursos
            </a>
          </Link>
        </section>
      </main>

      {/* Botão de Logout */}
      <footer className="w-full max-w-3xl flex justify-end p-6 mt-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Sair
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
