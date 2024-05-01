import React, { useState } from "react";
import logo from "../assets/GoDocBlack.svg";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Button from "../components/Button";

const DoctorSignUp = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);
      Axios.post("http://localhost:3000/auth/docsignup", {
        name,
        email,
        password,
        phoneNumber,
        clinicName,
        clinicAddress,
        city,
        state,
        zipCode
      })
        .then((response) => {
          if (response.data.status) {
            navigate("/login");
          }
        })
        .catch((error) => {
          if (error.response) {
            // Server responded with a status code outside of 2xx range
            setErrorMessage(error.response.data.message);
          } else if (error.request) {
            // The request was made but no response was received
            setErrorMessage("No response from server. Please try again later.");
          } else {
            // Something happened in setting up the request that triggered an error
            setErrorMessage("An error occurred. Please try again later.");
          }
          setLoading(false);
        });
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-slate-900 pt-20 pb-10">
      <div className="mx-auto ">
        <div className="flex w-10/12 md:w-9/12 bg-white rounded-2xl mx-auto shadow-xl overflow-hidden">
          <div className="w-1/2 hidden lg:flex p-8 flex-wrap bg-gradient-to-l from-black to-slate-900">
            <img src={logo} alt="signup image" className="rounded-3xl" />
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 font-bold underline">Register</h2>
            <p className="mb-4">
              Create your account as a <span className="text-lg font-semibold text-red-500">Doctor</span>. It's free and only takes a minute.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-5">
                <input
                  type="text"
                  placeholder="Full name"
                  id="name"
                  name="name"
                  className="border border-slate-400 rounded-lg py-2 px-2 sm:w-1/2"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="border border-slate-400 rounded-lg py-2 px-2 sm:w-1/2"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
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
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  name="password"
                  className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <input
                  type="string"
                  placeholder="Clinic Name"
                  id="clinicName"
                  name="clinicName"
                  className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                  required
                  onChange={(e) => setClinicName(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <input
                  type="string"
                  placeholder="Clinic Address"
                  id="clinicAddress"
                  name="clinicAddress"
                  className="border border-slate-400 rounded-lg py-2 px-2 w-full"
                  required
                  onChange={(e) => setClinicAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-5 mt-5">
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  name="city"
                  className="border border-slate-400 rounded-lg py-2 px-2 sm:w-1/3"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="State"
                  id="state"
                  name="state"
                  className="border border-slate-400 rounded-lg py-2 px-2 sm:w-1/3"
                  required
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Postal / Zip Code"
                  id="zipCode"
                  name="zipCode"
                  className="border border-slate-400 rounded-lg py-2 px-2 sm:w-1/3"
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </div>
              <div className="mt-5">
                <input
                  type="checkbox"
                  className="border border-black"
                  required
                />
                <span className="p-1">
                  I accept the{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    {" "}
                    Terms of Use{" "}
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <Button
                content={
                  loading ? (
                    <span className="p-3">Loading...</span>
                  ) : (
                    "Register Now"
                  )
                }
              ></Button>
              <p className="pt-4">
                Already have an account?{" "}
                <span className="text-red-600 font-semibold">
                  <Link to="/login">Login</Link>
                </span>
              </p>
              <p className="pt-4">
                Sign Up as a <span className="text-lg font-semibold text-blue-600">Patient</span> : &nbsp;
                <span className="text-emerald-600 text-lg font-semibold underline">
                  <Link to="/signup">Click Here</Link>
                </span>
              </p>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignUp;
