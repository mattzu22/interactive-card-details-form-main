import { Cartoes } from "./component/Cartoes";
import { Form } from "./component/Form";
import { useState } from "react";


function App() {
  const [inputs, setInputs] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    CVC: "",
  });

  const handleInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <main className="md:flex gap-[20%]">
      <Cartoes inputs={inputs} />
      <Form change={handleInputChange} inputs={inputs} />
    </main>
  );
}

export default App;
