import React, { Component } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
import '../Style/Dashboard.css';
import Paper from '@material-ui/core/Paper';
import Masonry from 'react-masonry-css';
import RPCChart from '../Charts/RPCChart';


//--------------------------------------------Style-----------------------------------------


const styles = theme => createStyles({
  root: {
    backgroundColor: "#FF8C5D",
    paddingLeft:8,
    paddingRight:8,
  },
  gridRad:{
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    backgroundColor:'#ffffff',
    
  },
  sousGrid: {
    width:'90%', 
    backgroundColor:"#ffffff", 
    margin:40,
  },
  slider: {
    dots: true, 
    infinite: true, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    padding:20 
  },
  titre: {
    fontFamily:'Tw Cen MT', 
    color:"#515151", 
    fontSize: '25pt',
    
  },
  papers:{
    padding:20,
  },
});



const breakpointColumnsObj = {
  default: 2,
  200: 3,
  400: 2,
  900: 1
};



class DashboardQual extends Component {
  state = {
    searchNodes: ""
  };
  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid Grid container spacing={2} justify="center" className={classes.gridRad}>
             {/* ---------------Dashboard est un ensembre des Slides qui contient des sous axes------------------------*/}

          <div className={classes.sousGrid} >
                {/* ---------------------------Sous Axe Num 1 |||| Slider num 1----------------------------*/}
         
            <Slider ref={c => (this.slider = c)} className={classes.slider}>
              <div  key={1} >
                <h4  className={classes.titre}>  Service Client </h4>
                          
                          {/* ---------------------------Graphe Num 1 ---------------------------*/}
               
                <div  style={{margin:15, marginTop:35}} >
                                  <Paper elevation={3} className={classes.papers} >
                                    <RPCChart />
                                  </Paper>          
                                </div>
               
              </div>
              
            </Slider>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DashboardQual);