import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Tete from './components/Tete';
import Slider from './components/Slider';
import Axes from './components/Axes';
import Login from './components/login';

import { ScrollView } from 'react-native';



export default function App() {
  return (
    <NativeRouter>
      <Switch>

      
      <Route path="/" exact>
        <Tete/>
        <ScrollView>

        <Slider/>
          <Axes></Axes>
        </ScrollView>
      </Route>
      <Route path="/Accueil" exact>
        <Login/>
      </Route>
      </Switch>
    </NativeRouter>
   
  );
}


