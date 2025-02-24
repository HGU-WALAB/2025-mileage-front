import { Size } from '@/types/style';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from '@mui/material';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  // TODO: 제너릭으로 확장 가능
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  size?: Exclude<Size, 'large'>;
  width?: string;
  disabled?: boolean;
}

const Dropdown = ({
  label,
  items,
  selectedItem,
  setSelectedItem,
  size = 'small',
  width,
  disabled,
  ...props
}: Props) => {
  const theme = useTheme();
  return (
    <FormControl sx={{ minWidth: 120, width, ...props }} size={size}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedItem}
        label={label}
        onChange={e => setSelectedItem(e.target.value)}
        style={{ backgroundColor: theme.palette.variant.default }}
        disabled={disabled}
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
