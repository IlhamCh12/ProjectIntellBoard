
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from '../../axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import EditIcon from '@material-ui/icons/Edit';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { frFR } from '@material-ui/core/locale';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// ------------------ cette table contient les utilisateurs qui sont deja validés par l'admin----------------------

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, frFR);

const useStyles3 = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },},
appBar: {
  position: 'relative',
},
title: {
  marginLeft: theme.spacing(2),
  flex: 1,
},
}));

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {

  

  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  
  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="page precedente">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="page suivante"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="derniere page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}


TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};



const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});
let currentID=null;

export default function CustomPaginationActionsTable() {
  const [Users, getUsers]=useState([]);
  let ax = [];
  const [User, getUser]=useState([]);
  useEffect(() => { 
    async function fetchData(){
      const req= await axios.get('http://localhost:5000/Utilisateurs');
      getUsers(req.data);
    }
    fetchData();
  }, []);

  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    currentID=id;  
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    eco : false,
    inf : false,
    soc : false,
    cult : false,
    qual : false,
    prod : false,
    env : false,
    
  });
  
  const [stateN, setStateN] = React.useState({
    
    nom: ""
  });
  const [stateP, setStateP] = React.useState({
    
    prenom : "",
   
  });
  const [stateS, setStateS] = React.useState({
   
    statut: "",
    
  });

  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, Users.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteUser = (id) => {
    
    axios.delete('http://localhost:5000/Utilisateurs/Supprimer/'+id);
   window.location.replace("http://localhost:3000/BackOffice");

 };

const  fetchUser= async (id)=>{
  
  const req= await axios.get('/Utilisateurs/'+id);
  getUser(req.data);
  ax=req.data.axes;
  let Soc, Ec,In,Qu,Pr,En,Cl;
   if(ax.includes('soc')){Soc = true;}
   if(ax.includes('eco')){ Ec = true;}
   if(ax.includes('inf')){ In= true;}
   if(ax.includes('qual')){ Qu=true;}
   if(ax.includes('prod')){Pr=true;}
   if(ax.includes('env')){En=true;}
   if(ax.includes('cult')){Cl=true;}
   setState({ soc: Soc,
    eco : Ec,
    inf:In,
    qual:Qu,
    prod:Pr,
    cult:Cl,
    env:En,
  

   });
   setStateN({ 
    nom : req.data.nom,
  

   });
   setStateP({ 
    prenom : req.data.prenom,
    

   });
   setStateS({ 
    statut : req.data.statut,

   });
};

 const classes3 = useStyles3();
 const [open3, setOpen3] = React.useState(false);

 

 const handleClickOpen3 = (id) => {
   setOpen3(true);
   fetchUser(id);
   currentID=id;
  
 };

 const handleClose3 = () => {
   setOpen3(false);
   document.location.reload();
 };

 

 const handleChange3 = (event) => {
   setState({ ...state, [event.target.name]: event.target.checked });
 };
  //------------------------------------------- Verif CheckBox --------------------------------------------
 
  const updateUser = (id, checkD) => {
    axios.put('http://localhost:5000/Utilisateurs/Modifier/'+id,{axes:checkD, nom:stateN.nom, prenom:stateP.prenom, statut: stateS.statut});
    window.location.replace("http://localhost:3000/BackOffice");
   
  
  };
  const contUp=(e)=>{
    let checkData = [];
    for(var key in state)
    {
      if(state[key]===true)
      {
        checkData.push(key);
        console.log(key);
      }
    }
    updateUser(currentID,checkData);
    e.preventDefault();


  };
   const onChangeNom= (value)=>{
    setStateN({nom : value});
   };
   const onChangePrenom= (value)=>{
    setStateP({prenom : value});
  };
  const onChangeStatut= (value)=>{
    setStateS({statut : value});
  };
 
  return (
    <div>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? Users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : Users
          ).map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.statut}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">        
                <IconButton style={{ color: '#9107E6' }} aria-label="accept" onClick={()=>handleClickOpen3(row._id)}>
                <EditIcon/>
                </IconButton>    
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
              <IconButton aria-label="delete" style={{ color: '#E6574E'}} onClick={()=>handleClickOpen(row._id)}>  
                <DeleteIcon />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>

          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={Users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'lignes par page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{"Suppression de l'utilisateur "}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Est ce que vous voulez vraiment supprimer cet utilisateur ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>deleteUser(currentID)} color="primary">
       Oui
      </Button>
      <Button onClick={handleClose} color="primary" autoFocus>
        Non
      </Button>
    </DialogActions>
  </Dialog>
  

  <ThemeProvider theme={theme}>
    <div>
     
      <Dialog fullScreen open={open3} onClose={handleClose3} TransitionComponent={Transition}>
      <form action="/Utilisateurs/Modifier" method="post" onSubmit={contUp} >
        <AppBar className={classes3.appBar} style={{backgroundColor:'#FED53B'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose3} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes3.title} style={{fontFamily:'Tw Cen MT'}}>
              Modification
            </Typography>
            <Button autoFocus color="inherit" type="submit" style={{fontFamily:'Tw Cen MT'}}>
              sauvgarder
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes3.root} style={{'margin': 10+'%'}}>
      <Paper elevation={4} style={{'width': 50+'%', 'height': 'auto'}}>
      <FormGroup row = 'true'  style={{'margin': 20+'px'}}>
      <TextField
            autoFocus style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            margin="dense"
            id="email"
            type="email"
            fullWidth
            disabled
            value={User._id}
          />
           <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            autoFocus
            margin="dense"
            id="nom"
            type="text"
            onChange={e=> onChangeNom(e.target.value)}
            fullWidth
            value={stateN.nom}
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            autoFocus
            margin="dense"
            id="prenom"            
            type="text"
            fullWidth
            value={stateP.prenom}
            onChange={e=> onChangePrenom(e.target.value)}
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="statut"
            type="text"
            fullWidth
            value={stateS.statut}
            onChange={e=> onChangeStatut(e.target.value)}
          />
      </FormGroup>
      </Paper>
      <Paper elevation={3} style={{'width': 45+'%', 'height': 'auto'}}>
      <h5 style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}> Les axes qu'il peut consulter : </h5>
      <FormGroup   style={{'margin': 20+'px'}}>
            <FormControlLabel control={<Checkbox   checked={state.eco} onChange={handleChange3} style={{ color: '#FED53B'}} name="eco" />} label="Economique" />
            <FormControlLabel control={<Checkbox checked={state.env} onChange={handleChange3} style={{ color: '#6DC29B'}} name="env" />} label="Enviromental" />
            <FormControlLabel control={<Checkbox checked={state.inf} onChange={handleChange3} style={{ color: '#288CC0'}} name="inf" />} label="Informatique / Digital" />
            <FormControlLabel control={<Checkbox  checked={state.soc} onChange={handleChange3} style={{ color: '#EF7F8F'}} name="soc" />} label="sociale" />
            <FormControlLabel control={<Checkbox  checked={state.prod} onChange={handleChange3} style={{ color: '#DF2C4A'}} name="prod" />} label="Productivité" />
            <FormControlLabel control={<Checkbox checked={state.cult} onChange={handleChange3} style={{ color: '#896DC1'}} name="cult" />} label="Culturel" />
            <FormControlLabel control={<Checkbox checked={state.qual} onChange={handleChange3} style={{ color: '#FF8C5D'}} name="qual" />} label="Qualité" />
            </FormGroup>
      </Paper>
    </div>
    </form>

      </Dialog>
    </div>
    </ThemeProvider>

  </div>

  );
}