export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = (await res.json()) as Post[];
  return (
    <div>
      {json.map((post) => (
        <div
          key={post.id}
          className="border border-solid border-neutral-500 p-2 m-2"
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
