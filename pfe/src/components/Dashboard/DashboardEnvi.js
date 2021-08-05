import React, { Component } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
import '../Style/Dashboard.css';
import Paper from '@material-ui/core/Paper';
import Masonry from 'react-masonry-css';
import AgeChart from '../Charts/AgeChart';
import SpiderChart from '../Charts/SpiderChart';
import PyramidChart from '../Charts/PyramidChart';
import MultiPane from '../Charts/MultiPane';
import Consommation from '../Charts/Consommation';
import Consomation2 from '../Charts/Consomation2';
import EauPapier from '../Charts/EauPapier';


//--------------------------------------------Style-----------------------------------------


const styles = theme => createStyles({
  root: {
    backgroundColor: "#6DC29B",
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



class DashboardEnvi extends Component {
  state = {
    searchNodes: ""
  };
  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid Grid container spacing={2} justify="center" className={classes.gridRad}>
          <div className={classes.sousGrid} >
             {/* ---------------Dashboard est un ensembre des Slides qui contient des sous axes------------------------*/}

            <Slider ref={c => (this.slider = c)} className={classes.slider}>
               {/* ---------------------------Sous Axe Num 1 |||| Slider num 1----------------------------*/}

              <div  key={1} >
                <h4  className={classes.titre}> Consommation et Déchets </h4>
                   {/* ---------------------------Graphe Num 1 ---------------------------*/}

                               <div  style={{margin:15, marginTop:35}} >
                                  <Paper elevation={3} className={classes.papers} >
                                    <Consommation />
                                  </Paper>          
                                </div>
                   {/* ---------------------------Graphe Num 2 ---------------------------*/}

                                <div style={{margin:15, marginTop:35}} >
                                  <Paper elevation={3} className={classes.papers} >
                                    <EauPapier />
                                   </Paper>         
                                </div>
                  <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column"
                      style={{padding: 30}}>
                  {/* ---------------------------Graphe Num 3 ---------------------------*/}
                        <div >
                                  <Paper elevation={3} className={classes.papers} >
                                    <Consomation2 />
                                  </Paper>          
                                </div>
                                
                </Masonry>
              </div>
              
            </Slider>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DashboardEnvi);