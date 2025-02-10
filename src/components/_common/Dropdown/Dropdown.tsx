import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Props {
  label: string;
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

const Dropdown = ({ label, items, selectedItem, setSelectedItem }: Props) => {
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedItem}
        label={label}
        onChange={e => setSelectedItem(e.target.value)}
      >
        {items.map(item => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
