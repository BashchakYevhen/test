import { List, ListItem, ListItemButton, ListItemText, Modal, Box } from "@mui/material";
import React from "react";
import { useAppSelector } from "../redux/hooks";
import ModalPage from "./Modal";

const ColorList: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [elementToModal, setElementToModal] = React.useState({})
    const handleOpen = (e: object) => {
        setOpen(true);
        setElementToModal(e)
    };
    const handleClose = () => {
        setOpen(false);
        setElementToModal({})
    };

    const { product } = useAppSelector(state => state.product)
    const listItem = Array.isArray(product) ? product : [product]

    return (
        <>  <List sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
        }}>
            {(listItem.map(e => (
                <ListItem key={e.id} sx={{
                    borderRadius: "8px",
                    bgcolor: `${e.color}`,
                    width: "200px",
                    height: "200px",
                    m: "5px"
                }}>
                    <ListItemButton onClick={() => handleOpen(e)} sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}>
                        <ListItemText>{e.id}</ListItemText>
                        <ListItemText>{e.name}</ListItemText>
                        <ListItemText>{e.year}</ListItemText>
                    </ListItemButton>
                </ListItem>)))}
        </List>
            <Modal onClose={handleClose} open={open} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box
                ><ModalPage element={elementToModal} /></Box>
            </Modal></>
    )
};

export default ColorList

