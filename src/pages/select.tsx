import { ChangeEvent } from 'react'

type OptionType = {
  value: string
  label: string
}

type SelectProps = {
  children?: React.ReactNode
  id: string
  name: string
  defaultValue: string
  options: readonly OptionType[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({
  id,
  defaultValue,
  onChange,
  options
}: SelectProps) => {
  return (
    <select
      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      name={id}
      id={id}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
