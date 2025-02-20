import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuários",
  description: "Lista de usuários",
  keywords: ["usuários", "lista", "jsonplaceholder"],
};
const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h1>Usuários</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
