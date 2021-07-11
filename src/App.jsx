import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/globals.scss";

export function App() {
  return (
    <>
      <RepositoryList />
      <br />
      <br />
      <br />
      <br />
      <Counter />
    </>
  );
}
