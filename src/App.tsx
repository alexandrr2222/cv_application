import { useState } from "react";
import { FormPanel } from "./FormPanel";
import { MainOutput } from "./MainOutput";

function App() {
  const [generalInfo, setGeneralIfo] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    summary: "",
  });
  return (
    <main className="flex p-4.5 bg-dark-bg min-h-dvh">
      <FormPanel generalInfo={generalInfo} setGeneralInfo={setGeneralIfo} />
      <pre>{JSON.stringify(generalInfo)}</pre>
      <MainOutput />
    </main>
  );
}

export default App;
