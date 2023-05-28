import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({
  name,
  lable,
  data,
  selectedValue,
  handleInputChange,
}) {
  const [value, setValue] = React.useState(selectedValue || "");

  const handleChange = (event) => {
    setValue(event.target.value);
    handleInputChange(event);
  };
  if (!data || !data.textSelector || !data.obj || !data.obj.length) return null;
  return (
    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
      {lable && <InputLabel id={`select-lable-${lable}`}>{lable}</InputLabel>}
      <Select
        labelId={`select-lable-${lable}`}
        value={value}
        label={lable}
        name={name}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="">
          <em>Select {lable}</em>
        </MenuItem>
        {data.obj.map((item) => (
          <MenuItem value={item[data.valueSelecter]}>
            {item[data.textSelector]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
