import Toggle from "./core/Toggle"
import Button from "./core/Button"

function App() {
  return (<>
    <Toggle type="button" value="Toggle Button" />
    <Button type="button" value="alert" isDisable={true}/>
  </>)

}

export default App;
