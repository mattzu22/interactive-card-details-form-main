export const Sucesso = ()=>{
    return(
        <div className="flex flex-col items-center justify-center w-[350px]">
            <img className="w-[80px] mb-[30px]" src="./src/images/icon-complete.svg" alt="icon complete" />

            <h2 className="text-[27px] font-[600] uppercase tracking-[4px] mb-[10px] font-primary">thank you!</h2>
            <p className="text-grey tracking-[1px] mb-[40px]">We've added your card details</p>

            <a href="/" className="bg-violet text-white p-[14px] w-full text-center rounded-[5px]">Continue</a>
        </div>
    )
}