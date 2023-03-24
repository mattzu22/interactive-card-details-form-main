import { Cartoes } from "./component/Cartoes" 
import { Form } from "./component/Form";

function App() {
  return (
    <main className="md:flex gap-[20%]">
     <Cartoes />
     <Form />
    </main>
  );
}

export default App;
