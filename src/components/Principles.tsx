
export default function Principles(){
    return(
        <section id="Solutions">
        <div>
        <div className="p-16">
            <p className=" font-heading text-neutral-600 text-[15px] ">Our Principles</p>
            <div className="mb-12 flex  justify-start">
                <div className=" flex-1 min-w-0">
                <h1 className="text-5xl font-heading mt-4">You don't need a glossary to understand your own wealth.</h1>
                </div>
                <div className="font-heading flex-1 min-w-0 text-neutral-600">
                    <p>All your assests in one place Investments, real states, equity, cash. <br></br>
                    Everthing connected in a single view so nothing falls through the gaps.
                    </p>
                </div>
            </div>
            <div className="grid grid-rows-2 grid-flow-col mb-12 mt-12 gap-3 ">
                <div className="row-span-2 border border-neutral-300 p-7 bg-neutral-100">
                    <img src="city.png" alt="" className="border border-zinc-500 shadow-xl"/>
                    <h1 className=" font-heading mt-5 text-slate-950">No jargon</h1>
                    <p className="max-w-[500px] font-heading">You ran a company. You don't need someone explaining what diversification means. We skip that part.</p>
                </div>
                <div className="border border-neutral-300 p-7 bg-neutral-50 flex flex-col gap-24">
                    <h1 className=" text-2xl font-heading">Decision, not reports</h1>
                    <p className="text-neutral-700 font-heading">We don't send you a PDF every quarter. We tell you what to do next and explain the thinking behind it.</p>
                </div>
                <div className="border border-neutral-300 bg-neutral-50 p-7 bg-neutral-50 flex flex-col gap-24">
                    <h1 className=" text-2xl font-heading">The full picture</h1>
                    <p className="text-neutral-700 font-heading">Your wealth isn't in one place, so your view of it shouldn't be either. <br></br>
                    We connect everthing.</p>
                </div>

            </div>
        </div>
        <hr className="border-0 border-t border-neutral-300 mb-20" />

 </div>
 </section>
    );
}

// flex-1 is the shorthand for flex: 1 1 0%;
//ie Flex-grow: 1 (can grow to fill available space) , flex-shrink: 1 (can shrink if needed), flex-basis 0% (start from 0 width if auto- then it will start from the width of content ).
// agr flex-1 nhi kiya toh the children will take space acc to thier content
//default behaviour is max-width: auto; - don't shrink smaller than your content
//min-width: 0; allowed tp shrink and the content wraps
//in a flex box children influence parent size unless constrained 
//max-w-lg; max-width is a constraint ki isse zyada nhi badhega , prevents streching on large screens.
//w-full: 100% width of what ? - parent!
//flex flex-col gap-4 (flex direction for vertical and gap-4 for space in between them) or justify-between h-[300px]
