import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Demo1 from "./RapportSoc";
import Demo2 from "./RapportEnv";
import Demo3 from "./RapportProd";
import Demo4 from "./RapportCult";
import Demo5 from "./RapportEco";
import Demo6 from "./RapportInfo";
import Demo7 from "./RapportQual";

//---------------Ce component est la partie haute des rapports sous forme d'un menu des axes----------------


//---------------------------------------------------Style--------------------------------------------------

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin:20,
      
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        height:40,
        width:50,
        fontSize: 20,
        fontWeight: 'fontWeightBold',
        color: '#ffffff',
        fontFamily: 'Tw Cen MT',
        fontSize: '11pt',
        '&:hover': {
          color: '#fff',
      },
    },
}));

function Axes () {
    
//------------------------------------------Event du menu haut des rapports----------------------------
    const [state, setState] = React.useState({
        name: "React",
        showHideDemo1: true,
        showHideDemo2: false,
        showHideDemo3: false,
        showHideDemo4: false,
        showHideDemo5: false,
        showHideDemo6: false,
        showHideDemo7: false,
      });
    const pdfExportComponent = React.useRef(null);

        const classes = useStyles();
        const hideComponent =(name) =>{
            switch (name) {
              case "showHideDemo1":
                setState({ showHideDemo1: !state.showHideDemo1 });
                break;
              case "showHideDemo2":
                setState({ showHideDemo2: !state.showHideDemo2 });
                break;
                case "showHideDemo3":
                setState({ showHideDemo3: !state.showHideDemo3 });
                break;
                case "showHideDemo4":
                setState({ showHideDemo4: !state.showHideDemo4 });
                break;
                case "showHideDemo5":
                setState({ showHideDemo5: !state.showHideDemo5 });
                break;
                case "showHideDemo6":
                setState({ showHideDemo6: !state.showHideDemo6 });
                break;
                case "showHideDemo7":
                setState({ showHideDemo7: !state.showHideDemo7 });
                break;
              default:
                console.log('err');
            }
          };
          const { showHideDemo1, showHideDemo2, showHideDemo3, showHideDemo4, showHideDemo5, showHideDemo6, showHideDemo7 } = state;

        return (
        <div className={classes.root}>  
       {/** --------------------------------Bouton accès au rapport Social ------------------------ */}
           <Grid container spacing={7}>
                <Grid item xs>
                    <Paper className={classes.paper} style={{backgroundColor:'#EF7F8F',}}>                               
                            <Button
                                    className={classes.button}
                                    href=''
                                    onClick={() => hideComponent("showHideDemo1")}
                                >
                                    Social
                            </Button>
                    </Paper>
                </Grid>
       {/** --------------------------------Bouton accès au rapport Qualité ------------------------ */}

                <Grid item xs>
                    <Paper className={classes.paper} style={{backgroundColor:'#FF8C5D',}}>
                        <Button
                                    className={classes.button}
                                    href=''
                                    onClick={() => hideComponent("showHideDemo7")}
                                >
                                    Qualité
                            </Button>
                    </Paper>
                </Grid>
       {/** --------------------------------Bouton accès au rapport Informatique ------------------------ */}

                <Grid item xs>
                    <Paper className={classes.paper} style={{backgroundColor:'#288CC0',}}>
                        <Button
                                    className={classes.button}
                                    href=''
                                    onClick={() => hideComponent("showHideDemo6")}
                                >
                        Informatique / Digital
                            </Button>
                    </Paper>
                </Grid>
       {/** --------------------------------Bouton accès au rapport Economie ------------------------ */}

                <Grid item xs>
                    <Paper className={classes.paper} style={{backgroundColor:'#FED53B',}}>
                        <Button
                                    className={classes.button}
                                    href=''
                                    onClick={() => hideComponent("showHideDemo5")}
                                >
                        Economique / Finance
                            </Button>
                    </Paper>
                </Grid>
       {/** --------------------------------Bouton accès au rapport Culturel ------------------------ */}

                <Grid item xs>
                    <Paper className={classes.paper} style={{backgroundColor:'#896DC1',}}>
                        <Button
                                    className={classes.button}
                                    href=''
                                    onClick={() => hideComponent("showHideDemo4")}
                                >
                        Culturel
                            </Button>
                    </Paper>
                </Grid>
       {/** --------------------------------Bouton accès au rapport Environnemental ------------------------ */}

                <Grid item xs>
                    <Paper className={classes.paper} style={{backgroundColor:'#6DC29B',}}>
                        <Button
                                    className={classes.button}
                                    href=''
                                    onClick={() => hideComponent("showHideDemo2")}
                                >
                        Environnemental
                            </Button>
                    </Paper>
                </Grid>
       {/** --------------------------------Bouton accès au rapport Productivité ------------------------ */}

                <Grid item xs>
                    <Paper className={classes.paper} style={{backgroundColor:'#DF2C4A',}}>
                        <Button
                                    className={classes.button}
                                    href=''
                                    onClick={() => hideComponent("showHideDemo3")}
                                >
                        Productivité
                            </Button>
                    </Paper>
                </Grid>
            </Grid>
            <div>
            {showHideDemo1 && <Demo1 />}
            {showHideDemo2 && <Demo2 />}
            {showHideDemo3 && <Demo3 />}
            {showHideDemo4 && <Demo4 />}
            {showHideDemo5 && <Demo5 />}
            {showHideDemo6 && <Demo6 />}
            {showHideDemo7 && <Demo7 />}
            </div>
        </div>
      )
}
export default Axes;