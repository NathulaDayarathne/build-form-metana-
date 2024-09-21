import React from 'react'

type Props={
    label:string;
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder:string;
}

export default function TextInputField({label,onChange,placeholder,value}:Props) {
  return (
    <span className="flex flex-col gap-y-1.5 my-4">
        <label className="block text-sm text-gray-600">{label}</label>
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
    </span>
    
  )
}
