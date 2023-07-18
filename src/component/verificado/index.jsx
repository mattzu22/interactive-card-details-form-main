export const Sucesso = ()=>{
    return(
        <div className="flex flex-col items-center justify-center w-[350px] pt-[20%] m-auto md:pt-0 md:m-0">
            <img className="w-[70px] mb-[30px] md:w-[80px]" src="./src/images/icon-complete.svg" alt="icon complete" />

            <h2 className="text-[22px] font-[600] uppercase tracking-[4px] mb-[10px] font-primary md:text-[27px]">thank you!</h2>
            <p className="text-grey tracking-[1px] mb-[40px]">We've added your card details</p>

            <a href="/" className="bg-violet text-white p-[14px] w-full text-center rounded-[5px]">Continue</a>
        </div>
    )
}