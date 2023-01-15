import { Typography, Box } from "@mui/material"
import { IModal } from "../interfaces/iModal";



const ModalPage: React.FC<IModal> = ({ element }) => {
    const { id, color, name, year, pantone_value } = element

    return (<Box sx={{
        width: "300px",
        height: "300px",
        backgroundColor: `${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "5px",
        borderRadius: "8px",
        boxShadow: `0px 0px 29px 11px ${color}`,
    }}><Typography>{id}</Typography>
        <Typography>{color}</Typography>
        <Typography>{name}</Typography>
        <Typography>{year}</Typography>
        <Typography>{pantone_value}</Typography>
    </Box>)
}
export default ModalPage