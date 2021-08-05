import React, { Component } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
import '../Style/Dashboard.css';
import Paper from '@material-ui/core/Paper';
import Masonry from 'react-masonry-css';
import AgeChart from '../Charts/AgeChart';
import TauxRebond from '../Charts/TauxRebond';
import SpiderChart from '../Charts/SpiderChart';
import NbrVisiteur from '../Charts/NbrVisiteur';
import TempsVist from '../Charts/TempsVist';
import PrcIncident from '../Charts/PrcIncident';
import MultiPane from '../Charts/MultiPane';
import PlainteInfo from '../Charts/Plainteinfo';  


//--------------------------------------------Style-----------------------------------------


const styles = theme => createStyles({
  root: {
    backgroundColor: "#288CC0",
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



class DashboardInfo extends Component {
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
                <h4  className={classes.titre}> Digital </h4>
                         {/* ---------------------------Graphe Num 1 ---------------------------*/}
                                <div  style={{margin:15, marginTop:35}}>
                                  <Paper elevation={3}  className={classes.papers}>
                                    <NbrVisiteur />
                                   </Paper>         
                                </div>
                         {/* ---------------------------Graphe Num 2 ---------------------------*/}
                                <div  style={{margin:15, marginTop:35}}>
                                  <Paper elevation={3}  className={classes.papers}>
                                    <TauxRebond />
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
                                    <TempsVist />
                                  </Paper>
                                </div>
                </Masonry>
              </div>
        {/* ---------------------------Sous Axe Num 2 |||| Slider num 2----------------------------*/}

              <div key={2}>
                <h4 className={classes.titre} > Sécurité </h4>
                         {/* ---------------------------Graphe Num 1 ---------------------------*/}
                          
                          <div style={{margin:15, marginTop:35}}  >
                                  <Paper elevation={3} className={classes.papers} >
                                    <PlainteInfo />
                                   </Paper>         
                                </div>
                <Masonry
                             breakpointCols={breakpointColumnsObj}
                             className="my-masonry-grid"
                             columnClassName="my-masonry-grid_column"
                             style={{padding: 30}}>
                         {/* ---------------------------Graphe Num 2 ---------------------------*/}                               
                               <div style={{margin:15, marginTop:35}}  >
                                  <Paper elevation={3} className={classes.papers} >
                               <PrcIncident/>
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

export default withStyles(styles, { withTheme: true })(DashboardInfo);