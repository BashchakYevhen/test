import React from "react";
import { TextField } from "@mui/material"
interface IFilter {
    onChange: Function
}

const FilterInput: React.FC<IFilter> = ({ onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = (e.target.value).toString();
        onChange(id)
    }

    return (<TextField onChange={handleChange} type={"number"}
        name={"filter"} placeholder={"filter by ID"} />)
}
export default FilterInput