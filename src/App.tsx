import { ActionButton } from "./ActionButton";
import { FormPanel } from "./FormPanel";
import { PrintedCv } from "./PrintedCv";
import { emptyCv } from "./emptyCv";
import { filledCv } from "./filledCv";
import type { cvDataType } from "./types";
import { usePersistedState } from "./usePersistedState";

function App() {
  const [cvData, setCvData] = usePersistedState<cvDataType>("cvData", emptyCv);
  function updateSection<K extends keyof cvDataType>(
    key: K,
    value: cvDataType[K],
  ): void {
    setCvData((prev) => ({ ...prev, [key]: value }));
  }
  return (
    <main className="flex p-4.5 bg-dark-bg min-h-dvh">
      <ActionButton onAction={() => setCvData(filledCv)} label="Load Example" />
      <ActionButton onAction={() => setCvData(emptyCv)} label="Clear Resume" />
      <FormPanel cvData={cvData} updateSection={updateSection} />
      <PrintedCv cvData={cvData} />
    </main>
  );
}

export default App;
