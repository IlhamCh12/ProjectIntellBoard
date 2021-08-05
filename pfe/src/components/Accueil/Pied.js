import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import imageName from '../../assets/copyright.png';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#24252A',
      width: '100%',
    },
    copy: {
        padding: 10,
        color: '#FFFFFF',
        fontFamily: 'Tw Cen MT',
        textAlign: 'center',
    },
}));

function Pied() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <Typography className={classes.copy} variant="h6" noWrap>
                <img src={imageName} style={{width:20, height:20, marginRight:7}}/>
                CopyRight 2021
            </Typography>
        </div>
    )
}

export default Pied
