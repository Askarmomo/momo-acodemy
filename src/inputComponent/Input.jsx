
import propTypes from "prop-types"

const Input = ({ type, placeholder }) => {
    return (
        <div className=" pb-5">
            <input type={type} placeholder={placeholder} className="  outline-none mt-1 w-full p-1  bg-transparent border-b border-teal-500" />
        </div>
    );
}

export default Input;
