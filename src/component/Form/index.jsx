import { data } from "autoprefixer";
import { useForm } from "react-hook-form";

export const Form = (props) => {
  const loginUser = data
 

  const { register, handleSubmit, formState: { errors }} =  useForm();

  return (
    <>
      <form
        action="submit"
        method="get"
        className="flex flex-col items-center justify-center pt-[130px] gap-[25px] p-[20px] uppercase max-w-[450px] m-auto md:m-0"
        onSubmit={handleSubmit(loginUser)}
      >
        <div className="full">
          <p className="name-input">cardholder name</p>
          <input
            className="input"
            type="name"
            name="name"
            id="name"
            placeholder="e.g. Matheus Macedo"
            {...register("name", { required: true })}
            onChange={props.change}
            value={props.inputs.name}
          />
          {errors.name && <span className="text-[red] text-[11px]">*Campo obrigatorio</span>}
        </div>

        <div className="full">
          <p className="name-input">card number</p>
          <input
            className="input"
            type="text"
            name="number"
            id="number"
            placeholder="e.g. 1234 5653 23759 000"
            {...register("number", { required: true })}
            onChange={props.change}
            value={props.inputs.cardNumber}
          />
          {errors.number && <span className="text-[red] text-[11px]">*Campo obrigatorio</span>}
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
              {...register("date", { required: true })}
              onChange={props.change}
              value={props.inputs.MM}
            />
             {errors.date && <span className="text-[red] text-[11px]">*Campo obrigatorio</span>}
          </div>

          <div className="w-[25%]">
            <p className="name-input">(mm/YY)</p>
            <input
              className="input"
              type="text"
              name="MMYY"
              id="MMYY"
              placeholder="YY"
              {...register("MMYY", { required: true })}
              onChange={props.change}
              value={props.inputs.YY}
            />
            {errors.MMYY && <span className="text-[red] text-[11px]">*Campo obrigatorio</span>}
          </div>

          <div className="w-[50%]">
            <p className="name-input">cvc</p>
            <input
              className="input"
              type="text"
              name="CVC"
              id="CVC"
              placeholder="e.g. 123"
              {...register("CVC", { required: true })}
              onChange={props.change}
              value={props.inputs.CVC}
            />
            {errors.CVC && <span className="text-[red] text-[11px]">*Campo obrigatorio</span>}
          </div>
        </div>

        <button
          className="bg-[#2c012c] text-white w-full p-[17px] rounded-[10px] mt-[15px]"
        >
          Confirm
        </button>
      </form>
    </>
  );
};
