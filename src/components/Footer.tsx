export default function Footer(){
    return(
        <div className="p-7">
            {/* parent div 1 - have the text content*/}
            <div className="grid grid-cols-3">
                {/* child div 1 */}
                <div className="flex flex-col gap-24 items-start ml-12"> 
                    {/*  A button by default has display: inline-block — meaning it should NOT take full width naturally. BUT when you put it inside a flex container (which you have — flex flex-col), the child items stretch to fill the cross axis by default because of align-items: stretch.So it's not the div causing it — it's flex-col that's stretching the button to full width!*/}
                    {/* default items-strech was causing the button to take the full width*/}
                    <button className="font-logo border border-neutral-300 p-1.5 pl-4 pr-4 tracking-wider">ARCUS</button>
                    {/* grow-0 will stop the button from growing vertically because flex direction is col hence vertical axis is the main axis.  */}
                    <p className="text-[14px] text-neutral-500">2026 Arcus Private Wealth. <br></br> All rights reserved.</p>

                </div>
                {/* child div 2 */}
                <div>
                    {/* justify-center will center along the main axis while items-center will center along the cross axis */}
                    <p className="text-center text-[15px] text-neutral-500">Naviagtion</p>
                    <div className="text-[15px] flex flex-col gap-4 mt-4 items-center">
                    <a href="#" className="transition-colors ease-in-out duration-500 hover:text-neutral-500 hover:underline"> About</a>
                    <a href="#" className="transition-colors ease-in-out duration-500 hover:text-neutral-500 hover:underline">Culture</a>
                    <a href="#" className="transition-colors ease-in-out duration-500 hover:text-neutral-500 hover:underline">Teams</a>
                    <a href="#" className="transition-colors ease-in-out duration-500 hover:text-neutral-500 hover:underline">Career</a>
                    </div>

                </div>
                {/* child div 3 */}
                <div>
                    <p className="text-center text-[15px] text-neutral-500">Naviagtion</p>
                    <div className="text-[15px] flex flex-col gap-4 mt-4 items-center ">
                    <a href="#" className="transition-colors ease-in-out duration-500 hover:text-neutral-500 hover:underline">LinkedIn</a>
                    <a href="#" className="transition-colors ease-in-out duration-500 hover:text-neutral-500 hover:underline">Contact Us</a>
                    <a href="#" className="transition-colors ease-in-out duration-500 hover:text-neutral-500 hover:underline">tanusingh28388@gmail.com</a>
                    </div>
                </div>
            </div>
            {/* parent div 2 - have the image */}
            <div className="w-full h-[250px] overflow-hidden mt-12">
                <img src="city.png" alt="" className="w-full h-full object-cover object-[50%_60%]"/>
                {/* only object-center will not work, use it with w-full h-full and object-cover, object-[50%_60%] is for center horizontally and little down then vertically center */}
            </div>
        </div>
    );
}

// Element/PropertySurprising Defaultflex containeralign-items: stretchflex containerflex-direction: rowdivdisplay: block (takes full width)buttondisplay: inline-blockimgdisplay: inline (causes bottom gap)box-sizingcontent-box (not border-box)