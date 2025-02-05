import { useState } from "react";

const Buttons = ({ children }) => {
  const [currentColor, setCurrentColor] = useState(children);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex flex-col max-w-[200px]">
      <button
        onClick={() => setIsSelected(true)}
        className={
          isSelected
            ? `px-10 py-3 m-1 rounded-md cursor-pointer bg-${currentColor}-200`
            : `px-10 py-3 m-1 rounded-md bg-gray-100 cursor-pointer`
        }
      >
        {children}
      </button>
      <button className="cursor-pointer" onClick={() => setIsSelected(false)}>
        Reset Color
      </button>
    </div>
  );
};

export default Buttons;
