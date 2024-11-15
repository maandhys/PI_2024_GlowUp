import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "nayara@teste.com" && password === "nayara") {
      alert("Login bem-sucedido!");
      router.push('/dashboard');
    } else {
      setError("Credenciais inválidas, tente novamente.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Head>
        <title>Login - Minimal Blog</title>
      </Head>
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Entrar</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 px-4 py-3 w-full bg-gray-100 rounded-lg border focus:ring-1 focus:ring-gray-900 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 px-4 py-3 w-full bg-gray-100 rounded-lg border focus:ring-1 focus:ring-gray-900 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Não tem uma conta?{' '}
          <Link href="/register" legacyBehavior>
            <a className="text-gray-900 hover:underline">Cadastre-se</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
