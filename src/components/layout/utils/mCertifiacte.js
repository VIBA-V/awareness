import React from "react";
import merit from "../images/merit.jpg";
import participation from "../images/participation.jpg";
var html2canvas = require("html2canvas");
var jsPDF = require("jsPDF");

const input = document.getElementById("merit");
html2canvas(input).then((canvas) => {
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF();
  pdf.addImage(imgData, "PNG", 0, 0);
  pdf.save("download.pdf");
});
const Merit = () => {
  return (
    <div
      id="merit"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <img
        src={merit}
        style={{
          maxWidth: "100%",
          heigth: "100%",
          marginTop: "40%",
        }}
      />
      <h1
        style={{
          fontSize: "2vh",
          position: "absolute",
          top: "44.46%",
          left: "27%",
        }}
      >
        Anvesh reddy
      </h1>
      <a href="download.pdf" id="print"></a>
    </div>
  );
};
export default Merit;
