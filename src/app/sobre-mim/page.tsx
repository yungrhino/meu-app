interface PostProps {
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

  return (
    <div>
      <h1 className="text-center mt-5 mb-5 font-bold texl-2xl">Informações</h1>
      <button onClick={handleFetchPosts}>Clicar botão</button>
      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="mt-2 mb-2 p-4">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
