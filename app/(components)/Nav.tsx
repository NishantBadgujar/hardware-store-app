function Nav() {
  return <div> <div className="navbar w-full h-28 bg-[#503191] flex items-center justify-between px-10">

    <div className="flex items-center gap-4 ">
    <img className="w-20 h-20" src="vercel.svg" alt="logo" />
    <h1 className="text-3xl antialiased font-mono font-semibold text-amber-50">Indumati Traders</h1>
    </div>


    <div className="flex items-center gap-4"> 

    {/* add slide bar */}
  <button className="opt-bar"></button>

    <select className="outline-none rounded-lg p-1" name="categories">
    <option value="">All</option>
    <option value="">Home</option>
    <option value="">Contac</option>
    <option value="">Cements</option>
    <option value="">Roads</option>
    <option value="">Tanks</option>
    </select>
    
    <input className=" outline-none rounded-lg p-1 hidden sm:block" type="text" placeholder="Search here you want...!" />
</div>

<div className="flex items-center gap-4">

<button className="w-32 bg-[#FFC832] rounded-md hidden sm:block">Login/Register</button>
<button className="w-12  bg-[#FFC832] rounded-md">Cart <img src="" alt=""/></button>
 
  </div>

</div>
<div className="w-full h-10 bg-black flex-col hidden sm:block flex-left">
<ul className=" flex gap-10 items-center pt-2 pl-8 font-serif outline-none">
  <li className="text-gray-300 hover:text-gray-50">Home</li>  
  <li className="text-gray-300 hover:text-gray-50">Shop</li>
  <li className="text-gray-300 hover:text-gray-50">Cement</li>
  <li className="text-gray-300 hover:text-gray-50">Iron</li>
  <li className="text-gray-300 hover:text-gray-50">Tanks</li>
  <li className="text-gray-300 hover:text-gray-50">Paints</li>
  <li className="text-gray-300 hover:text-gray-50">Instruments</li>
  <li className="text-gray-300 hover:text-gray-50">Cleaning</li>


</ul>
</div>
</div>;
}

export default Nav;
