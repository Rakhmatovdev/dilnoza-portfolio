const NavbarLogo = () => {
  return (
    <div>
      <h1 className="  sm:hidden md:block ">
      <div className="flex flex-row items-center"> <img src="/d-icon.png" alt="d-icon" width={46} height={46} /> 
       <p className="text-2xl text-white  mt-1"> Dilnoza Turkmenbayeva</p>
       </div>
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
      <img src="/d-icon.png" alt="d-icon" width={46} height={46} /> 
      </h1>
    </div>
  );
};

export default NavbarLogo;
