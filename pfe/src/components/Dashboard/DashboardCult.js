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
import IndiceHumeur from '../Charts/IndiceHumeur';
import GradeIcon from '@material-ui/icons/Grade';
import Typography from '@material-ui/core/Typography';


//--------------------------------------------Style-----------------------------------------

const styles = theme => createStyles({
  root: {
    backgroundColor: "#896DC1",
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
    
  },title:{
    fontFamily:"Tw Cen MT",
    color:"#515151", 
    paddingTop:20,
    paddingLeft:20,
  },
  title1:{
    fontFamily:"Tw Cen MT",
    color:"#515151", 
  },
  papers:{
    padding:20,
  },
  nbr:{
    fontFamily:"Tw Cen MT",
    color:"#515151", 
    fontSize:43,
    marginTop:19
  },
});



const breakpointColumnsObj = {
  default: 2,
  200: 3,
  400: 2,
  900: 1
};



class DashboardCult extends Component {
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
                <h4  className={classes.titre}> Leadership </h4>
                <Masonry
                             breakpointCols={breakpointColumnsObj}
                             className="my-masonry-grid"
                             columnClassName="my-masonry-grid_column"
                             style={{padding: 30}}>
                  {/* ---------------------------Graphe Num 1 ---------------------------*/}
                               <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                    <IndiceHumeur />
                                  </Paper>          
                                </div>
                  {/* ---------------------------Graphe Num 2 ---------------------------*/}
                                <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                      <Typography className={classes.title} variant='h5' noWrap>
                                            Indice de qualité du leadership 
                                      </Typography>
                                      <GradeIcon style={{width:90, height:90, color:'#FED53B', margin: 30, marginLeft:60} }/>
                                      <span  className={classes.nbr} >
                                              71.86 %
                                      </span>
                                        <Typography className={classes.title1} align='center'  variant='h6' noWrap>
                                        Cet indice mesure la satisfaction des  <br></br>employés envers le leadership de l'entreprise
                                        </Typography>
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

export default withStyles(styles, { withTheme: true })(DashboardCult);