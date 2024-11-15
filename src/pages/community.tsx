// pages/community.tsx

import Link from 'next/link';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-gray-800 font-mono">
      <header className="w-full max-w-3xl p-8 text-center text-gray-700 mt-12">
        <h1 className="text-4xl font-semibold">Comunidade</h1>
        <p className="mt-2 text-gray-500 text-lg">Conecte-se com outras pessoas e compartilhe experiências.</p>
      </header>

      <main className="w-full max-w-3xl bg-white rounded-lg p-8 mt-6 shadow-md">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Discussões Recentes</h2>
          <p className="text-gray-600">Acompanhe as últimas conversas e participe da comunidade!</p>
        </section>
      </main>

      <footer className="mt-6">
        <Link href="/dashboard" legacyBehavior>
          <a className="text-gray-500 hover:text-gray-700 underline">Voltar ao Dashboard</a>
        </Link>
      </footer>
    </div>
  );
};

export default Community;
