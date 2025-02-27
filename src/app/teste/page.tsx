"use client";

import { useEffect, useState } from "react";

export default function Teste() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data.posts))
  }, [])

  return (
    <div>
      <h1 className="text-center mt-5 mb-5 font-bold texl-2xl">Informações</h1>
      <div className="flex flex-col gap-4 mx-2">
        {posts.map((post: any) => (
          <div key={post.id} className="mt-2 mb-2 p-4">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
