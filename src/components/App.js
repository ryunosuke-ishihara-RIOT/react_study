import Button from "./core/Button";
import DenselyJoined from "./pages/DenselyJoined";
import Modal from "./core/Modal";
import Toggle from "./core/Toggle";
import { FileUpload } from "./core/FileUpload";

function App() {
  return (
    <>
      {/* <Toggle type="button" value="Toggle Button" /> */}
      {/* <Button value="alert" isDisabled={true}/> */}
      {/* <Modal value="push" text="モーダル" /> */}
      {/* <DenselyJoined value="push" text="モーダル" /> */}
      <FileUpload />
    </>
  );
}

export default App;
