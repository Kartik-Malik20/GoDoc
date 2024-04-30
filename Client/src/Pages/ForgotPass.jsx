import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/GoDocBlack.svg";
import Button from "../components/Button";

const ForgotPass = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) =>{
    e.preventDefault()
    Axios.post('http://localhost:3000/auth/forgot-password',{
        email
    }).then((response) =>{
        if(response.data.status){
            alert('Check your email for reset password link')
            navigate('/login')
        }
    }).catch((err)=>{
        console.log(err)
    })
  }

  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-black to-slate-900 pt-20">
        <div className="mx-auto ">
          <div className="flex w-10/12 md:w-9/12 bg-white rounded-2xl mx-auto shadow-xl overflow-hidden">
            <div className="w-1/2 hidden md:flex p-8 flex-wrap bg-gradient-to-l from-black to-slate-900 ">
              <img src={logo} alt="signup image" className="rounded-3xl" />
            </div>
            <div className="w-full md:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 font-bold underline text-center">Forgot Password</h2>
              <p className="mb-4">Get password change link on email.</p>
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Button content='Submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
