export const Form = () => {
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
          />
        </div>

        <div className="full flex gap-[8px]">
          <div className="w-[25%]">
            <p className="name-input font-primary">exp. date</p>
            <input
              className="input"
              type="text"
              name="number"
              id="number"
              placeholder="MM"
            />
          </div>

          <div className="w-[25%]">
            <p className="name-input">(mm/YY)</p>
            <input
              className="input"
              type="text"
              name="number"
              id="number"
              placeholder="YY"
            />
          </div>

          <div className="w-[50%]">
            <p className="name-input">cvc</p>
            <input
              className="input"
              type="text"
              name="number"
              id="number"
              placeholder="e.g. 123"
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
