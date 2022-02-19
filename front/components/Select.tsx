
// import Link from 'next/link'

interface IInput {
    placeholder:  string,
    isDisabled?: boolean,
    name?: string,
    options: any
}


const Select = ({ placeholder, isDisabled, name, options }: IInput) => {
    
    return (        
        <select disabled={isDisabled? isDisabled : isDisabled} name={name} 
            className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">

            <option value="">
                {placeholder}
            </option>

            { options?.map((item: any) => {
                <option value={item}>
                    {item}
                </option>
             })
            }
        </select>
    )
}


export default Select;