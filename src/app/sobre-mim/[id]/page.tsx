import { PostInfo } from "./components/post";
import { PostProps } from "../page";
import { Suspense } from "react";

export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await new Promise(resolve => setTimeout(resolve, 1000))
    
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();

  return (
    <div>
      <h1 className="text-center mt-5 mb-5 font-bold texl-2xl">Detalhes do Teste: {id}</h1>
     
     <Suspense fallback={<h1>Carregando...</h1>}>
     <PostInfo id={id}/>
     </Suspense>
    </div>
  );
}
