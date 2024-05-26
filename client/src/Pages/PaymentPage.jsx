import { Link } from "react-router-dom";
import Input from "../inputComponent/Input";



const PaymentPage = () => {
    return (
        <div className=" bg-gradient-to-r from-blue-900 to to-violet-900 min-h-screen text-white">
            <div>
                <div className=" flex justify-between items-center pt-5">
                    <div className=" flex gap-1 items-center sm:pl-10 pl-5">
                        <Link to={"/"} className=" text-4xl font-semibold font-sans ">MOMO</Link>
                        <svg className=" text-cyan-300 rounded animate-pulse" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M3.5 20q-.213 0-.356-.144Q3 19.712 3 19.5t.144-.356T3.5 19h17q.213 0 .356.144T21 19.5t-.144.356T20.5 20zm202-2.77q-.415 0-.709-.29T4 16.23V13q0-.417.291-.708T4.998 12t.709.292T6 13v3.23q0 .417-.291.71q-.291.29-.707.29m4.654 0q-.416 0-.709-.29t-.293-.71V8q0-.417.29-.708T9.653 7t.709.292t.293.708v8.23q0 .417-.291.71q-.291.29-.707.29m4.673 0q-.416 0-.709-.29t-.293-.71V11q0-.417.29-.708t.708-.292t.709.292t.293.708v5.23q0 .417-.291.71q-.291.29-.707.29m4.673 0q-.415 0-.709-.29T18 16.23V5q0-.417.291-.708T18.998 4t.709.292T20 5v11.23q0 .417-.291.71q-.291.29-.707.29"></path></svg>
                    </div>
                    <div className=" hidden justify-between sm:flex  font-semibold gap-10 items-center pr-5">
                        <Link to={"/sing up"} className=" rounded px-7 bg-cyan-500 cursor-pointer  py-2 transition ease-in-out hover:scale-110 duration-500">Join</Link>
                        <Link to={'/log in'} className=" border border-cyan-500 rounded px-7 cursor-pointer py-2 hover:bg-cyan-500 duration-300 ease-in-out">Log In</Link>
                    </div>
                </div>

                <div className=" text-center text-xl font-semibold">
                    <h1 className=" pt-20">PAY HERE</h1>
                </div>
                <form action="" className=" pb-5 pt-10 m-5 sm:m-0">
                    <div action="" className=" bg-slate-950/30 max-w-lg mx-auto p-7 space-y-2 rounded-xl pt-10">
                        <div className=" font-semibold flex justify-between items-center bg-gradient-to-r p-5 rounded text-xl"><div>PLATINUM PLANE</div> <div className=" text-teal-400 text-2xl">Rs. 10,000</div></div>
                        <div className=" opacity-80 font-semibold pt-10 pb-5 ">Your Payment Detaile</div>
                        <div className=" flex items-center relative ">
                            <svg className=" pb-2 bottom-4 absolute" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"></path><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"></path></g></svg>
                            <Input placeholder="Card Number" type="number" id="CardNumber" className="pl-10" />
                        </div>

                        <div className=" flex justify-between gap-4 ">
                            <div className=" flex items-center">
                                <div className=" flex items-center relative ">
                                    <svg className=" pb-2 bottom-4 absolute" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zm0-12H5V6h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"></path></svg>
                                    <Input placeholder="MM/YY" type="text" id="text" className="pl-10" />
                                </div>
                            </div>
                            <div className=" flex items-center relative ">
                                <svg className=" pb-2 bottom-4 absolute" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V9h3V7q0-1.671 1.164-2.836T12 3t2.836 1.164T16 7v2h3v12zm7-4.5q.633 0 1.066-.434T13.5 15t-.434-1.066T12 13.5t-1.066.434T10.5 15t.434 1.066T12 16.5M9 9h6V7q0-1.25-.875-2.125T12 4t-2.125.875T9 7z"></path></svg>
                                <Input placeholder="CVC" type="number" id="CardNumber" className="pl-10" />
                            </div>
                        </div>
                        <button className=" hover:scale-105 transition-all ease-in-out duration-300 p-2 rounded w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 font-semibold">Pay</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PaymentPage;