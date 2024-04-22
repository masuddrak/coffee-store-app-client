
import { Link } from "react-router-dom";
import { authContext } from "../authProvider/AuthProvider";
import { useContext } from "react";

const Login = () => {
    const { loginUser } = useContext(authContext)
    const handelLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        loginUser(email, password)
            .then(resut => {
                const lastSignInTime=resut.user?.metadata?.lastSignInTime
                const user={email,lastSignInTime}
                fetch("http://localhost:5000/user",{
                    method:"PATCH",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
                console.log(resut.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div >
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input w-full input-bordered" required />
                            </div>
                            <div >
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className=" mt-6">
                                <button className="btn btn-primary w-full">Login</button>
                            </div>
                            <div>
                                <p>Are have New accound? <Link to="/register">Register now</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;