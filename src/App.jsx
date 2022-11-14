import { InfoForm, Table } from "./components";

export const App = () => {
  return (
    <main className="min-h-screen bg-neutral-200 w-full p-4 flex flex-col mx-auto justify-start items-center">
      <InfoForm />
      <Table />
    </main>
  );
};
