import { Form, Link } from "react-router-dom"
import FormInput from "./UI/FormInput"
import SubmitBtn from "./UI/SubmitBtn"

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method='post' className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="username"/>
        <FormInput type="email" label="Email" name="identifier"/>
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
