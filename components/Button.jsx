


const Button = ({ label, className, onClick, href }) => {
    return (
        <button
            className={`${className} rounded-lg py-2 px-6`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
export default Button
