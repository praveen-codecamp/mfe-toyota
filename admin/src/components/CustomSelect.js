import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import palette from "../../../shared/theme/palette";

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
      <Select
        labelId={`select-lable-${lable}`}
        value={value}
        name={name}
        onChange={handleChange}
        displayEmpty
        fullWidth
      >
        <MenuItem value="">
          <span style={{ color: palette.grey.light }}>Select {lable}</span>
        </MenuItem>
        {data.obj.map((item, i) => (
          <MenuItem key={i} value={item[data.valueSelecter]}>
            {item[data.textSelector]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
