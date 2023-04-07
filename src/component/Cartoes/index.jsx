import Frontcartao from "../../images/bg-card-front.png";
import Backcard from "../../images/bg-card-back.png";

export const Cartoes = (props) => {
  const date = props.inputs;

  return (
    <div className="bg-bgMobile bg-cover bg-no-repeat md:min-h-screen md:w-[480px]">
      <div className="flex flex-col max-w-[350px] m-auto relative bottom-[-50px] md:margin-0 md:bottom-0 md:min-h-screen md:justify-center md:gap-[30px] md:max-w-[100%] md:left-[100px]">
        <img
          className="w-[300px] self-end relative bottom-[-70px] shadow-lg md:bottom-0 md:w-[350px] md:order-[1] md:left-[60px] min-w-[300px]"
          src={Backcard}
          alt="cartão"
        />

        <div className="z-10 relative self-start md:self-end">
          <img
            className="
            w-[300px] shadow-lg md:w-[350px]"
            src={Frontcartao}
            alt="cartão"
          />

          <p className="text-white absolute z-20 text-[23px] bottom-[60px] left-[20px] tracking-[1px]">
            {date.number === '' ? '0000 0000 0000 0000': date.number}
          </p>

          <div className="flex absolute bottom-[20px] left-[20px] z-10 text-white w-full gap-[34%] text-[11px] tracking-[1px]">
            <p>{date.name === '' ? 'Matheus M': date.name}</p>
            <p>{date.date === '' ? '16/12': date.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
