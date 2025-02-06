import ColorPicker from "./components/ColorPicker";
const App = () => {
  const colorsList = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "cyan",
    "magenta",
  ];
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ColorPicker colors={colorsList} />
    </div>
  );
};

export default App;
