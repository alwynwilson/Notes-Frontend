import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css'
import { registerAPI,loginAPI } from "../services/allAPI";

const Login = ({ insideRegister }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleRegister = async (e)=>{
    e.preventDefault()
    if(userData.username && userData.email && userData.password){
      try{
        const result = await registerAPI(userData)
        if(result.status==200){
          toast.success(`Welcome ${result?.data}... Please login to explore our website`, {
            className: "toast-dark",
            bodyClassName: "toast-body",
            progressClassName: "toast-progress"
          });
          setUserData({
            username:"",email:"",password:""
          })
          navigate('/login')
        }else{
          if(result.response.status==406){
            toast.success(result.response.data, {
              className: "toast-dark",
              bodyClassName: "toast-body",
              progressClassName: "toast-progress"
            });
            setUserData({
              username:"",email:"",password:""
            })
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      toast.success("Please fill the form completely", {
        className: "toast-dark",
        bodyClassName: "toast-body",
        progressClassName: "toast-progress"
      });
    }
  }
  
  const handleLogin = async (e)=>{
    e.preventDefault()
    if(userData.email && userData.password){
      //api call
      try{
        const result = await loginAPI(userData)
        console.log(result);
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          toast.success(`Welcome ${result.data.user.username}..`, {
            className: "toast-dark",
            bodyClassName: "toast-body",
            progressClassName: "toast-progress"
          });
          setTimeout(()=>{
            setUserData({
              username:"",email:"",password:""
            })
            navigate('/dashboard')},3000)
        }else{
          if(result.status==404){
            toast.success(result.response.data, {
              className: "toast-dark",
              bodyClassName: "toast-body",
              progressClassName: "toast-progress"
            });
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      toast.success("Please fill the form completely", {
        className: "toast-dark",
        bodyClassName: "toast-body",
        progressClassName: "toast-progress"
      });
    }
  }


  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-sm:mt-16 mt-28">
        <div className="w-96 max-sm:w-75 drop-shadow-2xl bg-white px-7 py-10 rounded-3xl">
          <form>
            <h4 className="text-2xl mb-7">
              {insideRegister ? "Register" : "Login"}
            </h4>
            {insideRegister && (
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                autoComplete="off"
              />
            )}
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              autoComplete="off"
            />
            <div className="flex items-center bg-transparent border-[1.5px] px-5 py-3 rounded mb-4">
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full text-sm bg-transparent rounded outline-none"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                autoComplete="off"
              />
              {isShowPassword ? (
                <FaRegEye
                  aixe={22}
                  className="text-[#000000] cursor-pointer"
                  onClick={() => toggleShowPassword()}
                />
              ) : (
                <FaRegEyeSlash
                  aixe={22}
                  className="text-slate-400 cursor-pointer"
                  onClick={() => toggleShowPassword()}
                />
              )}
            </div>
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            {insideRegister ? (
              <div>
                <button
                  type="button"
                  className="w-full text-sm bg-gray-800 text-white p-2 rounded my-1 hover:bg-black cursor-pointer"
                  // onTouchStart={handleRegister}
                  onClick={handleRegister}
                >
                  Register
                </button>
                <p className="text-sm text-center mt-4"> 
                  Already registered ? <br />
                  <Link
                    to="/login"
                    className="font-medium text-primary underline"
                  >
                    Login to account
                  </Link>
                </p>
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  className="w-full text-sm bg-[#434446] text-white p-2 rounded my-1 hover:bg-black cursor-pointer"
                  // onTouchStart={handleLogin}
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="text-sm text-center mt-4">
                  Not registered yet? <br />
                  <Link
                    to="/signup"
                    className="font-medium text-primary underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </>
  );
};

export default Login;
