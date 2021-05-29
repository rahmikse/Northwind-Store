import {useState, useEffect} from "react";
import {Link, Route, useHistory} from "react-router-dom"
import DashBord from "../root/DashBord";
 const useForm = (callback,validate) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })
    const [errors, setErrors] = useState({});
    const [isSubmit,setIsSubmit]=useState(false)
     const [auth,setIsAuth]=useState(false)


    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
     let history = useHistory();
    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true)

    }
    const setIsAuthentication=()=>{
        if(setIsSubmit(true)){
            setIsAuth(
                history.push("/product")
            )
        }

    }
     useEffect(
         () => {
             if (Object.keys(errors).length === 0 && isSubmit) {
                 callback();
             }
         },
         [errors]
     );

     return {handleChange,values,handleSubmit,errors,setIsAuthentication}
};
export default useForm