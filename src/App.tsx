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
    <div className="bg-[#eeebe5] font-sans h-dvh flex flex-col">
      <header className="shrink-0 sticky top-0 z-10 print:hidden bg-[#f8f7f3] flex flex-wrap items-center justify-center sm:justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <p className="w-full sm:w-auto text-center sm:text-left text-base sm:text-xl font-semibold tracking-wider sm:tracking-widest text-accent">
          {" "}
          Humble{" "}
          <span className="bg-accent inline-block transition-transform duration-200 hover:-rotate-6 hover:scale-110 text-[#f8f7f3] px-1.5 py-0.5 rounded-sm tracking-normal">
            CV
          </span>{" "}
          Creator
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
      <main className="flex scrollbar-gutter-stable overflow-y-auto flex-1 flex-col xl:gap-12 2xl:gap-20 xl:shrink-0 xl:flex-row items-start justify-center px-4 sm:px-6 py-8 print:block print:p-0">
        <FormPanel cvData={cvData} updateSection={updateSection} />
        <PrintedCv cvData={cvData} />
      </main>
    </div>
  );
}

export default App;

// TODO

// make it responsive
