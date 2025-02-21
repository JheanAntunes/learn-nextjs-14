"use client";

import { useCallback, useState } from "react";

const FormImc = () => {
  const [resultImc, setResultImc] = useState(0);

  const calculateImc = useCallback((peso: number, altura: number) => {
    return peso / (altura * altura);
  }, []);
  const getDadosInput = useCallback((form: HTMLFormElement) => {
    const peso = Number((form[0] as HTMLInputElement).value);
    const altura = parseFloat((form[1] as HTMLInputElement).value);
    return { peso, altura };
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { peso, altura } = getDadosInput(event.target as HTMLFormElement);
    const imc = calculateImc(peso, altura);
    setResultImc(imc || 0);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex m-5 w-96 flex-col gap-2 ">
        <input
          type="text"
          placeholder="Peso: 75"
          className=" text-neutral-950 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Altura: 1.75"
          className=" text-neutral-950 p-2 rounded"
        />
        <button
          type="submit"
          className="border border-solid py-2 border-neutral-500"
        >
          Calcular
        </button>
      </form>
      <div className="text-center">
        <p>IMC: {resultImc.toFixed(2) || ""}</p>
      </div>
    </>
  );
};

export default FormImc;
