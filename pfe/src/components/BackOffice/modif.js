import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


const theme = createMuiTheme({
    palette: {
      primary: { main: '#1976d2' },
    },
  }, frFR);

const useStyles = makeStyles((theme) => ({
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    checkedEc: true,
    checkedEn: true,
    checkedC: true,
    checkedIn: true,
    checkedPr: true,
    checkedQu: true,
    checkedSoc: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <ThemeProvider theme={theme}>
    <div>
      <IconButton style={{ color: '#9107E6' }} aria-label="accept" onClick={handleClickOpen}>
    <EditIcon/>
    </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{backgroundColor:'#FED53B'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} style={{fontFamily:'Tw Cen MT'}}>
              Modification
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose} style={{fontFamily:'Tw Cen MT'}}>
              sauvgarder
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.root} style={{'margin': 10+'%'}}>
      <Paper elevation={4} style={{'width': 50+'%', 'height': 'auto'}}>
      <FormGroup row = 'true'  style={{'margin': 20+'px'}}>
      <TextField
            autoFocus style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            disabled
          />
           <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            autoFocus
            margin="dense"
            id="name"
            label="Nom"
            type="email"
            fullWidth
            disabled
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            autoFocus
            margin="dense"
            id="name"
            label="Prenom"
            type="email"
            fullWidth
            disabled
          />
          <TextField style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}
            autoFocus
            margin="dense"
            id="name"
            label="Satut"
            type="email"
            fullWidth
            disabled
          />
      </FormGroup>
      </Paper>
      <Paper elevation={3} style={{'width': 45+'%', 'height': 'auto'}}>
      <h5 style={{fontFamily:'Tw Cen MT', 'margin': 20+'px'}}> Les axes qu'il peut consulter : </h5>
      <FormGroup   style={{'margin': 20+'px'}}>
            <FormControlLabel control={<Checkbox   checked={state.checkedEc} onChange={handleChange} style={{ color: '#FED53B'}} name="checkedEc" />} label="Economique" />
            <FormControlLabel control={<Checkbox style={{ color: '#6DC29B'}} name="checkedEn" />} label="Enviromental" />
            <FormControlLabel control={<Checkbox checked={state.checkedIn} onChange={handleChange} style={{ color: '#288CC0'}} name="checkedIn" />} label="Informatique / Digital" />
            <FormControlLabel control={<Checkbox  style={{ color: '#EF7F8F'}} name="checkedSoc" />} label="sociale" />
            <FormControlLabel control={<Checkbox  checked={state.checkedPr} onChange={handleChange} style={{ color: '#DF2C4A'}} name="checkedPr" />} label="Productivité" />
            <FormControlLabel control={<Checkbox style={{ color: '#896DC1'}} name="checkedCu" />} label="Culturel" />
            <FormControlLabel control={<Checkbox checked={state.checkedQu} onChange={handleChange} style={{ color: '#FF8C5D'}} name="checkedQu" />} label="Qualité" />
            </FormGroup>
      </Paper>
    </div>
      </Dialog>
    </div>
    </ThemeProvider>
  );
}




