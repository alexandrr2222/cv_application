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
    <main className="flex p-4.5 bg-dark-bg min-h-dvh print:block print:p-0 print:bg-white">
      <div className="print:hidden">
        <ActionButton
          onAction={() => setCvData(filledCv)}
          label="Load Example"
        />
        <ActionButton
          onAction={() => setCvData(emptyCv)}
          label="Clear Resume"
        />
        <FormPanel cvData={cvData} updateSection={updateSection} />
      </div>
      <div>
        <PrintedCv cvData={cvData} />
        <ActionButton
          onAction={() => window.print()}
          label="Print CV"
          className="print:hidden"
        />
      </div>
    </main>
  );
}

export default App;
