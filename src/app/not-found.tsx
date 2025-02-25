import Link from "next/link";

export default function NotFound() {
    return(
        <div className="container mx-auto items-center text-center">
            <h1 className='text-center font-bold mt-9 text-5xl'>Erro 404, Página não encontrada!</h1>
            <p className='text-center mt-2'>Essa página que você tentou acessar não existe!</p>
            <Link href='/home' className='underline mt-6 block'>Voltar para home</Link>
        </div>
    )
}