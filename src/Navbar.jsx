import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-5 flex items-center max-w-[600px] my-0 mx-auto border-[#f2f2f2] border-b-[1px]">
      <h1 className="text-[#f1356d] font-bold text-2xl">The Dojo Blog</h1>
      <div className="links ml-auto">
        <Link className="ml-[16px] p-[6px] hover:text-[#f1356d]" to="/">
          Home
        </Link>
        <Link className="ml-[16px] p-[6px] text-white bg-[#f1356d] rounded-lg" to="/create">
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
