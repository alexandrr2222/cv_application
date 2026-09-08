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
    <div>
      <header className="print:hidden">
        <p className="text-dark-accent">Simple CV Creator</p>
        <ActionButton
          onAction={() => setCvData(filledCv)}
          label="Load Example"
        />
        <ActionButton
          onAction={() => setCvData(emptyCv)}
          label="Clear Resume"
        />
        <ActionButton onAction={() => window.print()} label="Print CV" />
      </header>
      <main className="flex p-4.5 bg-dark-bg min-h-dvh print:block print:p-0 print:bg-white">
        <FormPanel cvData={cvData} updateSection={updateSection} />
        <PrintedCv cvData={cvData} />
      </main>
    </div>
  );
}

export default App;
// fix href for websites
// guard empty sections
// broken date semantics
// section of print as component
