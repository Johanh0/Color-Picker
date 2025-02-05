import Buttons from "./Buttons";

const ColorPicker = ({ colors }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-10">
      {colors.map((color, index) => (
        <Buttons key={index}>{color}</Buttons>
      ))}
    </div>
  );
};

export default ColorPicker;
