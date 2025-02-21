type PageProps = {
  params: Promise<{ categoria: string; aula: string }>;
};

const PageAula = async ({ params }: PageProps) => {
  const { categoria, aula } = await params;
  console.log("categoria do curso: ", categoria);
  console.log("aula do curso: ", aula);
  return (
    <div>
      <h1>Curso: {categoria}</h1>
      <h2>Aula: {aula}</h2>
    </div>
  );
};

export default PageAula;
