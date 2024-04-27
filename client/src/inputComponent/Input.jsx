
import propTypes from "prop-types"

const Input = ({ type, placeholder, className, name, register, error }) => {
    return (
        <div className=" pb-5">
            <input {...register} name={name} type={type} placeholder={placeholder} className={` outline-none mt-1 w-full p-1  bg-transparent border-b border-teal-500 ${className}`} />
            {error && <small className=" text-rose-500">{error.message}</small>}
        </div>
    );
}

export default Input;

Input.propTypes = {
    type: propTypes.string,
    placeholder: propTypes.string,
    className: propTypes.string,
    name: propTypes.string,
    register: propTypes.object,
    error: propTypes.object
}
