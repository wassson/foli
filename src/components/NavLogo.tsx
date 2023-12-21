const NavLogo = () => {
  return (
    <div className="p-1">
      <div className="flex">
        <div className="w-2.5 h-2.5 bg-black dark:bg-white rounded-b-md rounded-tr-md"></div>
        <div className="w-2.5 h-2.5 bg-black dark:bg-white rounded-b-md rounded-tl-md"></div>
      </div>
      <div className="flex">
        <div className="w-2.5 h-2.5 bg-black dark:bg-white rounded-t-md rounded-br-md"></div>
        <div className="w-2.5 h-2.5 bg-black dark:bg-white rounded-t-md rounded-bl-md"></div>
      </div>
    </div>
  )
}

export default NavLogo