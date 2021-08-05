import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import imageName from '../../assets/qualt.png';
import Divider from '@material-ui/core/Divider';
import '../Style/ToPAxe.css';


/*-------------------------------------Style de la partie Top du Dashboard Qualite----------------------------------*/


const useStyles = makeStyles((theme) => ({
    root: {
      
      backgroundColor: '#FF8C5D',
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

function ToPAxeQual() {
    const classes = useStyles();
    const theme = useTheme();
return (
    <div className={classes.root}>
            <img src={imageName} style={{width:280, height:280, margin:20, marginRight: 100 , float:'right'}}/>
            <div className={classes.titre}>
                <Typography className={classes.copy} variant="h3" noWrap>
                   Qualité
                </Typography>
                <br></br>
                <p style={{fontFamily: 'Tw Cen MT', fontSize: '16pt', color:'#515151', fontStyle:'italic'}}>
                    Permet de transformer les objectifs de satisfaction 
                    client fixés par la direction de l’entreprise en données 
                    quantifiables et concrètes              
                </p>
                
            </div>
            
    </div>
    )
}

export default ToPAxeQual

//                <hr style={{width:270, border: '1px solid #414141', marginLeft:0}}/>
