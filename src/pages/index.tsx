import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 relative text-gray-800 overflow-hidden">
      <Head>
        <title>GLOWUPDIARIES</title>
      </Head>
      
      {/* Navbar com o botão de login */}
      <header className="absolute top-0 right-0 p-6 z-20">
        <Link href="/login" legacyBehavior>
          <a className="px-6 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
            Entrar
          </a>
        </Link>
      </header>
      
      {/* Título principal da página */}
      <main className="flex flex-col items-center z-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">GLOWUPDIARIES</h1>
        <p className="text-lg text-gray-700 max-w-md text-center">
          Sua jornada de transformação pessoal começa aqui. Inspire-se, acompanhe seu progresso e compartilhe suas conquistas.
        </p>
      </main>

      {/* Ondas no fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primeira camada de ondas */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#d1d5db">
          <path d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,240C672,224,768,192,864,154.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>

        {/* Segunda camada de ondas */}
        <svg className="absolute top-10 left-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#e5e7eb">
          <path d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,192C672,160,768,128,864,122.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>

        {/* Terceira camada de ondas */}
        <svg className="absolute top-20 left-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#f3f4f6">
          <path d="M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,218.7C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
