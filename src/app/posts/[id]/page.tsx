import { Post } from "../page";

type PageProps = {
  params: Promise<{ id: string }>;
};
const PagePostDinamica = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const json = (await res.json()) as Post;
  return (
    <div>
      <h1>{json.title}</h1>
      <p>{json.body}</p>
    </div>
  );
};

export default PagePostDinamica;
