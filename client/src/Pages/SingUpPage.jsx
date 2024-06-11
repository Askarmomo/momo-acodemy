import { useState } from "react";
import Input from "../inputComponent/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const SingUpPage = () => {
    const navigate = useNavigate()
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post('http://localhost:4000/register', { firstName, lastName, email, phoneNumber, password })
            if (result.data.message === 'Your Account Created Successfully') {

                alert(result.data.message)
                navigate('/logIn')
            } else {
                alert('Somthing Wrong')
                location.reload('/singUp')
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className=" bg-gradient-to-r from-blue-900 to to-violet-900 min-h-screen text-white ">
            <div>
                <div>

                    <div className=" pb-5 text-center text-xl font-semibold">
                        <h1>WELCOME TO SING UP</h1>
                    </div>
                </div>

                <form className=" pb-5" onSubmit={handleSubmit}>
                    <div action="" className=" bg-slate-950/30 max-w-lg mx-auto p-7 space-y-2 rounded-xl">
                        <div className="">
                            <Input onchange={(e) => setFirstname(e.target.value)} placeholder="First Name" type="name" name="firstName" id="FirstName" />
                        </div>
                        <div>
                            <Input onchange={(e) => setLastName(e.target.value)} placeholder="Last Name" type="name" id="LaststName" name="lastName" />
                        </div>
                        <div>
                            <Input onchange={(e) => setEmail(e.target.value)} placeholder="Email Id" type="email" id="EmailId" name="email" />
                        </div>
                        <div>
                            <Input onchange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" type="text" id="PhoneNumber" name="number" />
                        </div>
                        <div>
                            <Input onchange={(e) => setPassword(e.target.value)} placeholder="Password" type="Password" id="Password" name="password" />
                        </div>
                        <button className=" hover:scale-105 transition-all ease-in-out duration-300 p-2 rounded w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 font-semibold">Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SingUpPage;