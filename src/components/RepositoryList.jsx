import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import "../styles/repositories.scss";


// https://api.github.com/users/ThiagoFragata/repos;

const repository = {
  name: "unform",
  description: "Forms in React.js",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ThiagoFragata/repos")
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
