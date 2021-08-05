import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { frFR } from '@material-ui/core/locale';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const theme = createMuiTheme({
    palette: {
      primary: { main: '#1976d2' },
    },
  }, frFR);


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

    //---------------------------------Pagination du Tableau------------------------------------
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
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

function createData(nom, email, sexe, age, contrat, statut, tmps, acc) {
  return { nom, email, sexe, age, contrat, statut, tmps, acc };
}

 //---------------------------------Données des employés------------------------------------

const rows = [
    createData('Brett Macek', 'brettmacek@company.com', 'Homme', 51, 'CDD', 'Laboratory Technician', 'temps plein', 0),
    createData('Aaron Land', 'aaronland@company.com', 'Femme', 51, 'CDI', 'Healthcare Representative', 'temps plein', 0),
    createData('James Cook', 'jamescook@company.com', 'Homme', 30, 'CDD', 'Sales Executive', 'temps plein', 1),
    createData('Felicia Lindgren', 'felicialindgren@company.com', 'Femme',24, 'CDD',  'Manager', 'temps plein', 0),
    createData('Floyd Vanhorn', 'floydvanhorn@company.com', 'Homme', 22, 'CDI', 'Research Scientist', 'temps partiel', 0),
    createData('Floyd Vanhorn', 'floydvanhorn@company.com', 'Homme', 22, 'CDI', 'Research Scientist', 'temps partiel', 0),
    createData('Floyd Vanhorn', 'floydvanhorn@company.com', 'Homme', 22, 'CDI', 'Research Scientist', 'temps partiel', 0),
    createData('Floyd Vanhorn', 'floydvanhorn@company.com', 'Homme', 22, 'CDI', 'Research Scientist', 'temps partiel', 0),

].sort((a, b) => (a.calories < b.calories ? -1 : 1));

//---------------------------------Style------------------------------------

const useStyles3 = makeStyles({
    root: {
        justifyContent:'center',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(6),
          height: theme.spacing(6),
        },
    },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
});

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  
  contE: {
    flex: 1,
    margin: 50,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
  },
  button:{
    marginBottom: 30,
    float:'right',
    backgroundColor:"#6DC29B"
  },
});

//---------------------------------Evenement des boutons------------------------------------

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const classes3 = useStyles3();
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [openM, setOpenM] = React.useState(false);

  const handleClickOpenM = () => {
    setOpenM(true);
  };
  const handleCloseM = () => {
    setOpenM(false);
  };

  const [openA, setOpenA] = React.useState(false);

  const handleClickOpenA = () => {
    setOpenA(true);
  };
  const handleCloseA = () => {
    setOpenA(false);
  };

  const [openD, setOpenD] = React.useState(false);

  const handleClickOpenD = () => {
    setOpenD(true);
  };
  const handleCloseD = () => {
    setOpenD(false);
  };


  const [openS, setOpenS] = React.useState(false);

  const handleClickOpenS = () => {
    setOpenS(true);
  };
 const handleCloseS = () => {
    setOpenS(false);

 };


  return (
    <div className={classes.contE}> 
{/*-------------------------------------Ajout employe bouton----------------------------------*/}
    <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddCircleIcon />}
        onClick={()=>handleClickOpenA()}
      >
        Ajouter un employé
      </Button>
{/*-------------------------------------Tableau des employes----------------------------------*/}

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <TableCell>Employés</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Sexe</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Contart</TableCell>
            <TableCell align="right">Statut</TableCell>
            <TableCell align="right">Temps en travail</TableCell>
            <TableCell align="right">Nombre d'accident</TableCell>
            <TableCell align="right">Modifier</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.nom}>
              <TableCell component="th" scope="row">
                {row.nom}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.sexe}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.age}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.contrat}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.statut}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.tmps}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.acc}
              </TableCell>

              <TableCell style={{ width: 160 }} align="right">
              <IconButton aria-label="Modifier" style={{ color: '#9107E6'}} onClick={()=>handleClickOpenM()}>  
                <EditIcon />
              </IconButton>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
              <IconButton aria-label="Detail" style={{ color: '#FF8C5D'}} onClick={()=>handleClickOpenD()}>  
                <InfoIcon />
              </IconButton>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
              <IconButton aria-label="delete" style={{ color: '#E6574E'}} onClick={()=>handleClickOpenS()}>  
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
        <TableFooter  >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
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

{/*-------------------------------------Supprimer employe ----------------------------------*/}

    <Dialog
    open={openS}
    onClose={handleCloseS}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{"Suppression de l'employé "}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Est ce que vous voulez vraiment supprimer cet employé ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button  color="primary">
       Oui
      </Button>
      <Button onClick={handleCloseS} color="primary" autoFocus>
        Non
      </Button>
    </DialogActions>
  </Dialog>

{/*-------------------------------------Modifier employe ----------------------------------*/}

  <ThemeProvider theme={theme}>
    <div>
     
      <Dialog fullScreen open={openM} onClose={handleCloseM} TransitionComponent={Transition}>
        <AppBar className={classes3.appBar} style={{backgroundColor:'#9107E6'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseM} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes3.title} style={{fontFamily:'Tw Cen MT'}}>
              Modification des données
            </Typography>
            <Button autoFocus color="inherit" style={{fontFamily:'Tw Cen MT'}}>
              Sauvgarder
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes3.root} style={{'margin': 4+'%'}}>
      <Paper elevation={4} style={{'width': 40+'%', 'height': 'auto'}}>
      <FormGroup row = 'true'  style={{'margin': 20+'px'}}>
      <TextField
             style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            margin="dense"
            id="email"
            label="Email	"
            type="email"
            fullWidth
            value="brettmacek@company.com"
          />
           <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            autoFocus
            margin="dense"
            id="nom"
            label="Nom "
            type="text"
            fullWidth
            value="Brett"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="prenom"
            label="Prénom"
            type="text"
            fullWidth
            value="Macek"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="statut"
            label="Statut	"
            type="text"
            fullWidth
            value="Laboratory Technician"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="contrat"
            label="Contrat"
            type="text"
            fullWidth
            value="CDD"
          /><TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="tempstravail"
            label="Temps travail	"
            type="text"
            fullWidth
            value="Temps plein"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="dateD"
            label="Date de départ"
            type="date"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Age"
            label="Age"
            type="text"
            fullWidth
            value="51"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Departement"
            label="Département"
            type="text"
            fullWidth
            value="Recherche et Développement"
          />
          
        </FormGroup>
</Paper>
           <Paper elevation={4} style={{'width': 40+'%', 'height': 'auto'}}>
      <FormGroup row = 'true'  style={{'margin': 20+'px'}}>
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Education"
            label="Education"
            type="text"
            fullWidth
            value="Bac+3"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Sexe"
            label="Sexe"
            type="text"
            fullWidth
            value="Homme"
            
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Grade"
            label="Grade"
            type="text"
            fullWidth
            value="2"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="etatcivil"
            label="Etat Civil"
            type="text"
            fullWidth
            value="Divorcé"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Salaire"
            label="Salaire ($)"
            type="text"
            fullWidth
            value="56750"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="nbrComp"
            label="Nombre de companies où a déjà travaillé"
            type="text"
            fullWidth
            value="5 "
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="HrTrav"
            label="Nombre d'heures de travail par jours"
            type="text"
            fullWidth
            value="8"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="nbr_acc"
            label="Nombre d'accidents de travail"
            type="text"
            fullWidth
            value="0"
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="ancient"
            label="Ancienneté"
            type="text"
            fullWidth
            value="4 ans "
          />
      </FormGroup>
      </Paper>
     
    </div>
      </Dialog>
    </div>
    </ThemeProvider>

{/*-------------------------------------Ajouter employe ----------------------------------*/}

    <ThemeProvider theme={theme}>
    <div>
     
      <Dialog fullScreen open={openA} onClose={handleCloseA} TransitionComponent={Transition}>
        <AppBar className={classes3.appBar} style={{backgroundColor:'#6DC29B'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseA} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes3.title} style={{fontFamily:'Tw Cen MT'}}>
              Ajouter un employé
            </Typography>
            <Button autoFocus color="inherit" style={{fontFamily:'Tw Cen MT'}}>
              Ajouter
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes3.root} style={{'margin': 4+'%'}}>
      <Paper elevation={4} style={{'width': 40+'%', 'height': 'auto'}}>
      <FormGroup row = 'true'  style={{'margin': 20+'px'}}>
      <TextField
             style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value=""
            autoFocus
          />
           <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="nom"
            label="Nom"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="prenom"
            label="Prenom"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="statut"
            label="Statut"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="contrat"
            label="contrat"
            type="text"
            fullWidth
            value=""
          /><TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="tempstravail"
            label="Temps Travail"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="dateD"
            label="Date départ"
            type="date"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Age"
            label="Age"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Departement"
            label="Departement"
            type="text"
            fullWidth
            value=""
          />

        </FormGroup>
</Paper>
           <Paper elevation={4} style={{'width': 40+'%', 'height': 'auto'}}>
      <FormGroup row = 'true'  style={{'margin': 20+'px'}}>
      <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Education"
            label="Education"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Sexe"
            label="Sexe"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Grade"
            label="Grade"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="etatcivil"
            label="Etat Civil"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="Salaire"
            label="Salaire"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="nbrComp"
            label="Nombre Companies dont a travaillé"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="HrTrav"
            label="Heures travailés par jour"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="nbr_acc"
            label="Nombre d'accidents de travail"
            type="text"
            fullWidth
            value=""
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            
            margin="dense"
            id="ancient"
            label="Ancienneté"
            type="text"
            fullWidth
            value=""
          />
      </FormGroup>
      </Paper>
     
    </div>
      </Dialog>
    </div>
    </ThemeProvider>

{/*-------------------------------------Details employe ----------------------------------*/}

    <ThemeProvider theme={theme}>
    <div>
     
      <Dialog fullScreen open={openD} onClose={handleCloseD} TransitionComponent={Transition}>
        <AppBar className={classes3.appBar} style={{backgroundColor:'#FF8C5D'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseD} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" className={classes3.title} style={{fontFamily:'Tw Cen MT'}}>
              Details d'employé
            </Typography>
            <Typography  variant="h5" style={{fontFamily:'Tw Cen MT'}}>
            Brett  Macek
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes3.root} style={{'margin': 4+'%'}}>
      <Paper elevation={4} style={{'width': 100+'%', 'height': 'auto'}}>
      <FormGroup row = 'true'  style={{'margin': 20+'px'}}>
      <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow >
                        <TableCell component="tr" scope="row">
                             <ul style={{fontFamily:'Tw Cen MT', fontSize:26}}>
                                <li>Email</li>
                                <li>Statut</li> 
                                <li>Type de Contrat</li> 
                                <li>temps de travail</li> 
                                <li>Date départ</li> 
                                <li>Age</li> 
                                <li>Departement</li> 
                                <li>Education</li> 
                                <li>Sexe</li> 
                                <li>Grade / Echelle</li> 
                                <li>Etat Civil</li> 
                                <li>Salaire</li> 
                                <li>Nombre Companies dans il a travaillé</li> 
                                <li>Heures travailés par jour</li> 
                                <li>Nombre d'accidents de travail</li> 
                                <li>Ancienneté</li> 
                            </ul> 
                    </TableCell>
                    <TableCell component="td" scope="row" style={{textAlign:'left'}}>
                             <ul style={{fontFamily:'Tw Cen MT', fontSize:26, listStyle:'none', }}>
                                <li>: brettmacek@company.com</li>
                                <li>: Laboratory Technician</li> 
                                <li>: CDD</li> 
                                <li>: Temps plein</li>  
                                <li>: </li>  
                                <li>: 51</li>  
                                <li>: Recherche et Développement</li>  
                                <li>: Bac+3</li> 
                                <li>: Homme</li> 
                                <li>: 2</li> 
                                <li>: Divorcé</li> 
                                <li>: 56750</li>  
                                <li>: 5 </li> 
                                <li>: 8</li> 
                                <li>: 0</li> 
                                <li>: 4 ans</li> 
                            </ul> 
                    </TableCell>
              </TableRow>
        </TableBody>
        </Table>
            </TableContainer>
      </FormGroup>
      </Paper>
     
    </div>
      </Dialog>
    </div>
    </ThemeProvider>
    </div>
  );
}
