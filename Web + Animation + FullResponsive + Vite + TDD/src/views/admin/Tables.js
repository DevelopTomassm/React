//Libraries imports
import React from "react";

//Components imports

import CardTable from "components/Cards/CardTable.js";
//Export function
export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-32">
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
