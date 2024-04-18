
import propTypes from "prop-types"

const Input = ({ type, placeholder, className }) => {
    return (
        <div className=" pb-5">
            <input type={type} placeholder={placeholder} className={` outline-none mt-1 w-full p-1  bg-transparent border-b border-teal-500 ${className}`} />
        </div>
    );
}

export default Input;

Input.propTypes = {
    type: propTypes.string,
    placeholder: propTypes.string,
    className: propTypes.string
}
