

export default function Hero (){
    return(
        <div className="flex flex-col gap-4  p-7">
            <div className="flex w-[700px]">
        <h1 className="font-heading text-7xl text-slate-800 tracking-wide">Where your capital works as one</h1>

            </div>
        <p className="font-heading text-md text-slate-700 w-[450px] tracking-wider mb-4">Arcus pairs you with a dedicated advisor and a platform that really makes your financial picture clear.</p>
        <div className="flex justify-start gap-2 w-[350px]">
        <button className="font-heading border border-black text-white bg-black p-2 pr-[20px] pl-[20px] shadow-lg cursor-pointer">Talk to Advisor</button>
        <button className="font-heading border border-black border-t-3 p-2 shadow-lg cursor-pointer">Watch a video tour</button>
        </div>
        <div >
            <img src="city.png" alt="" className="h-[600px] w-full mt-7 border border-neutral-300 "/>
        </div>
        </div>

    );
}