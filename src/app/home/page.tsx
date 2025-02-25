import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home - Aprendizado em NextJS',
  description: 'Do Iniciante ao Domínio de NextJS!',
}


export default function Home() {
  return (
    <div className="container mx-auto flex justify-center text-center items-center">
      <h1 className="mt-9">Seja bem-vindo a Home do site!</h1>
    </div>
  );
}
