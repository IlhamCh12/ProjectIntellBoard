import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SpiderChart from '../Charts/AgeChart';
import PyramidChart from '../Charts/PyramidChart';
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft:8,
      paddingRight:8,
      margin:20,
    },
    table: {
        minWidth: 650,
      },
    papers:{
        padding:20,
        margin:10,
    },
    pyramid:{
        paddingLeft:280,
        padding:20,
    },
    button:{
        margin: 40,
    },
    title: {
      fontSize: '22pt',
      color: '#7E7E7E',
      margin: 40,
      borderTopWidth: 3, 
      borderTopColor: '#EF7F8F',
      borderTopStyle: 'solid',
      fontFamily: 'Tw Cen MT',
      fontStyle:'bold',
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Ressources Humaines', 1, 0, 1),
    createData('Recherche & Développement', 9, 4, 13),
    createData('Management', 0, 0, 0),
    createData('Ventes', 1, 0, 1),
  ];
  const rows1 = [
    createData('Licenciement', 6, 6, 12),
    createData('Démission', 27, 15, 42),
  ];


  
const breakpointColumnsObj = {
    default: 2,
    200: 3,
    400: 2,
    900: 1
  };
  
  
function RapportSoc () {
  const [state] = React.useState({
    name: "React"
  });
    const pdfExportComponent = React.useRef(null);

        const classes = useStyles();
        const handleExportWithComponent = (event)=>{
            if (pdfExportComponent.current) {
              pdfExportComponent.current.save();
            }
          };
        return (
        <div className={classes.root}>
            <Typography className={classes.title}  noWrap>
                    Rapport de l'axe Social
            </Typography>
            <PDFExport
                ref={pdfExportComponent}
                paperSize="auto"
                margin={25}
                fileName={`Rapport de ${new Date().getFullYear()}`}
            >
                <div >
               
                  <Paper elevation={3} className={classes.papers} >
                    <TableContainer component={Paper}>
                      <Typography variant='h5' style={{fontFamily:'Tw Cen MT', color:"#505A5B", textAlign:'center'}}> Nombre d'Accidents de travail par sexe et département</Typography>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Département</TableCell>
                                <TableCell align="right">Homme</TableCell>
                                <TableCell align="right">Femme</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Paper>          
                    <Paper elevation={3} className={classes.papers} >
                    <TableContainer component={Paper}>
                      <Typography variant='h5' style={{fontFamily:'Tw Cen MT', color:"#505A5B", textAlign:'center'}}> Nombre d'employés par type de départ et sexe</Typography>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Type de départ</TableCell>
                                <TableCell align="right">Homme</TableCell>
                                <TableCell align="right">Femme</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows1.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Paper>      
                    <Paper elevation={3} className={classes.papers} >
                        <SpiderChart />
                    </Paper> 
                    <Paper elevation={3}  >
                      <div className={classes.pyramid}>
                            <PyramidChart />
                            </div>
                    </Paper>          
                </div>
            </PDFExport>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<GetAppIcon />}
              onClick={handleExportWithComponent}
            >
              Exporter le rapport .pdf
            </Button>
        </div>
      )
}
export default RapportSoc;