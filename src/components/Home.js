import React from "react";
/* import Landing from "./layout/Landing"; */
/* import Quizz from "./layout/Quizz"; */
import Avasyu from "./layout/Avasyu";
import Shiva from "./layout/Shiva";
import Anvesh from "./layout/Anvesh";
import Veere from "./layout/veere/index";
export default function Home() {
  return (
    <div>
      <Veere />
      <Avasyu />
      <Shiva />
      <Anvesh />
    </div>
  );
}
