import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../authProvider/AuthProvider";

const Register = () => {
    const {createUser}=useContext(authContext)
    const handlerRegister=(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        createUser(email,password)
        .then(result=>{
            console.log(result.user.metadata.creationTime
            )
            const creationTime=result.user?.metadata?.creationTime
            const user={email,creationTime}
            fetch("http://localhost:5000/user",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        })
        .catch(error=>{
            console.log(error)
        })
        console.log(email, password)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlerRegister} className="card-body">
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
                               
                            </div>
                            <div className=" mt-6">
                                <button className="btn btn-primary w-full">Register</button>
                            </div>
                            <div>
                            <p>Are have Already accound? <Link to="/login">Login now</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;