import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo"
import "./Form.css"

const Login =({submitForm})=>{
    const {handleChange,handleSubmit,values,errors,setIsAuthentication}=useForm(
        submitForm,validateInfo

    );
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create your account by filling out the information below.</h1>
                <div className="form-inputs">
                    <label htmlFor={"username"} className={"form-label"}>
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor={"email"} className={"form-label"}>
                        E-mail
                    </label>
                    <input
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        className={"form-input"}
                        placeholder={"Enter your email"}
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}

                </div>
                <div className="form-inputs">
                    <label htmlFor={"password"} className={"form-label"}>
                        Password
                    </label>
                    <input
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        className={"form-input"}
                        placeholder={"Enter your password"}
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor={"password"} className={"form-label"}>
                        Confirm  Password
                    </label>
                    <input
                        id={"password2"}
                        type={"password"}
                        name={"password2"}
                        className={"form-input"}
                        placeholder={"Enter your password"}
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button  className={"form-input-btn"} type={"submit"}>S??gn In</button>
                <span className={"form-input-login"}>
                    Already have an acoount ? Login <a href={"#"}>Here</a>
                </span>
            </form>
        </div>
    )
}
export  default Login;