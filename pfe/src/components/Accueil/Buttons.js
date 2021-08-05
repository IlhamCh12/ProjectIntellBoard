import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import EcoIcon from '@material-ui/icons/Eco';
import ComputerIcon from '@material-ui/icons/Computer';
import PolicyIcon from '@material-ui/icons/Policy';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '100px',
  },
  paper: {
    height: 140,
    width: 300,
    backgroundColor:'#EF7F8F',
  },
  paper1: {
    height: 140,
    width: 300,
    backgroundColor:'#6DC29B',
  },
  paper2: {
    height: 140,
    width: 300,
    backgroundColor:'#288CC0',
  },
  paper3: {
    height: 140,
    width: 300,
    backgroundColor:'#FF8C5D',
  },
  paper4: {
    height: 140,
    width: 300,
    backgroundColor:'#896DC1',
  },
  paper5: {
    height: 140,
    width: 300,
    backgroundColor:'#DF2C4A',
  },
  paper6: {
    height: 140,
    width: 300,
    backgroundColor:'#FED53B',

  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    color: '#7E7E7E',
    fontSize: '22pt',
    margin:'20px',
    width: '100px',
    borderTopWidth: 3, 
    borderTopColor: '#44AE9C',
    borderTopStyle: 'solid',
    display: 'none',
    fontFamily: 'Tw Cen MT',
    fontStyle:'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    
  },
  button: {
    height:140,
    fontSize: 20,
    fontWeight: 'fontWeightBold',
    color: '#ffffff',
    fontFamily: 'Tw Cen MT',
    '&:hover': {
      color: '#fff',
  },
  },
}));

function Buttons() {

    const [spacing, setSpacing] = React.useState(3);
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <Typography className={classes.title} variant="h6" noWrap>
                    AXES
                </Typography>
            
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                    <Grid key={value} item>
                        <Paper className={ value==0 ? classes.paper : value==1 ? classes.paper1 : value==2 ? classes.paper2 : value==3 ? classes.paper3 : value==4 ? classes.paper4 : value==5 ? classes.paper5 : classes.paper6 } >
                            <Box flexDirection= "column"  justifyContent="center" display="flex"> 
                                
                                {value == 0 ?  <Button
                                    className={classes.button}
                                    href='/Dashboard-Social'
                                    startIcon={<SupervisorAccountIcon style={{width:70, height:70,}}/>}
                                >
                                    Social
                                </Button> : value==1 ? <Button
                                    className={classes.button}
                                    href='/Dashboard-Environnement'
                                    startIcon={<EcoIcon style={{width:70, height:70, }}/>}
                                >
                                    Environnemental
                                </Button> : value==2 ? <Button
                                    className={classes.button}
                                    href='/Dashboard-Informatique'
                                    startIcon={<ComputerIcon style={{width:70, height:70}}/>}
                                >
                                    Informatique <br/> Digital
                                </Button> : value==3 ? <Button
                                    className={classes.button}
                                    href='/Dashboard-Qualite'
                                    startIcon={<PolicyIcon style={{width:70, height:70}}/>}
                                >
                                    Qualité
                                </Button> : value==4 ? <Button
                                    className={classes.button}
                                    href='/Dashboard-Culturel'
                                    startIcon={<BubbleChartIcon style={{width:70, height:70}}/>}
                                >
                                    Culturel
                                </Button> : value==5 ? <Button
                                    className={classes.button}
                                    href='/Dashboard-Productivite'
                                    startIcon={<CheckCircleOutlineIcon style={{width:70, height:70}}/>}
                                >
                                    Productivité
                                </Button> : <Button
                                    className={classes.button}
                                    href='/Dashboard-Economie'
                                    startIcon={<MonetizationOnIcon style={{width:70, height:70}}/>}
                                >
                                    Economique <br/> Financier
                                </Button>
                              }
                            </Box>
                        </Paper>
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Buttons
