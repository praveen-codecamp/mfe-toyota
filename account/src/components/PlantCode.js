import React, {useState} from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Grid, Button, Box, List, ListItem } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const PlantCodeComponent = ({ rowData }) => {
    const [open, setOpen] = useState(false);
    const plantCodes = [
        '0 import',
        '1 import',
        '2 import'
    ]
    const initialPlantList = ['0 import', '1 import']
    const [plantList, setPlantList] = useState(initialPlantList);
    const plantCode = rowData.plantCode;
    const [inputFieldValue, setInputFieldValue] = useState('');
    const handlePlant = () => {
        console.log('hello', plantCode);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSave = () => {
        setOpen(false),
            console.log('Saved the data');
    }
    const handleRemoveItem = (index) =>{
        const rows = [...plantList];
        rows.splice(index,1);
        setPlantList(rows)
    }

    const handleAddItem = () => {
        const item = plantList.concat(inputFieldValue);
        setPlantList(item)
        setInputFieldValue('')
    }


    return <Grid container alignItems={"center"} sx={{ width: "100px", display: rowData.plantCode ? '' : 'none' }}>
        <Grid item sm={6}>{plantCode}</Grid>
        <Grid item>
            <IconButton aria-label="plantCode" onClick={handlePlant}>
                <MoreHorizIcon />
            </IconButton>
        </Grid>

        <Dialog
            maxWidth="xs"
            open={open}
            onClose={handleClose}
        >
            <DialogTitle
                sx={{ background: 'red', color: '#fff', padding: '10px' }}
            >Modal Wise Plant Info
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 3,
                    }}
                >
                    <ClearIcon sx={{ color: '#fff' }} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    
                    <Box sx={{
                        margin:'5px 0'
                    }}>Modal/Sfx : {rowData.model}</Box>
                    
      <Stack sx={{ mb: 1 }} direction="row" spacing={2}>
                    {/* <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={plantCodes}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Plant" value={inputField}/>}
                    /> */}
                    <TextField value={inputFieldValue} onChange={(e)=>setInputFieldValue(e.target.value)} />
                    <Button variant="outlined" onClick={handleAddItem}>Add</Button>
                    </Stack>
                    <List>
                        {plantList.map((item)=>{
                        return <ListItem sx={{borderBottom:"1px solid #333"}}>{item} <Button onClick={handleRemoveItem}>Remove</Button></ListItem>
                        })}
                    </List>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>

    </Grid>
}

export default PlantCodeComponent;