export default function Navbar(){
    return(
        <div>
            {/* parent div */}
            <div className="flex justify-between flex-wrap items-center p-3 ml-5 mr-5">
                {/* child 1 */}
                <div className="font-logo tracking-wider text-2xl border border-neutral-400 p-2 pl-3 pr-3">
                    ARCUS
                </div>
                {/* child 2 */}
                <div className="flex gap-7 items-center">
                    {/* adding items-center here really changed the game! the button and nav links are now in same line which were not when i tried to give items-center to the main div */}
                    <a href="#" className="text-[17px]">Solutions</a>
                    <a href="#" className="text-[17px]">Insights</a>
                    <a href="#" className="text-[17px]">Company</a>
                    <button className="border border-black text-white bg-black p-2 pr-[20px] pl-[20px] shadow-lg cursor-pointer">Get Started</button>
                </div>

            </div>
            <div className="w-full h-[0.8px] bg-neutral-300 mb-18"></div>
        </div>
    )
}

//  flex-row looks like this →→→→→→→→

// justify = along the arrows (horizontal)
// items   = perpendicular to arrows (vertical)

//align-content : eg. content-center works only when flex-wrap enabled and when there are multiple rows and columns. NOT FOR THE SINGLE ROW OR COLUMN!
//align-items works on single row/col
//align-content works on multiple rows and cols