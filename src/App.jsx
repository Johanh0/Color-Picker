import ColorPicker from "./components/ColorPicker";

function App() {
  const colorsArray = ["red", "blue", "yellow"];

  return (
    <>
      <ColorPicker colors={colorsArray} />
    </>
  );
}

export default App;
