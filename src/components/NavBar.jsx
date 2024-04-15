import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className=" flex justify-between items-center px-6 py-3 text-white bg-gradient-to-r from-blue-900 to-violet-900 sticky top-0 z-50">
            <div className=" flex gap-1 items-center">
                <Link href="#" className=" text-4xl font-semibold font-sans ">MOMO</Link>
                <svg className=" text-cyan-300 rounded animate-pulse" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M3.5 20q-.213 0-.356-.144Q3 19.712 3 19.5t.144-.356T3.5 19h17q.213 0 .356.144T21 19.5t-.144.356T20.5 20zm1.502-2.77q-.415 0-.709-.29T4 16.23V13q0-.417.291-.708T4.998 12t.709.292T6 13v3.23q0 .417-.291.71q-.291.29-.707.29m4.654 0q-.416 0-.709-.29t-.293-.71V8q0-.417.29-.708T9.653 7t.709.292t.293.708v8.23q0 .417-.291.71q-.291.29-.707.29m4.673 0q-.416 0-.709-.29t-.293-.71V11q0-.417.29-.708t.708-.292t.709.292t.293.708v5.23q0 .417-.291.71q-.291.29-.707.29m4.673 0q-.415 0-.709-.29T18 16.23V5q0-.417.291-.708T18.998 4t.709.292T20 5v11.23q0 .417-.291.71q-.291.29-.707.29"></path></svg>
            </div>
            <div className=" flex justify-between font-semibold gap-10">
                <a className=" transition-all ease-in-out duration-300 hover:scale-125 hover:text-teal-500" href="#">Home</a>
                <a className=" transition-all ease-in-out duration-300 hover:scale-125 hover:text-teal-500" href="#">Cource</a>
                <a className=" transition-all ease-in-out duration-300 hover:scale-125 hover:text-teal-500" href="#">Contect</a>
                <a className=" transition-all ease-in-out duration-300 hover:scale-125 hover:text-teal-500" href="#">About</a>
            </div>
            <div className=" flex justify-between font-semibold gap-10 items-center">
                <div className=" rounded px-7 bg-cyan-500 cursor-pointer  py-2 transition ease-in-out hover:scale-110 duration-500"><Link to={"sing up"}>Join</Link></div>
                <div className=" border border-cyan-500 rounded px-7 cursor-pointer py-2 hover:bg-cyan-500 duration-300 ease-in-out"><Link to={'/'}>Log In</Link></div>
            </div>
        </div>
    );
}

export default NavBar;