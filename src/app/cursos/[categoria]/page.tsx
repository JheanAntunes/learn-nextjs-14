import Link from "next/link";
import { Curso, endPoint } from "../page";

type PageProps = {
  params: Promise<{ categoria: string }>;
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

type CategoriaCurso = Curso & {
  aulas: Aula[];
};

const PageCategoriaCursos = async ({ params }: PageProps) => {
  const { categoria } = await params;
  console.log("categoria do curso: ", categoria);
  const res = await fetch(`${endPoint}/${categoria}`);
  const categoriaCurso: CategoriaCurso = await res.json();

  return (
    <div>
      <h1>{categoriaCurso.nome}</h1>
      <p>{categoriaCurso.descricao}</p>
      <p>Total de aulas: {categoriaCurso.total_aulas}</p>
      <p>Total de horas: {categoriaCurso.total_horas}</p>
      <div className="flex flex-col gap-5">
        {categoriaCurso.aulas.map((aula) => (
          <Link
            href={`/cursos/${categoriaCurso.slug}/${aula.slug}`}
            key={aula.id}
            className="border box-border border-solid space-y-2 border-neutral-500 p-2 m-2"
          >
            <h3>{aula.nome}</h3>
            <p>{aula.descricao}</p>
            <p>Tempo: {aula.tempo}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PageCategoriaCursos;
