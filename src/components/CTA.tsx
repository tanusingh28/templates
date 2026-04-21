export default function CTA(){
    return(
        <div>
            <div className="flex flex-col items-center gap-7 p-7 ">
            {/* very fucking imp concept! justify* aligns along main axis here main aixs is y because flex-cols and items* algin along cross axis */}
            <h1 className="text-5xl text-center max-w-[500px]">Most advisors manage wealth. We protect it.</h1>
            {/* text-center is for choossing the indentation of the text like in docs */}
            <p className="text-lg text-neutral-800 text-center max-w-[450px]">Get started in one week. We'll show you a clear overview of your properties.</p>
            <button className="border border-black text-white bg-black p-3 pl-4 pr-4 shadow-lg">Talk to an Advisor</button>

        </div>
        <hr className="border-0 border-t border-neutral-300 mt-12 mb-12" />
        </div>
        

    );
}