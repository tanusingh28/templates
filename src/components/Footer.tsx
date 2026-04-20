export default function Footer(){
    return(
        <div className="p-7">
            {/* parent div 1 - have the text content*/}
            <div className="grid grid-cols-3">
                {/* child div 1 */}
                <div className="">
                    <button className="border border-neutral-300 p-1.5 pl-4 pr-4">ARCUS</button>
                    <p className="text-[14px] text-neutral-500">2026 Arcus Private Wealth</p>
                    <p className="text-[14px] text-neutral-500">All rights reserved.</p>

                </div>
                {/* child div 2 */}
                <div>
                    <p>Naviagtion</p>
                    <div className="">
                    <a href="#"> About</a>
                    <a href="#">Culture</a>
                    <a href="#">Teams</a>
                    <a href="#">Career</a>
                    </div>

                </div>
                {/* child div 3 */}
                <div>
                    <p>Naviagtion</p>
                    <a href="#">LinkedIn</a>
                    <a href="#">Contact Us</a>
                    <a href="#">tanusingh28388@gmail.com</a>

                </div>
            </div>
            {/* parent div 2 - have the image */}
            <div className="w-full h-[300px] overflow-hidden">
                <img src="city.png" alt="" className="w-full h-full object-cover object-[50%_60%]"/>
                {/* only object-center will not work, use it with w-full h-full and object-cover, object-[50%_60%] is for center horizontally and little down then vertically center */}
            </div>
        </div>
    );
}