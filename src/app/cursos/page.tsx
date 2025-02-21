import Link from "next/link";

export type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};
export const endPoint = "https://api.origamid.online/cursos";
const PageCursos = async () => {
  const res = await fetch(endPoint);

  const cursos: Curso[] = await res.json();

  return (
    <div className="flex flex-col gap-5">
      {cursos.map((curso) => (
        <div
          key={curso.id}
          className="border box-border border-solid space-y-2 border-neutral-500 p-2 m-2"
        >
          <h3>{curso.nome}</h3>
          <p>{curso.descricao}</p>
          <p>Total de aulas: {curso.total_aulas}</p>
          <p>Total de horas: {curso.total_horas}</p>
          <Link
            className="py-2 px-5 block w-fit border border-solid border-neutral-500"
            href={`/cursos/${curso.slug}`}
          >
            Iniciar o Curso Agora!
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PageCursos;
