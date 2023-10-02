const Navbar = () => {
    return (  
        <nav className="  flex flex-row justify-around item items-center p-2 ">
           
<div id="title">

<h1 className="text-[#E71D36] md:text-[65px] font-bold">DeMo.</h1>
</div>
{/*#E71D36 #011627 background: linear-gradient(90deg, #FFE5E5 0%, #F5FFFE 26.81%, #FCF3FF 54.58%, #FFF4E5 99.86%); */}
<div>
    <ul className="flex flex-row md:gap-6 sm:text-[18px] cursor-pointer text-[#011627] text-sm">
        <li className="hover:underline decoration-[#E71D36] decoration-2 underline-offset-8">
            Services
        </li>

        <li className="hover:underline decoration-[#E71D36] decoration-2 underline-offset-8">
    Packages
</li>


        <li className="hover:underline decoration-[#E71D36] decoration-2 underline-offset-8">
            Who we are
        </li>

        <li className="hover:underline decoration-[#E71D36] decoration-2 underline-offset-8">
            Our Portfolio
        </li>

        <li className="hover:underline decoration-[#E71D36] decoration-2 underline-offset-8">
            About us
        </li>


    </ul>
</div>

<div>
    <button className="border-2 rounded-[48px] bg-[#E71D36] border-[#E71D36]  text-white md:w-[167px] w-[100%] h-[52px] p-2 md:text-[18px] font-semibold">Contacts</button>
</div>
        </nav>
    );
}
 
export default Navbar;
