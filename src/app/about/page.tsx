import { Suspense } from "react";
import Users from "./components/users";

const AboutPage = async () => {
  return (
    <main>
      <h1>Sobre nós</h1>
      <Suspense fallback={<div>Carregando...</div>}>
        <Users />
      </Suspense>
    </main>
  );
};

export default AboutPage;
