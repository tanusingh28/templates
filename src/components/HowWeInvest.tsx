export default function HowWeInvest(){
    return(
        <section id="Company">
        <div className=" ">
            {/* parent div */}
            <div className="flex p-7">
                {/* left side - image */}
                <div className="flex-1 w-full h-[500px] min-w-0 overflow-hidden ">
                    <img src="statueliberty.png" className="w-full h-full object-cover object-top opacity-70" alt="" />
                </div>
                {/* right side - content */}
                <div className=" font-heading flex-1 min-w-0 border border-neutral-300 border-l-0 p-12" >
                    <p>Why Arcus</p>
                    <h1 className="text-5xl max-w-[500px] mt-4 mb-12">Wealth should be clear, not complicated.</h1>
                    <p className="text-xl mb-4">Your advisor knows your full picture </p>
                    <p className="text-neutral-500 max-w-[460px] mb-4 mb-4">One dedicated advisor who understands your history, your goals, and what's actually at stake.</p>
                    <hr className="border-0 border-t-2 border-neutral-300 mb-7" />
                    <p className="text-neutral-500 mb-2">All your assests in one place.</p>
                    <hr className="border-0 border-t border-neutral-300 mb-2" />
                    <p className="text-neutral-500 mb-2">For founders and executives </p>
                    <hr className="border-0 border-t border-neutral-300" />

                </div>

            </div>
            <hr className="border-0 border-t border-neutral-300 mt-24 mb-12" />
        </div>
        </section>
    );
}