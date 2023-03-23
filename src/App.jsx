import { Cartoes } from "./component/Cartoes" 
import { Form } from "./component/Form";

function App() {
  return (
    <main className="md:flex md:gap-[30px]">
     <Cartoes />
     <Form />
    </main>
  );
}

export default App;
