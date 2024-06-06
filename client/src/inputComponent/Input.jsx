
import propTypes from "prop-types"

const Input = ({ type, placeholder, className, name, register, onchange }) => {
    return (
        <div className=" pb-5">
            <input {...register} name={name} onChange={onchange} type={type} placeholder={placeholder} className={` outline-none mt-1 w-full p-1  bg-transparent border-b border-teal-500 ${className}`} />
            
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
    onchange: propTypes.func,
}
