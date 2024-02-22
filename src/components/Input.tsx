type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Input = ({ value, onChange, placeholder }: Props) => {
  return <input value={value} onChange={onChange} placeholder={placeholder} />
}

export default Input
