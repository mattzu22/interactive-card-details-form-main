import { data } from "autoprefixer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Sucesso } from "../verificado";

export const Form = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const inputNumberValidation = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    const formattedValue = input.replace(/\B(?=(\d{4})+(?!\d))/g, " ");

    if (formattedValue.length <= 19) {
      e.target.value = formattedValue;
      props.change(e);
    }
  };

  if (submitted) {
    return <Sucesso />;
  }

  return (
    <>
      <form
        className="flex flex-col items-center justify-center pt-[130px] gap-[25px] p-[20px] uppercase max-w-[450px] m-auto md:m-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="full">
          <p className="name-input">cardholder name</p>
          <input
            className="input"
            type="name"
            name="name"
            id="name"
            placeholder="e.g. Matheus Macedo"
            {...register("name", {
              required: true,
              pattern: {
                value: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
              },
            })}
            onChange={(e) => {
              if (e.target.value.length <= 20) {
                props.change(e);
              }
            }}
            value={props.inputs.name}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-[red] text-[8px]">campo obrigatório</span>
          )}

          {errors.name && errors.name.type === "pattern" && (
            <span className="text-[red] text-[8px]">*Nome inválido</span>
          )}
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
            onChange={inputNumberValidation}
            value={props.inputs.number}
          />

          {errors.number && (
            <span className="text-[red] text-[8px] mt-[9px]">
              *Campo obrigatório
            </span>
          )}
        </div>

        <div className="full flex gap-[16px]">
          <div className="flex flex-col">
            <p className="name-input font-primary">exp. date (mm/YY)</p>
            <div className="flex gap-[10px]">
              <div className="w-[50%]">
                <input
                  className="input"
                  type="text"
                  name="month"
                  id="month"
                  placeholder="MM"
                  {...register("month", {
                    required: true,
                    pattern: {
                      value: /^(0[1-9]|1[0-2])$/,
                      message: "Mês inválido",
                    },
                  })}
                  onChange={props.change}
                  value={props.inputs.month}
                />

                {errors.month && (
                  <span className="text-[red] text-[8px] mt-[9px]">
                    {errors.month.message}
                  </span>
                )}
              </div>

              <div className="w-[50%]">
                <input
                  className="input"
                  type="text"
                  name="year"
                  id="year"
                  placeholder="YY"
                  {...register("year", {
                    required: true,
                    pattern: {
                      value: /^([1-9]|[12]\d|3[01])$/,
                      message: "Dia inválido",
                    },
                  })}
                  onChange={props.change}
                  value={props.inputs.year}
                />

                {errors.year && (
                  <span className="text-[red] text-[8px] mt-[9px]">
                    {errors.year.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-[120%]">
            <p className="name-input">cvc</p>
            <input
              className="input"
              type="text"
              name="CVC"
              id="CVC"
              placeholder="e.g. 123"
              {...register("CVC", {
                required: true,
                pattern: {
                  value: /^[0-9]{3}$/,
                },
              })}
              onChange={props.change}
              value={props.inputs.CVC}
            />
            {errors.CVC && (
              <span className="text-[red] text-[8px]">*CVC invãlido</span>
            )}
          </div>
        </div>

        <input
          type="submit"
          className="bg-[#2c012c] text-white w-full p-[17px] rounded-[10px] mt-[15px]"
        />
      </form>
    </>
  );
};
