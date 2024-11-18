/* eslint-disable @typescript-eslint/no-unused-vars */

 import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  type GoogleResponse = {
    credential: string;
  };
  // Configurar Google Login
  useEffect(() => {
    /* Carregar o script do Google Identity Services */
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.onload = initializeGoogleLogin;
      document.body.appendChild(script);
    };

    

    const initializeGoogleLogin = () => {
      window.google.accounts.id.initialize({
        client_id: '407268973911-fittepah55bugj9i42960dpobuk6pbkd.apps.googleusercontent.com',
        callback: handleGoogleResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large' }
      );
    };

    loadGoogleScript();
  }, []);

  // Callback para resposta do Google
  const handleGoogleResponse = (response: GoogleResponse) => {
    console.log('Google Credential:', response.credential);

    // Enviar o token para o back-end
    fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          // Usuário autenticado, redirecionar ou salvar token
          console.log('Usuário autenticado:', data.user);
        }
      })
      .catch((err) => setError('Erro ao autenticar com Google'));
  };

  // Login manual com e-mail/senha
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implementar autenticação padrão (e-mail/senha)
    console.log('Email:', email, 'Password:', password);
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              E-mail
            </label>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Senha
            </label>
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
        <div className="mt-6">
          <div id="googleSignInButton"></div>
        </div>
        <p className="text-center text-gray-500 mt-6">
          Não tem uma conta?{' '}<Link href="/register" className="text-gray-900 hover:underline" legacyBehavior>
    <a className="text-gray-900 hover:underline"> Cadastre-se</a>
  </Link>
        </p>
      </div>
    </div>
  );
}
