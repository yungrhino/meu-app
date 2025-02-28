import { PostProps } from "../../page";

export async function PostInfo({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();

  return (
    <div>
      <h2 className="px-5 mt-5 mb-5 font-bold">{data.title}</h2>
      <p className="px-5 mt-5 mb-5">{data.body}</p>
    </div>
  );
}
