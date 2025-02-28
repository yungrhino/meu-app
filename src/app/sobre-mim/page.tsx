import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function SobreMim() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json();

  async function handleFetchPosts() {
    "use server";

    console.log("CLICOU");
  }

  async function handleSearchUsers(formData: FormData) {
    "use server";

    const userId = formData.get("userId");

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: ResponseProps = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-5 font-bold text-2xl">Informações</h1>
      <button className="mx-5 mb-5 text-center" onClick={handleFetchPosts}>
        Clicar botão
      </button>
      <form className="flex gap-2 my-4 mx-5" action={handleSearchUsers}>
        <input
          type="text"
          placeholder="ID do Usuário"
          className="text-black border border-gray-200 p-2"
          name="userId"
        />
        <button className="bg-blue-500 text-white p-2" type="submit">
          Buscar usuário
        </button>
      </form>
      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="mt-2 mb-2 p-4">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link className={'text-blue-500'} href={`/sobre-mim/${post.id}`}>
            Ver detalhes
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
