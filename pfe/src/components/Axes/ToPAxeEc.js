import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import imageName from '../../assets/econo.png';
import Divider from '@material-ui/core/Divider';
import '../Style/ToPAxe.css';

/*-------------------------------------Style de la partie Top du Dashboard Economie----------------------------------*/


const useStyles = makeStyles((theme) => ({
    root: {
      
      backgroundColor: '#FED53B',
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

function ToPAxeEc() {
    const classes = useStyles();
    const theme = useTheme();
return (
    <div className={classes.root}>
            <img src={imageName} style={{width:250, height:180, margin:20, marginRight: 100 , marginTop:50, float:'right'}}/>
            <div className={classes.titre}>
                <Typography className={classes.copy} variant="h3" noWrap>
                    Economique / Financier
                </Typography>
                <br></br>
                <p style={{fontFamily: 'Tw Cen MT', fontSize: '16pt', color:'#515151', fontStyle:'italic'}}>
                    Des indicateurs utilisés par les organisations pour suivre, mesurer et analyser la santé financière de l'entreprise
                </p>
                
            </div>
            
    </div>
    )
}

export default ToPAxeEc

//                <hr style={{width:270, border: '1px solid #414141', marginLeft:0}}/>
