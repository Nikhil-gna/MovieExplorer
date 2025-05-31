import React from "react";

interface Props {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
}

export const SearchBar: React.FC<Props> = ({ value, onChange, placeholder }) => (
    <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border p-2 rounded-xl shadow"
    />
);