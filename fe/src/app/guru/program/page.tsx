<<<<<<< HEAD
import { Metadata } from 'next'
import React from 'react'
import LayoutPage from '../LayoutPage';
=======
import React from "react";
// import Profile from '../components/ProfileMenu'
import LayoutPage from "../LayoutPage";
import ProgramTable from "./programTable";
>>>>>>> 6a08e3e27948625b4dfe7d74af5455249f091d73

export default function programPage() {
<<<<<<< HEAD
    return (
        <>
            <LayoutPage>
            </LayoutPage>
        </>
  )
=======
  return (
    <>
      <LayoutPage>
        <div>
          <ProgramTable />
        </div>
      </LayoutPage>
    </>
  );
>>>>>>> 6a08e3e27948625b4dfe7d74af5455249f091d73
}
