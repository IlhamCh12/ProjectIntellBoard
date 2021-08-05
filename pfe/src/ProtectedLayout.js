import Tete from './components/Accueil/Tete'
import Pied from './components/Accueil/Pied'
import Slider from './components/Accueil/Slider';
import Button from './components/Accueil/Buttons';
import Insc from './components/inscription';
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ToPAxeEc from './components/Axes/ToPAxeEc';
import DashboardEc from './components/Dashboard/DashboardEc';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { frFR } from '@material-ui/core/locale';
import BackOffice from './components/BackOffice/backOffice';
import ToPAxeSoc from './components/Axes/ToPAxeSoc';
import DashboardSoc from './components/Dashboard/DashboardSoc';
import  ToPAxeEnvi from './components/Axes/ToPAxeEnvi';
import DashboardEnvi from './components/Dashboard/DashboardEnvi';
import ToPAxeInfo  from './components/Axes/ToPAxeInfo';
import DashboardInfo from './components/Dashboard/DashboardInfo';
import ToPAxeQual from './components/Axes/ToPAxeQual';
import DashboardQual from './components/Dashboard/DashboardQual';
import ToPAxeCult from './components/Axes/ToPAxeCult';
import DashboardCult from './components/Dashboard/DashboardCult';
import ToPAxeProd from './components/Axes/ToPAxeProd';
import DashboardProd from './components/Dashboard/DashboardProd';
import Axes from './components/Rapport/Axes';
import Employe from './components/Alimentation/Employe';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, frFR);


export const ProtectedLayout = (props) => <div>
  <Tete/>
   <Switch>
{/**----------------------------Accueil------------------------ */}

        <Route exact path='/Accueil' >
          <Slider/>
          <Button/>
        </Route>
{/**----------------------------Dashboard------------------------ */}

         <Route path="/Dashboard-Economie" exact>
          <ToPAxeEc/>
          <DashboardEc/>
        </Route>
        <Route path="/Dashboard-Social" exact>
          <ToPAxeSoc/>
          <DashboardSoc/>
        </Route>
        <Route path="/Dashboard-Environnement" exact>
          <ToPAxeEnvi/>
          <DashboardEnvi/>
        </Route>
        <Route path="/Dashboard-Informatique" exact>
          <ToPAxeInfo/>
          <DashboardInfo/>
        </Route>
        <Route path="/Dashboard-Qualite" exact>
          <ToPAxeQual/>
          <DashboardQual/>
        </Route>
        <Route path="/Dashboard-Culturel" exact>
          <ToPAxeCult/>
          <DashboardCult/>
        </Route>
        <Route path="/Dashboard-Productivite" exact>
          <ToPAxeProd/>
          <DashboardProd/>
        </Route>

{/**----------------------------BackOffice------------------------ */}
        <Route path="/BackOffice" exact>
          <ThemeProvider theme={theme}>         
            <BackOffice/>
          </ThemeProvider>
        </Route>

{/**----------------------------Rapports------------------------ */}

        <Route path="/Rapport" exact>
            <Axes/>
        </Route>

{/**----------------------------Alimentation------------------------ */}
        <Route path="/Alimentation/Employes" exact>
            <Employe/>
        </Route>
        
   </Switch>
  <Pied/>
  </div>