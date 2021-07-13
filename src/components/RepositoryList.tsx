import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import "../styles/repositories.scss";

type RepositoryTypes = {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<RepositoryTypes[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ThiagoFragata/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
