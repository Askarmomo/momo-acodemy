import Input from "../inputComponent/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";

const validationSchema = z.object(
    {
        firstName: z.string().min(3).max(20),
        lastName: z.string().min(3).max(20),
        email: z.string().min(3).max(30),
        number: z.string().min(9).max(10),
        password: z.string().min(10).max(20)
    }
)

const SingUpPage = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validationSchema) })

    const sendToServer = async (data) => {
        const apiRequest = await fetch("http://localhost:2000/request", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (apiRequest.status === 200) {
            alert("you have successfully joined")
            navigate("/")
        } else {
            alert("you did somthing wrong")
        }
    }

    return (
        <div className=" bg-gradient-to-r from-blue-900 to to-violet-900 min-h-screen text-white ">
            <div>
                <div>
                    <div className=" flex gap-1 items-center pt-5 pl-10">
                        <Link to={"/"} className=" text-4xl font-semibold font-sans ">MOMO</Link>
                        <svg className=" text-cyan-300 rounded animate-pulse" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M3.5 20q-.213 0-.356-.144Q3 19.712 3 19.5t.144-.356T3.5 19h17q.213 0 .356.144T21 19.5t-.144.356T20.5 20zm1.502-2.77q-.415 0-.709-.29T4 16.23V13q0-.417.291-.708T4.998 12t.709.292T6 13v3.23q0 .417-.291.71q-.291.29-.707.29m4.654 0q-.416 0-.709-.29t-.293-.71V8q0-.417.29-.708T9.653 7t.709.292t.293.708v8.23q0 .417-.291.71q-.291.29-.707.29m4.673 0q-.416 0-.709-.29t-.293-.71V11q0-.417.29-.708t.708-.292t.709.292t.293.708v5.23q0 .417-.291.71q-.291.29-.707.29m4.673 0q-.415 0-.709-.29T18 16.23V5q0-.417.291-.708T18.998 4t.709.292T20 5v11.23q0 .417-.291.71q-.291.29-.707.29"></path></svg>
                    </div>

                    <div className=" pb-5 text-center text-xl font-semibold">
                        <h1>WELCOME TO SING UP</h1>
                    </div>
                </div>

                <form action="" onSubmit={handleSubmit(sendToServer)} className=" pb-5">
                    <div action="" className=" bg-slate-950/30 max-w-lg mx-auto p-7 space-y-2 rounded-xl">
                        <div className="">
                            <Input error={errors.firstName} register={register("firstName")} placeholder="First Name" type="name" name="firstName" id="FirstName" />
                        </div>
                        <div>
                            <Input error={errors.lastName} register={register("lastName")} placeholder="Last Name" type="name" id="LaststName" name="lastName" />
                        </div>
                        <div>
                            <Input error={errors.email} register={register("email")} placeholder="Email Id" type="email" id="EmailId" name="email" />
                        </div>
                        <div>
                            <Input error={errors.number} register={register("number")} placeholder="Phone Number" type="text" id="PhoneNumber" name="number" />
                        </div>
                        <div>
                            <Input error={errors.password} register={register("password")} placeholder="Password" type="Password" id="Password" name="password" />
                        </div>
                        <button className=" hover:scale-105 transition-all ease-in-out duration-300 p-2 rounded w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 font-semibold">Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SingUpPage;