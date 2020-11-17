import * as React from 'react';

import styles from 'index.module.scss';

interface SelectProps {
  options: string[];
  onChange: (e: any) => void;
}
export const Select: React.FC<SelectProps> = ({ options, onChange }) => (
  <select className={styles.select} onChange={onChange}>
    {options.sort().map(toOption)}
  </select>
);

const toOption = (label: string) => (
  <option key={label} value={label}>
    {label}
  </option>
);
