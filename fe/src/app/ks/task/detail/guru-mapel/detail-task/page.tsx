import React from "react";
import LayoutPage from "../../../../LayoutKs";
import ProgramTable from "./taskTable";

export default function taskPage() {
  return (
    <>
      <LayoutPage>
        <div>
          <ProgramTable />
        </div>
      </LayoutPage>
    </>
  );
}
