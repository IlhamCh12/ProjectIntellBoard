import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

import axios from '../../axios';

let currentID=null;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





export default function BasicTable() {
  let state ={
    eco : false,
    inf : false,
    soc : false,
    cult : false,
    qual : false,
    prod : false,
    env : false,
    
  };
  const [Modif, setModif]= useState([]);
  const [Inscrits, getDemande]=useState([]);

  useEffect(() => { 
    async function fetchDemande(){
      const req= await axios.get('Utilisateurs/Inscrits');
      getDemande(req.data);
    }
   
    fetchDemande();
  }, []);

//-------------------------------------------Events  Component-------------------------------------------

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openD, setOpenD] = React.useState(false);
    const [checked, setChecked] = React.useState(true);

    const handleClickOpen = (id) => {
        setOpen(true);
        currentID=id;
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleClickOpenD = (id) => {
        setOpenD(true);
        currentID=id;
    };
    
    const handleCloseD = () => {
        setOpenD(false);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

//-------------------------------------------Backend Operations-------------------------------------------

  const deleteUser = (id) => {
    
     axios.delete('http://localhost:5000/Utilisateurs/Supprimer/'+id);
    window.location.replace("http://localhost:3000/BackOffice");

  };

  const updateUser = (id, checkD) => {

    
    axios.put('http://localhost:5000/Utilisateurs/Valider/'+id,{axes:checkD, valide: true});
    window.location.replace("http://localhost:3000/BackOffice");
   

 };

 //------------------------------------------- Verif CheckBox --------------------------------------------
  const contUp=(e)=>{
    let checkData = [];
    for(var key in state)
    {
      if(state[key]===true)
      {
        checkData.push(key);
      }
    }
    updateUser(currentID,checkData);
    e.preventDefault();


  };
 
//-------------------------------------CheckBox-----------------------------------------
 const onChangeEnv=()=>{
   
      state.env = !state.env;
     
 };
 const onChangeSoc=()=>{
   
  state.soc = !state.soc;
 
};
const onChangeInf=()=>{
   
  state.inf = !state.inf;
  
};
const onChangeCult=()=>{
   
  state.cult = !state.cult;

};
const onChangeQual=()=>{
   
  state.qual = !state.qual;
  
};
const onChangeProd=()=>{
   
  state.prod = !state.prod;
  
};
const onChangeEco=()=>{
   
  state.eco = !state.eco;
};

  return (
    <Container fixed style={{'marginTop': 45+'px', 'marginBottom': 45+'px'}}>
    <h4 style={{fontFamily:'Tw Cen MT'}}>Demande d'inscription</h4>
    <br></br>
    {/*-----------------------------------Tableau des utilisateurs ---------------------------------- */}
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Email</b></TableCell>
            <TableCell align="right"><b>Nom</b></TableCell>
            <TableCell align="right"><b>Prenom</b></TableCell>
            <TableCell align="right"><b>Statut</b></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Inscrits.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.nom}</TableCell>
              <TableCell align="right">{row.prenom}</TableCell>
              <TableCell align="right">{row.statut}</TableCell>
              <TableCell align="right">
                            <IconButton style={{ color: '#2DA62B' }} aria-label="accept" onClick={()=>handleClickOpen(row._id)}>
                            <CheckIcon/>
                            </IconButton>
                            <IconButton aria-label="delete" style={{ color: '#E6574E'}} onClick={()=>handleClickOpenD(row._id)}>  
                            <DeleteIcon />
                            </IconButton>
                            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

{/*-----------------------------------Affectation des axes à un utilisateur---------------------------------- */}

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <form action="/Utilisateurs/Modifier" method="post" onSubmit={contUp} >

        <DialogTitle id="form-dialog-title">Axes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            les axes que l'utilisateur peut consulter :
            <FormGroup>
            <FormControlLabel control={<Checkbox  style={{ color: '#FED53B'}} name="checkedEc" value="eco" onChange={onChangeEco}  />} label="Economique" />
            <FormControlLabel control={<Checkbox style={{ color: '#6DC29B'}} name="checkedEn" value="env" onChange={onChangeEnv} />} label="Enviromental" />
            <FormControlLabel control={<Checkbox style={{ color: '#288CC0'}} name="checkedIn" value="info" onChange={onChangeInf} />} label="Informatique / Digital" />
            <FormControlLabel control={<Checkbox  style={{ color: '#EF7F8F'}} name="checkedSoc" value="soc" onChange={onChangeSoc}  />} label="sociale" />
            <FormControlLabel control={<Checkbox  style={{ color: '#DF2C4A'}} name="checkedPr" value="pro" onChange={onChangeProd} />} label="Productivité" />
            <FormControlLabel control={<Checkbox style={{ color: '#896DC1'}} name="checkedCu" value="cult" onChange={onChangeCult} />} label="Culturel" />
            <FormControlLabel control={<Checkbox style={{ color: '#FF8C5D'}} name="checkedQu" value="qual" onChange={onChangeQual}  />} label="Qualité" />
            </FormGroup>
           
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            Sauvgarder
          </Button>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
        </DialogActions>
        </form>
      </Dialog>

{/*-----------------------------------Refuser l'inscription d'un utilisateur---------------------------------- */}

      <Dialog
        open={openD}
        onClose={handleCloseD}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Refus d'inscription "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Est ce que vous voulez vraiment refuser cette inscription ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>deleteUser(currentID)} color="primary">
           Oui
          </Button>
          <Button  color="primary" onClick= {handleCloseD} autoFocus>
            Non
          </Button>
        </DialogActions>
      </Dialog>
      <br></br>
      <h4 style={{fontFamily:'Tw Cen MT'}}>Les utilisateurs</h4>
    <br></br>
   
      <TableUser></TableUser>
  
    </Container>
  );
}
