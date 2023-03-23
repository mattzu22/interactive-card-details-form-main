import Frontcartao from "../../images/bg-card-front.png";
import Backcard from "../../images/bg-card-back.png";

export const Cartoes = () => {
  return (
    <div className="bg-desktop bg-cover bg-no-repeat md:min-h-screen  md:bg-desktop md:w-[480px]">
      <div className="flex flex-col max-w-[350px] m-auto relative bottom-[-50px] md:margin-0 md:bottom-0 md:min-h-screen md:justify-center md:left-[150px] md:gap-[30px]">
        <img
          className="w-[300px] self-end relative bottom-[-70px] shadow-lg md:bottom-0 md:full md:order-[1] md:left-[60px]"
          src={Backcard}
          alt="cartão"
        />

        <div className="z-10 relative self-start md:self-end">
          <img className="
            w-[300px] shadow-lg md:full" 
            src={Frontcartao} 
            alt="cartão" 
          />

          <p className="text-white absolute z-20 text-[23px] bottom-[60px] left-[20px] tracking-[1px]">
            0000 0000 0000 0000
          </p>

          <div className="flex absolute bottom-[20px] left-[20px] z-10 text-white w-full gap-[34%] text-[11px] tracking-[1px]">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </div>
        </div>
      </div>
    </div>
  );
};