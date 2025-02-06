import { useState } from "react";

import Button from "./Button";

const ColorPicker = ({ colors }) => {
  const [currentColor, setCurrentColor] = useState("#f3f3f3");

  return (
    <section className="rounded-lg bg-[#f3f3f3]">
      <div className="flex flex-wrap gap-3 justify-center items-center max-w-[500px] p-5 ">
        {colors.map((color, index) => (
          <Button
            style={{ backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
            key={index}
          >
            {color}
          </Button>
        ))}
        <Button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setCurrentColor("#f3f3f3")}
        >
          Reset Color
        </Button>
      </div>
      <div
        className="w-full h-[200px] rounded-b-lg"
        style={{ backgroundColor: currentColor }}
      ></div>
    </section>
  );
};

export default ColorPicker;
