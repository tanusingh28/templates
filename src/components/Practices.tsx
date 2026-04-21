export default function Practices(){
    return(
        <div>
            {/* Parent div */}
            <div className="flex p-7">
                {/* child div 1 */}
                <div className="basis-1/3 ml-12 text-lg font-heading">
                    <p>Capabilities</p>
                    <div className="w-full h-[1px] mt-2 bg-linear-to-r from-neutral-300 to-white"></div>
                </div>
                {/* child div 2 */}
                <div className="basis-2/3 ">
                    <h1 className="text-5xl mb-24 font-heading">Three practices. One purpose: <br></br>
                    nothing gets left to chance.</h1>
                    {/* parent div */}
                    <div className="flex flex-col gap-6">
                        {/* child div 1 */}
                    <div>
                    <h1 className=" font-heading text-xl mb-2">Wealth Planning</h1>
                    <p className="text-neutral-700 font-heading max-w-[500px]">You've spent years building. We make sure the structure around it is as deliberate as the work that created it.</p>   
                    </div>
                     {/* child div 2 */}
                    <div>
                    <h1 className="text-xl font-heading mb-2">Investment Management</h1>
                    <p className="text-neutral-700 font-heading max-w-[500px]">Precision allocation across private markets, public equity, and alternatives. No noise. Just capital working the way it should.</p>   
                    </div>
                     {/* child div 3 */}
                    <div>
                    <h1 className="text-xl font-heading mb-2">Estate Planning</h1>
                    <p className="text-neutral-700 font-heading max-w-[500px]">What you leave behind should be as considered as what you built . We structure it so the people you care about inherit clarity, not complexity.</p>   
                    </div>
                    </div>
                
                </div>

            </div>
        <hr className="border-0 border-t border-neutral-300 mt-12 mb-24"/>
        </div>

    );
}