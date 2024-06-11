import { Link, useNavigate } from "react-router-dom";
import Input from "../inputComponent/Input";
import { useState } from "react";
import axios from "axios";

const LogInPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post('http://localhost:4000/login', { email, password })
            console.log(result);
            if (result.data.message == 'Login Successfully') {
                alert(result.data.message)
                navigate('/')
            }
            // if (!result.data.cookie) {
            //     navigate('/logIn')
            // }
            if (result.data.message == 'email or password is incorrect') {
                alert(result.data.message)
                location.reload('/logIn')
            }
            if (result.data.message == 'user not exist') {
                alert(result.data.message)
            }
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className=" bg-gradient-to-r from-blue-900 to to-violet-900 min-h-screen text-white">

            <div>

                <div className=" pb-5 text-center text-xl font-semibold">
                    <h1> LOG IN HERE</h1>
                </div>
                <form onSubmit={handleSubmit} className=" pb-5 pt-10">
                    <div className=" bg-slate-950/30 max-w-lg mx-auto p-7 space-y-2 rounded-xl pt-10">
                        <div>
                            <Input onchange={(e) => setEmail(e.target.value)} placeholder="Email Id" type="email" id="EmailId" />
                        </div>

                        <div>
                            <Input onchange={(e) => setPassword(e.target.value)} placeholder="Password" type="Password" id="Password" />
                        </div>
                        <button className=" hover:scale-105 transition-all ease-in-out duration-300 p-2 rounded w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 font-semibold">Log In</button>
                        <div className=" pt-1"> <small className=" font-semibold opacity-80 hover:underline text-teal-400"><Link to={""}>Forgot Password ?</Link></small></div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogInPage;