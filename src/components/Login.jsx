/* eslint-disable react-refresh/only-export-components */
import { Form, Link, redirect, useNavigate } from "react-router-dom"
import FormInput from "./UI/FormInput"
import SubmitBtn from "./UI/SubmitBtn"
import { customFetch } from "../utils/helper";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const loginAction=(store)=>async({request})=>{
  const formData=await request.formData();
  const data=Object.fromEntries(formData)
  try{
    const response=await customFetch.post('/auth/local',data);
    store.dispatch(loginUser(response.data))
    if (response.status === 200 || response.status === 201) {
      toast.success('Logged in successfully');
      return redirect('/');
    } else {
      // Handle any non-success response codes
      const errMsg = response.data?.error?.message || 'Unexpected error occurred';
      toast.error(errMsg);
    }
  }catch(err){
    const errMsg=err?.response?.data?.error?.message || 'please check your creds'
    toast.error(errMsg)
  }
  return null
}

const Login = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const loginAsGuestUser=async()=>{
    try{
      const response=await customFetch.post('/auth/local',{
        identifier:'test@test.com',
        password:'secret'
      });
      dispatch(loginUser(response.data))
      toast.success('Welcome Guest')
      navigate('/')
    }catch(err){
      console.log(err)
      toast.error('huest user login error.please try again')
    }
  }

  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="email" name="identifier"/>
        <FormInput type="password" label="password" name="password"/>
        <div className="mt-4">
          <SubmitBtn text="login"/>
        </div>
        <button type="button" className="btn btn-secondary btn-block" onClick={loginAsGuestUser}>
            Guest User
          </button>
          <p className="text-center">
            Not a member yet? <Link to='/register' className="ml-2 link link-hover link-primary capitalize">Register here</Link>
          </p>
      </Form>
    </section>
  )
}

export default Login
