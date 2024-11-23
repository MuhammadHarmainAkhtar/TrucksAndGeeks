const Button = (props) => {
    return (
        <button
            className={`bg-red-600 text-white text-sm font-medium py-[0.8rem] px-4 rounded 
            ${props.width ? 'w-full' : 'sm:w-max'} 
            ${props.borderWhite ? 'border border-white' : ''} 
            transform transition uppercase 
            border rounded-[50px] border-transparent hover:bg-transparent hover:text-red-600 
            hover:border-red-600 duration-300`}
        >
            {props.text}
        </button>
    );
};

export default Button;
