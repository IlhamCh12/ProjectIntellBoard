import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import imageName from '../../assets/prod.png';
import '../Style/ToPAxe.css';

/*-------------------------------------Style de la partie Top du Dashboard Productie----------------------------------*/


const useStyles = makeStyles((theme) => ({
    root: {
      
      backgroundColor: '#DF2C4A',
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

function ToPAxeProd() {
    const classes = useStyles();
    const theme = useTheme();
return (
    <div className={classes.root}>
            <img src={imageName} style={{width:320, height:220, margin:20, marginRight: 100 , float:'right'}}/>
            <div className={classes.titre}>
                <Typography className={classes.copy} variant="h3" noWrap>
                   Productivité
                </Typography>
                <br></br>
                <p style={{fontFamily: 'Tw Cen MT', fontSize: '16pt', color:'#F1F1F1', fontStyle:'italic'}}>
                    Des indicateurs utilisés par les organisations pour suivre, mesurer et analyser la productivité de l’entreprise         
                </p>
                
            </div>
            
    </div>
    )
}

export default ToPAxeProd

//                <hr style={{width:270, border: '1px solid #414141', marginLeft:0}}/>
