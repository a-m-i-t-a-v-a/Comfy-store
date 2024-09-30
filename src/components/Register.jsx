/* eslint-disable react-refresh/only-export-components */
import { Form, Link, redirect } from "react-router-dom"
import FormInput from "./UI/FormInput"
import SubmitBtn from "./UI/SubmitBtn"
import { customFetch } from "../utils/helper";
import { toast } from "react-toastify";

export const registerAction=async({request})=>{
  const formData=await request.formData();
  const data=Object.fromEntries(formData)
  try{
    const response=await customFetch.post('/auth/local/register',data);
    if (response.status === 200 || response.status === 201) {
      toast.success('Account created successfully');
      return redirect('/login');
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

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method='post' className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="username" defaultValue="James Bond"/>
        <FormInput type="email" label="Email" name="email" defaultValue="bond007@gmail.com"/>
        <FormInput type="password" label="Password" name="password"/>
        <div className="mt-4">
          <SubmitBtn text="register"/>
        </div>
        <p className="text-center">
            Already a member? <Link to='/login' className="ml-2 link link-hover link-primary capitalize">Login here</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
