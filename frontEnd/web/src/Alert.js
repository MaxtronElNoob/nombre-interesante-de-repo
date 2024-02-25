import * as React from "react";
import {DialogTitle,Dialog,Button} from "@mui/material";

export default function Alert18() {
    const [openDialog, handleDisplay] = React.useState(true);
    const handleClose = () => {handleDisplay(false);};
    return(
        <>
            <Dialog open = {openDialog}>
                <DialogTitle> ¿Eres mayor de 18 años? </DialogTitle>
                <Button onClick={handleClose}>Si</Button>
                <Button href="https://www.google.com/">No</Button>
            </Dialog>
        </>)
    
}