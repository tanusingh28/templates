export default function Stats(){
    return(
        <section id="Insights">
        <div>
            <div className="grid grid-cols-3 p-7">
            <div className=" border border-neutral-300 p-7 ">
                <h1 className="font-heading text-5xl text-neutral-600 ">$2.4B</h1>
                <p className="font-heading text-neutral-500 tracking-wider">Assests under advisory</p>
            </div>
            <div className="border border-neutral-300 p-7">
                <h1 className="font-heading text-5xl text-neutral-600 ">340+</h1>
                <p className="font-heading text-neutral-500 tracking-wider">Founder clients</p>
            </div>
            <div className="border border-neutral-300 p-7">
                <h1 className="font-heading text-5xl text-neutral-600 ">92%</h1>
                <p className="font-heading text-neutral-500 tracking-wider">Client retention rate</p>
            </div>
        </div>
        <div className=" p-7 mt-12 mb-12 flex w-full">
                <div className="basis-1/3 p-12">
                    <p className="font-heading text-xl text-neutral-500">2014</p>
                </div>
                <div className="basis-2/3 p-12">
                    <p className="font-heading text-xl text-neutral-700 tracking-wider ">Since 2014, we've worked with the founders and executives who want <br></br> their wealth managed with the same precision they ran their <br></br>companies.</p>
                </div>
        </div>
        <hr className="border-0 border-t border-neutral-300 mb-10" />
        </div>
        </section>
    );
}