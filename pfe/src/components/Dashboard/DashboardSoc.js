import React, { Component } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
import '../Style/Dashboard.css';
import Paper from '@material-ui/core/Paper';
import Masonry from 'react-masonry-css';
import EmpSxDep from '../Charts/EmpSxDep';
import PyramidAge from '../Charts/PyramidAge';
import TauxDep from '../Charts/TauxDep';
import AbsGender from '../Charts/AbsGender';
import Accident from '../Charts/Accident';
import NbrEmbauche from '../Charts/NbrEmbauche';
import Typography from '@material-ui/core/Typography';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Formation from '../Charts/Formation';
import CheckIcon from '@material-ui/icons/Check';


//--------------------------------------------Style-----------------------------------------

const styles = theme => createStyles({
  root: {
    backgroundColor: "#EF7F8F",
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



class DashboardSoc extends Component {
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
                <h4  className={classes.titre}> Emploi </h4>
                 <Masonry
                             breakpointCols={breakpointColumnsObj}
                             className="my-masonry-grid"
                             columnClassName="my-masonry-grid_column"
                             style={{padding: 30}}>
                          {/* ---------------------------Graphe Num 1 ---------------------------*/}
                               
                               <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                      <Typography className={classes.title} variant='h5' noWrap>
                                              Cout Globale du personnel 
                                      </Typography>
                                      <MonetizationOnIcon style={{width:90, height:90, color:'#896DC1', margin: 30, marginLeft:60} }/>
                                      <span  className={classes.nbr} >
                                              12 151 180 
                                      </span>
                                        <Typography className={classes.title1} align='center'  variant='h6' noWrap>
                                                ce cout représente la somme des salaires <br></br>dédiée aux employés par mois
                                        </Typography>
                                   </Paper>     
                                </div>
                          {/* ---------------------------Graphe Num 2 ---------------------------*/}
                                
                              <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                    <EmpSxDep />
                                  </Paper>          
                                </div> 
                          {/* ---------------------------Graphe Num 3 ---------------------------*/}

                               <div >
                                  <Paper elevation={3} className={classes.papers} >
                                    <PyramidAge />
                                  </Paper>
                                </div>
                          {/* ---------------------------Graphe Num 4 ---------------------------*/}

                                <div  > 
                                  <Paper elevation={3}  className={classes.papers} >
                                    <TauxDep />
                                  </Paper>
                                </div>
                          {/* ---------------------------Graphe Num 5 ---------------------------*/}
                                <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                    <AbsGender />
                                   </Paper>         
                                </div>
                                
                </Masonry>
              </div>
   {/* ---------------------------Sous Axe Num 2 |||| Slider num 2----------------------------*/}

              <div key={2}>
                <h4 className={classes.titre} > Accidents de travail </h4>
                          {/* ---------------------------Graphe Num 1 ---------------------------*/}

                               <div  style={{margin:15, marginTop:35}}>
                                  <Paper elevation={3}  className={classes.papers}>
                                    <Accident />
                                   </Paper>         
                                </div>
              </div>
   {/* ---------------------------Sous Axe Num 3 |||| Slider num 3----------------------------*/}

              <div  key={3} >
                <h4  className={classes.titre}> Carrière et Formation </h4>
      {/* ---------------------------Graphe Num 1 ---------------------------*/}

                <div  style={{margin:15, marginTop:35}}>
                                  
                                  <Paper elevation={3} className={classes.papers} >
                                    <Formation />
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
                                              Nombre d'heures de formation par employé
                                      </Typography>
                                      <HourglassFullIcon style={{width:90, height:90, color:'#FED53B', margin: 30, marginLeft:60} }/>
                                      <span  className={classes.nbr} >
                                              3 H
                                      </span>
                                        <Typography className={classes.title1} align='center'  variant='h6' noWrap>
                                                Présente lenombre moyen de formation <br></br> effectuée par employé
                                        </Typography>
                                   </Paper>     
                                </div> 
      {/* ---------------------------Graphe Num 3 ---------------------------*/}

                                <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                    <NbrEmbauche />
                                  </Paper>          
                                </div> 
      {/* ---------------------------Graphe Num 4 ---------------------------*/}

                                <div  >
                                  <Paper elevation={3} className={classes.papers} >
                                      <Typography className={classes.title} variant='h5' noWrap>
                                              Taux d'Acceptation d'offre d'emploi
                                      </Typography>
                                      <CheckIcon style={{width:70, height:70, color:'#6DC29B', margin: 30, marginLeft:60} }/>
                                      <span  className={classes.nbr} >
                                              70.96 %
                                      </span>
                                        <Typography className={classes.title1} align='center'  variant='h6' noWrap>
                                                Ce KPI mesure le pourcentage d'offres d'emploi<br></br> acceptés durant l'année précédente                                        </Typography>
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

export default withStyles(styles, { withTheme: true })(DashboardSoc);