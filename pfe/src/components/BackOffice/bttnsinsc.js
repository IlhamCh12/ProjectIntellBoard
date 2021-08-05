import axios from 'axios';
import React from 'react';
import cors from 'cors';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TableUser from './tableUser';
import UtilisateurListe from '../../api/utilisateurs.js';


export default function Btns ()
{
    const [open, setOpen] = React.useState(false);
    const [openD, setOpenD] = React.useState(false);
    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };
    const handleClickOpenD = () => {
        setOpenD(true);
        };
    
        const handleCloseD = () => {
        setOpenD(false);
    };
const [checked, setChecked] = React.useState(true);

const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <TableCell align="right">
    <IconButton style={{ color: '#2DA62B' }} aria-label="accept" >
    <CheckIcon/>
    </IconButton>
    <IconButton aria-label="delete" style={{ color: '#E6574E'}} >  
    <DeleteIcon />
    </IconButton>
  </TableCell>
  )

}