import Button from "./core/Button";
import Modal from "./core/Modal";
import Toggle from "./core/Toggle";

function App() {
  return (
    <>
      {/* <Toggle type="button" value="Toggle Button" /> */}
      {/* <Button value="alert" isDisabled={true}/> */}
      <Modal value="push" text="モーダル" />
    </>
  );
}

export default App;
