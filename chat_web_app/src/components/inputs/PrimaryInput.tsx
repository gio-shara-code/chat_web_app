import React from 'react'

interface Props {
    value: string
    type: string
    onChange(e: any): void
}

const PrimaryButton: React.FC<Props> = ({ onChange, value, type }) => {
    return <input required className="border-2 border-black py-1 pl-2" type={type} value={value} onChange={onChange} />
}

export default PrimaryButton
