import { Cartoes } from "./component/Cartoes" 
import { Form } from "./component/Form";
import { Sucesso } from "./component/verificado";

function App() {
  return (
    <main className="md:flex gap-[20%]">
     {/* <Cartoes />
     <Form /> */}
     <Sucesso />
    </main>
  );
}

export default App;
