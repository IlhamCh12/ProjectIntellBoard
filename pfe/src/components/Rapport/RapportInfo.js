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
import SpiderChart from '../Charts/SpiderChart';
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
      },
      button:{
        margin: 40,
      },
      title: {
        fontSize: '22pt',
        color: '#7E7E7E',
        margin: 40,
        borderTopWidth: 3, 
        borderTopColor: '#288CC0',
        borderTopStyle: 'solid',
        fontFamily: 'Tw Cen MT',
        fontStyle:'bold',
      },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  
const breakpointColumnsObj = {
    default: 2,
    200: 3,
    400: 2,
    900: 1
  };
  
  
function RapportInfo () {
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
                    Rapport de l'axe Informatique et Digital
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
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>AAAAAAAAAAAAA</TableCell>
                                <TableCell align="right">AAAAAAA</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                                <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Paper>          

                    <Paper elevation={3} className={classes.papers} >
                        <SpiderChart />
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
export default RapportInfo;