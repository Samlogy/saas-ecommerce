
// import Link from 'next/link'

interface IInput {
    placeholder:  string,
    isDisabled?: boolean,
    name?: string
}

// input types:
// telephone - number - text - password

const Text = ({ placeholder, isDisabled, name }: IInput) => {

    return (        
    <label className="text-gray-700" htmlFor={name}>
        <textarea placeholder={placeholder} name={name} disabled={isDisabled? isDisabled : isDisabled} rows={5} cols={40} className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id={name}>
        </textarea>
    </label>
    )
}


export default Text;