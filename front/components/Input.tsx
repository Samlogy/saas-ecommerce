
// import Link from 'next/link'

interface IInput {
    type: string,
    placeholder:  string,
    isDisabled?: boolean,
    name?: string,
    value: string,
    label?: string
}

// input types:
// telephone - number - text - password

const Input = ({ type, placeholder, label, isDisabled, name, value }: IInput) => {

    return (        
        <div className="relative">
            <label htmlFor={name} className="text-gray-700">
                {label && label}
            </label>
            <input type={type? type : "text"} disabled={isDisabled? isDisabled : isDisabled} placeholder={placeholder} name={name} value={value} id={name} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
        </div>
    )
}


export default Input;