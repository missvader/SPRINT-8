export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired=false,
  placeholder,
}){
  return(
        <div>
        <label htmlFor={labelFor} className="block mb-2 text-sm font-medium text-gray-200 ">
          {labelText}
        </label>
        <input 
          type={type} 
          name={name} 
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
          placeholder={placeholder} 
          required={isRequired}
        />
        </div>
  )
}