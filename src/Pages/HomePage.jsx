import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



const HomePage = () => {

    return (
        <div>
            <div className=' bg-blue-900'>

                <div className=" pt-60 sm:pl-40 px-5 sm:px-0  mb-10 text-white bg-[url('src/images/2151005751.jpg')] sm:-z-50 min-h-screen">
                    <h1 className=" text-4xl pb-4" data-aos="fade-up">Learn Trading From <span className=" text-teal-500 text-5xl animate-pulse">MOMO</span> Acodemy</h1>
                    <h1 data-aos="zoom-out-right">Learn Trading From MOMO-Acodemy, We Are Teaching Forex And Crypto Markets <br /> And We Are 2 Year Of Expericence Profotionals</h1>
                </div>

                <div className=" sm:flex  sm:justify-between pt-10 pb-10 items-center bg-blue-950 sm:px-28 px-5">
                    <div className=" mb-5 flex bg-slate-900 text-white gap-5 border rounded-xl p-5 items-center" data-aos="zoom-out-right">
                        <div><svg className=" bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg" xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.938 14.98l3.837-2.47q.292-.187.292-.51t-.292-.51l-3.837-2.47q-.298-.212-.618-.038t-.32.547v4.942q0 .373.32.547t.618-.037M3.544 13q.214 0 .369.15t.222.383q.169.805.468 1.549t.747 1.397q.129.183.12.396t-.174.379q-.14.14-.338.115t-.327-.196q-.627-.871-.993-1.74t-.526-1.895q-.037-.207.09-.373T3.545 13m1.752-6.235q.166.166.171.38t-.117.39q-.448.653-.737 1.39t-.46 1.542q-.066.233-.23.383t-.379.15t-.341-.178t-.086-.385q.162-1.008.518-1.857q.355-.85.977-1.72q.128-.172.326-.213q.199-.041.358.118m1.4 11.895q.166-.172.392-.168t.408.133q.635.448 1.388.76q.753.311 1.572.48q.213.048.354.21t.14.375t-.168.338t-.376.07q-1.085-.2-1.913-.556t-1.685-.952q-.177-.129-.224-.327t.112-.363M11 3.55q0 .233-.147.385t-.38.219q-.825.17-1.571.468q-.746.3-1.38.753q-.184.129-.4.12t-.382-.174q-.146-.146-.118-.347t.205-.33q.877-.596 1.71-.949q.834-.353 1.938-.553q.208-.036.366.08T11 3.55M20 12q0-2.921-1.853-5.122T13.46 4.123q-.202-.042-.331-.204T13 3.55t.16-.336t.355-.09q3.25.545 5.368 3.04Q21 8.657 21 12t-2.117 5.837t-5.368 3.04q-.196.036-.355-.091T13 20.45t.129-.37t.33-.203q2.835-.554 4.688-2.755T20 12"></path></svg></div>
                        <div>
                            <h1 className=" font-semibold text-xl pb-3" data-aos="fade-up"> 2+ Hours Dayly Live Setion</h1>
                            <small className=" text-gray-300" >Every sunday To Friday Live Setion <br /> Morning 1 Hours Eavining 1 Hour</small>
                        </div>
                    </div>
                    <div className=" mb-5 flex bg-slate-900 text-white border p-5 rounded-xl gap-5 items-center" data-aos="fade-up">
                        <div><svg className="  bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg" xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H18q.825 0 1.413.587T20 4v12.525q0 .2-.162.363t-.588.362q-.35.175-.55.5t-.2.75t.2.763t.55.487t.55.413t.2.562v.25q0 .425-.288.725T19 22zM9 15q.425 0 .713-.288T10 14V5q0-.425-.288-.712T9 4t-.712.288T8 5v9q0 .425.288.713T9 15m-1.5 5h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"></path></svg></div>
                        <div>
                            <h1 className=" font-semibold text-xl pb-3" data-aos="fade-up">SMC + Market Language</h1>
                            <small className=" text-gray-300">SMC All Concept And Pshycholegy <br />And Our Facing Market Languages</small>
                        </div>
                    </div>
                    <div className=" mb-5 flex bg-slate-900 text-white border gap-5 items-center rounded-xl p-5" data-aos="zoom-out-left">
                        <div><svg className="  bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg" xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 12.792V8.5q0-.213-.143-.357T12 8t-.357.143t-.143.357v4.379q0 .161.056.3t.186.271l3.05 3.05q.14.14.345.15t.363-.15t.16-.354t-.16-.354zM12 21q-1.663 0-3.118-.626t-2.543-1.713t-1.713-2.543T4 13t.626-3.118t1.713-2.543t2.543-1.713T12 5t3.118.626t2.543 1.713t1.713 2.543T20 13t-.626 3.118t-1.713 2.543t-2.543 1.713T12 21M2.78 7.262q-.159-.16-.159-.354t.16-.354L5.554 3.78q.14-.14.344-.15t.364.15t.16.354t-.16.353L3.488 7.262q-.14.14-.344.15t-.363-.15m18.438 0q-.16.16-.354.16t-.353-.16l-2.774-2.774q-.14-.14-.15-.344t.15-.363t.354-.16t.354.16l2.773 2.773q.14.14.15.344t-.15.364M12 20q2.906 0 4.953-2.047T19 13t-2.047-4.953T12 6T7.047 8.047T5 13t2.047 4.953T12 20"></path></svg></div>
                        <div>
                            <h1 className=" font-semibold text-xl pb-3" data-aos="fade-up"> Life Time Access</h1>
                            <small className=" text-gray-300">Our Service Unlimited Untill You Succeed <br />You Can Aska Eney Doubts</small>
                        </div>
                    </div>
                </div>
                <div className=" dark:bg-blue-900">
                    <div>
                        <div className=" text-white text-center text-3xl font-semibold py-10" data-aos="fade-up"><h1>Our Course Servicess</h1></div>
                    </div>
                    <div className=" mb-10 mx-5 sm:h-96 sm:flex gap-20 sm:max-w-7xl text-center sm:mx-auto bg-gradient-to-r from-blue-900 to-violet-900 border py-5 px-3  rounded-lg  " data-aos="fade-up">
                        <img className=" object-cover pb-5 sm:pb-0" src={"./src/images/pexels-george-morina-4960396.jpg"} alt="" />
                        <div className=" space-y-5">
                            <div className=" text-white text-center font-semibold text-xl"><h1>SMC + Market Language Trading Includes</h1></div>
                            <div className=" text-white flex gap-5 font-semibold" data-aos="fade-up"><img className=" w-6" src={"./src/images/check-mark_2714-fe0f.png"} alt="" /> Introduction of the Market </div>
                            <div className=" text-white flex gap-5 font-semibold" data-aos="fade-up"><img className=" w-6" src={"./src/images/check-mark_2714-fe0f.png"} alt="" />Market Structured</div>
                            <div className=" text-white flex gap-5 font-semibold" data-aos="fade-up"><img className=" w-6" src={"./src/images/check-mark_2714-fe0f.png"} alt="" />  Suply And Demand</div>
                            <div className=" text-white flex gap-5 font-semibold" data-aos="fade-up"><img className=" w-6" src={"./src/images/check-mark_2714-fe0f.png"} alt="" />Liqudity</div>
                            <div className=" text-white flex gap-5 font-semibold" data-aos="fade-up"><img className=" w-6" src={"./src/images/check-mark_2714-fe0f.png"} alt="" />Risk And Money Management</div>
                            <div className=" text-white flex gap-5 font-semibold" data-aos="fade-up"><img className=" w-6" src={"./src/images/check-mark_2714-fe0f.png"} alt="" />Psicholegy</div>
                            <div className=" text-white flex gap-5 font-semibold" data-aos="fade-up"><img className=" w-6" src={"./src/images/check-mark_2714-fe0f.png"} alt="" />Our Poin Of Viewes In Market</div>
                        </div>
                    </div>
                </div>
                <div className=" bg-blue-950 text-white">
                    <h1 className=" font-semibold text-3xl text-center py-10" data-aos="fade-up">Our Teaching Profational</h1>
                    <div className=" sm:flex space-y-5 sm:space-y-0 sm:items-center sm:gap-5 border bg-gradient-to-r from-blue-900 to-violet-900 rounded-xl sm:mx-20 mx-5 p-5" data-aos="fade-up">
                        <div><img className=" mx-auto sm:ml-0 sm:w-52 w-40 h-40 sm:h-52 object-cover rounded-full" src={"src/images/WhatsApp Image 2024-01-28 at 18.41.53_c0709b7b.jpg"} alt="" /></div>
                        <div>
                            <div className=" text-2xl font-semibold pb-5 text-center"><h1>MR. Mohammed Askar</h1></div>
                            <p className=" opacity-80">Ihave More Then 2+ Year Of Experiance In Forex And Crypto Markets
                                <br /> <br /> If You Want To become A Profitable Trader You Should Chose A best Menter
                                <br /> <br /> Next Thing Is Our Mind Set is Most Importent Part In Trading Jurney
                                <br /> <br /> You Are Dont Very About Anything We Are Guide You Join Our Membership Plane
                                <br /> <br />  Learn Everything From MOMO Academy. </p>
                        </div>
                    </div>
                </div>

                <div className=" bg-blue-950 text-white pb-20">
                    <h1 className=" text-2xl font-semibold py-10 text-center" data-aos="fade-up">CHOOSE WHAT SUITS YOU</h1>
                   
                    <div className=" sm:flex space-y-5 sm:space-y-0 justify-between gap-10 items-center sm:px-20 px-5">
                        <div className=" border p-5 rounded-xl bg-gradient-to-r from-blue-900 to-violet-900" data-aos="zoom-out-right">
                            <div data-aos="fade-up"><svg className=" mx-auto text-teal-400" xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45zM12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"></path></svg></div>
                            <h1 className=" text-2xl font-semibold py-5" data-aos="fade-up">PLATINUM PLANE</h1>
                            <div className=" font-semibold text-4xl flex items-center gap-3 text-teal-400" data-aos="fade-up">Rs. 10,000 <div className=" text-lg opacity-75" >( 1 Year Service )</div></div>
                            <div className=" font-semibold text-lg pb-5 pt-1"><s className=" text-teal-600" data-aos="fade-up">Rs. 12,000</s> 10% Off for first 100 members</div>
                            <div data-aos="fade-up"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus culpa, id commodi mollitia illum dolore ea aliquam. Atque quae dolor asperiores facilis ipsa nihil cupiditate laboriosam ut natus quidem cumque sit libero eos qui architecto voluptate dolorem, incidunt deleniti error? Optio quas nulla dolorem inventore tenetur nostrum omnis ullam?</h1></div>
                            <Link to={'Payment'}>
                                <button data-aos="fade-up" className="flex mt-5 gap-2 items-center text-black bg-teal-500 hover:bg-teal-600 font-semibold p-2 rounded-lg">Make Payment <span><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13q-1.25 0-2.125-.875T11 10t.875-2.125T14 7t2.125.875T17 10t-.875 2.125T14 13m-7 3q-.825 0-1.412-.587T5 14V6q0-.825.588-1.412T7 4h14q.825 0 1.413.588T23 6v8q0 .825-.587 1.413T21 16zm2-2h10q0-.825.588-1.412T21 12V8q-.825 0-1.412-.587T19 6H9q0 .825-.587 1.413T7 8v4q.825 0 1.413.588T9 14m10 6H3q-.825 0-1.412-.587T1 18V8q0-.425.288-.712T2 7t.713.288T3 8v10h16q.425 0 .713.288T20 19t-.288.713T19 20M7 14V6z"></path></svg></span></button>
                            </Link>
                        </div>
                        <div className=" border p-5 rounded-xl bg-gradient-to-r from-blue-900 to-violet-900" data-aos="zoom-out-left">
                            <div data-aos="fade-up"><svg className=" mx-auto text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><path fill="currentColor" d="m1 22l1.5-5h7l1.5 5zm12 0l1.5-5h7l1.5 5zm-7-7l1.5-5h7l1.5 5zm17-8.95l-3.86 1.09L18.05 11l-1.09-3.86l-3.86-1.09l3.86-1.09l1.09-3.86l1.09 3.86z"></path></svg></div>
                            <h1 className=" text-2xl font-semibold py-5" data-aos="fade-up">GOLD PLANE</h1>
                            <div className=" font-semibold text-4xl flex gap-3 items-center text-teal-400" data-aos="fade-up">Rs. 40,000 <div className=" text-lg opacity-75">( Unlimited Service )</div></div>
                            <div className=" font-semibold text-lg pb-5 pt-1" data-aos="fade-up"><s className=" text-teal-600">Rs. 45,000</s> 5% Off</div>
                            <div data-aos="fade-up"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse recusandae delectus odit sapiente labore, fugit minus harum cumque at nihil eos quia quod fugiat porro illo laborum voluptate? Quas nihil id perspiciatis est odio fugiat quisquam saepe voluptatibus maxime nam vel, eveniet, deleniti ab distinctio? Sapiente tempore perferendis rem.</h1></div>
                            <Link to={'Payment2'} >
                                <button data-aos="fade-up" className="flex mt-5 gap-2 items-center text-black bg-teal-500 hover:bg-teal-600 font-semibold p-2 rounded-lg">Make Payment <span><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13q-1.25 0-2.125-.875T11 10t.875-2.125T14 7t2.125.875T17 10t-.875 2.125T14 13m-7 3q-.825 0-1.412-.587T5 14V6q0-.825.588-1.412T7 4h14q.825 0 1.413.588T23 6v8q0 .825-.587 1.413T21 16zm2-2h10q0-.825.588-1.412T21 12V8q-.825 0-1.412-.587T19 6H9q0 .825-.587 1.413T7 8v4q.825 0 1.413.588T9 14m10 6H3q-.825 0-1.412-.587T1 18V8q0-.425.288-.712T2 7t.713.288T3 8v10h16q.425 0 .713.288T20 19t-.288.713T19 20M7 14V6z"></path></svg></span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;