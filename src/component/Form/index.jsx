// import { useState } from "react";

export const Form = (props) => {

  // const [inputs, setInputs] = useState({
  //   name: "",
  //   cardNumber: " ",
  //   MM: "",
  //   YY: "",
  //   CVC: "",
  // })

  // const handleInputChange = (event) =>{
  //   const { target } = event
  //   const { name } = target
  //   const { value } = target
  //   setInputs({
  //     [name]: value
  //   }) 
  // }

  return (
    <>
      <form
        action="submit"
        method="get"
        className="flex flex-col items-center justify-center pt-[130px] gap-[25px] p-[20px] uppercase max-w-[450px] m-auto md:m-0"
      >
        <div className="full">
          <p className="name-input">cardholder name</p>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Matheus Macedo"
            onChange={props.change}
            value={props.inputs.name}
          />
        </div>

        <div className="full">
          <p className="name-input">card number</p>
          <input
            className="input"
            type="text"
            name="number"
            id="number"
            placeholder="e.g. 1234 5653 23759 000"
            onChange={props.change}
            value={props.inputs.cardNumber}
          />
        </div>

        <div className="full flex gap-[8px]">
          <div className="w-[25%]">
            <p className="name-input font-primary">exp. date</p>
            <input
              className="input"
              type="text"
              name="date"
              id="date"
              placeholder="MM"
              onChange={props.change}
              value={props.inputs.MM}
            />
          </div>

          <div className="w-[25%]">
            <p className="name-input">(mm/YY)</p>
            <input
              className="input"
              type="text"
              name="MMYY"
              id="MMYY"
              placeholder="YY"
              onChange={props.change}
              value={props.inputs.YY}
            />
          </div>

          <div className="w-[50%]">
            <p className="name-input">cvc</p>
            <input
              className="input"
              type="text"
              name="CVC"
              id="CVC"
              placeholder="e.g. 123"
              onChange={props.change}
              value={props.inputs.CVC}
            />
          </div>
        </div>

        <button className="bg-[#2c012c] text-white w-full p-[17px] rounded-[10px] mt-[15px]">
          Confirm
        </button>
      </form>
    </>
  );
};
