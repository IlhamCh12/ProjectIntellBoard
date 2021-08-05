import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import imageName from '../../assets/infor.png';
import Divider from '@material-ui/core/Divider';
import '../Style/ToPAxe.css';


/*-------------------------------------Style de la partie Top du Dashboard Informatique----------------------------------*/


const useStyles = makeStyles((theme) => ({
    root: {
      
      backgroundColor: '#288CC0',
      height: 300,
      fontFamily: 'Tw Cen MT',
    },
    copy: {
        color: '#FFFFFF',
        fontFamily: 'Tw Cen MT',
        textAlign: 'left',
    },
    titre: {
        paddingTop: 40,
        paddingLeft: 150,
        width: '70%',
    },
}));

function ToPAxeInfo() {
    const classes = useStyles();
    const theme = useTheme();
return (
    <div className={classes.root}>
            <img src={imageName} style={{width:250, height:250, margin:20, marginRight: 100 , float:'right'}}/>
            <div className={classes.titre}>
                <Typography className={classes.copy} variant="h3" noWrap>
                   Informatique / Digital
                </Typography>
                <br></br>
                <p style={{fontFamily: 'Tw Cen MT', fontSize: '16pt', color:'#F1F1F1', fontStyle:'italic'}}>
                    Mesure la performance des activités technologiques 
                    de l’organisation. Pour une entreprise qui désire 
                    rentabiliser et optimiser ses processus d’affaires par le 
                    biais de solutions technologiques                
                </p>
                
            </div>
            
    </div>
    )
}

export default ToPAxeInfo

//                <hr style={{width:270, border: '1px solid #414141', marginLeft:0}}/>
