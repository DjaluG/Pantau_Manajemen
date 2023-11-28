import React from "react";
import LayoutPage from "../LayoutPage";
import ProgramTable from "./programTable";

export default function programPage() {
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
