import React, { Component } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
import '../Style/Dashboard.css';
import Paper from '@material-ui/core/Paper';
import Masonry from 'react-masonry-css';
import FondRoulm from '../Charts/FondRoulm';
import SpiderChart from '../Charts/SpiderChart';
import CAChart from '../Charts/CAChart';
import BFondR from '../Charts/BFondR';
import MultiPane from '../Charts/MultiPane';
import Typography from '@material-ui/core/Typography';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DelaiMoy from '../Charts/DelaiMoy';

//--------------------------------------------Style-----------------------------------------

const styles = theme => createStyles({
  root: {
    backgroundColor: "#FED53B",
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
  title:{
    fontFamily:"Tw Cen MT",
    color:"#515151", 
    paddingTop:20,
    paddingLeft:20,
  },
  title1:{
    fontFamily:"Tw Cen MT",
    color:"#515151", 
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



class DashboardEc extends Component {
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
                <h4  className={classes.titre}> Finance </h4>
                {/* ---------------------------Graphe Num 1 ---------------------------*/}

                                <div  style={{margin:15, marginTop:35}}>
                                  
                                  <Paper elevation={3} className={classes.papers} >
                                    <CAChart />
                                  </Paper>          
                                </div> 
                <Masonry
                             breakpointCols={breakpointColumnsObj}
                             className="my-masonry-grid"
                             columnClassName="my-masonry-grid_column"
                             style={{padding: 30}}>
                  {/* ---------------------------Graphe Num 2 ---------------------------*/}

                               <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                      <Typography className={classes.title} variant='h5' noWrap>
                                              La Croissance du chiffre d'affaire de l'année <br></br> dérnière 
                                      </Typography>
                                      <MonetizationOnIcon style={{width:90, height:90, color:'#FED53B', margin: 30, marginLeft:60} }/>
                                      <span  className={classes.nbr} >
                                              1.18 %
                                      </span>
                                   </Paper>     
                                </div>
                  {/* ---------------------------Graphe Num 3 ---------------------------*/}
                                <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                      <FondRoulm/>
                                   </Paper>     
                                </div>
                  {/* ---------------------------Graphe Num 4 ---------------------------*/}

                                <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                   <BFondR/>
                                </Paper>     
                                </div>
                  {/* ---------------------------Graphe Num 5 ---------------------------*/}

                                <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                   <DelaiMoy/>
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

export default withStyles(styles, { withTheme: true })(DashboardEc);