import { ActionButton } from "./ActionButton";
import { FormPanel } from "./FormPanel";
import { PrintedCv } from "./PrintedCv";
import { emptyCv } from "./dataObjects/emptyCv";
import { filledCv } from "./dataObjects/filledCv";
import type { cvDataType } from "./types";
import { usePersistedState } from "./helperFunction/usePersistedState";
import { buttonVariants } from "./dataObjects/buttonVariants";

function App() {
  const [cvData, setCvData] = usePersistedState<cvDataType>("cvData", emptyCv);
  function updateSection<K extends keyof cvDataType>(
    key: K,
    value: cvDataType[K],
  ): void {
    setCvData((prev) => ({ ...prev, [key]: value }));
  }
  return (
    <div className="bg-color-bg font-sans min-h-dvh">
      <header className="print:hidden flex items-center justify-between px-6 py-4 border-b border-color-border">
        <p className="text-dark-accent text-lg font-medium tracking-tight">
          Humble CV Creator
        </p>
        <div className="flex justify-center gap-2">
          <ActionButton
            onAction={() => setCvData(filledCv)}
            label="Load Example"
            variant={buttonVariants.secondary}
          />
          <ActionButton
            onAction={() => setCvData(emptyCv)}
            label="Clear Resume"
            variant={buttonVariants.secondary}
          />
          <ActionButton
            onAction={() => window.print()}
            label="Print CV"
            variant={buttonVariants.primary}
          />
        </div>
      </header>
      <main className="flex gap-8 items-start px-6 py-8 min-h-dvh print:block print:p-0 print:bg-white">
        <FormPanel cvData={cvData} updateSection={updateSection} />
        <PrintedCv cvData={cvData} />
      </main>
    </div>
  );
}

export default App;

// TODO
// broken date semantics
