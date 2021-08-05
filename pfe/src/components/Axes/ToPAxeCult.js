import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import imageName from '../../assets/cult.png';
import '../Style/ToPAxe.css';


/*-------------------------------------Style de la partie Top du Dashboard Culturel----------------------------------*/

const useStyles = makeStyles((theme) => ({
    root: {
      
      backgroundColor: '#896DC1',
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

function ToPAxeCult() {
    const classes = useStyles();
    const theme = useTheme();
return (
    <div className={classes.root}>
            <img src={imageName} style={{width:300, height:300, margin:20, marginRight: 100 , float:'right'}}/>
            <div className={classes.titre}>
                <Typography className={classes.copy} variant="h3" noWrap>
                   Culturel
                </Typography>
                <br></br>
                <p style={{fontFamily: 'Tw Cen MT', fontSize: '16pt', color:'#F1F1F1', fontStyle:'italic'}}>
                    les valeurs, les idées, les habitudes, les objectifs et 
                    la mission qui structurent les actions et l’identité de 
                    l’entreprise (et de ses employés)           
                </p>
                
            </div>
            
    </div>
    )
}

export default ToPAxeCult

//                <hr style={{width:270, border: '1px solid #414141', marginLeft:0}}/>
