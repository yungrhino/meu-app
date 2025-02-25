import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/home">Aprendizado em NextJS</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/sobre-mim">Informações</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
