import React, { useState } from 'react'

const Login = () => {
 const [email, setemail] = useState('')
 const [pass, setpass] = useState('')
  const submitHandler=(e)=>{
    console.log(email)
    console.log(pass)
        e.prventDefault()
        setemail('')
        setpass('')
        
  }
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-100">

            <div className="w-100 rounded-2xl bg-white py-20 shadow-xl">

                <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
                    Login
                </h1>

                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className="flex flex-col gap-5 py-5">

                    <input value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                       
                    }}
                    required
                        type="email"
                        placeholder="Email"
                        className="rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    <input value={pass}
                    onChange={(e)=>{
                        setpass(e.target.value)
                       
                    }}
                    required
                        type="password"
                        placeholder="Password"
                        className="rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    <button
                        type="submit"
                        className="mt-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login