'use client';

import { useRouter } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter();

  function redirectToHome(){
    router.push('/login')
  }

  return (
    <button 
      type="button" 
      onClick={redirectToHome} 
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
    >
      Home Logo
    </button>
  );
}
