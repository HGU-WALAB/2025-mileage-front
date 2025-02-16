import { Size } from '@/types/style';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  // TODO: 제너릭으로 확장 가능
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  size?: Exclude<Size, 'large'>;
  width?: string;
}

const Dropdown = ({
  label,
  items,
  selectedItem,
  setSelectedItem,
  size = 'small',
  width,
  ...props
}: Props) => {
  return (
    <FormControl sx={{ minWidth: 120, width, ...props }} size={size}>
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedItem}
        label={label}
        onChange={e => setSelectedItem(e.target.value)}
      >
        {items.map((item, index) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
