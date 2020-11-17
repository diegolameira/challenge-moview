import * as React from 'react';

interface SelectProps {
  options: string[];
  onChange: (e: any) => void;
}
export const Select: React.FC<SelectProps> = ({ options, onChange }) => (
  <select onChange={onChange}>{options.sort().map(toOption)}</select>
);

const toOption = (label: string) => (
  <option key={label} value={label}>
    {label}
  </option>
);
