import logo from '../assets/lg.png';
import loginside from '../assets/lg2.JPG';
import './Style/Authentif.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from './../axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';

import React, {useState} from 'react';

//--------------------------------Event des boutons-----------------------------
function Login() {
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] =React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1= ()=>{
    window.location.replace("http://localhost:3000/");
  
  };

//-------------------------------------------Backend Operations-------------------------------------------

  const loginUser=(e)=>{

      axios.post('http://localhost:5000/Utilisateurs/login',{email: document.getElementById("email").value, password : document.getElementById("password").value, admin: document.getElementById("admin").value})
      .then(function(response){
        if (response.data.redirect == "connection")
        {
          
          window.location = "/Accueil"
        }
        if (response.data.redirect == "invalidUser")
        {
          const b= document.getElementsByClassName('alertt');
          var i;
          for (i = 0; i < b.length; i++) {
              b[i].style.display = 'block';
          }
          setMsg("Email d'utilisateur Invalide");
        }
        if (response.data.redirect == "incorrectPass")
        {
          const a= document.getElementsByClassName('alertt');
          for (i = 0; i < a.length; i++) {
            a[i].style.display = 'block';
          }
          setMsg("Mot de passe Incorret")
        }
        if (response.data.redirect == "connectionAdmin")
        {
          window.location = "/BackOffice"
        }
      
      });
      e.preventDefault();

     
  };
  const MotPasseOublie=(e)=>{

    axios.post('http://localhost:5000/Utilisateurs/MPO',{email: document.getElementById("emailMP").value});
    e.preventDefault();
   
};

    return (
   
       <main className="d-flex align-items-center min-vh-100 py-3 py-md-0" >
      <div className="container" >
        <div className="card login-card" >
          <div className="row no-gutters" >
            
            <div className="col-md-5">
              <div className="card-body">
                <div className="brand-wrapper">
                  
                <img src={logo}  style={{height:70+'px',width:150+'px'}} ></img> <br></br>
                  
                  <p  style={{ 'font-size': 14+'px'}} >Outil de pilotage de la performance de votre entreprise</p>
                </div>
                <p className="login-card-description">Bienvenue !</p>
      {/**---------------------------------Formulaire d'Authentification-------------------------------- */}
                <form  method="post" onSubmit={loginUser} >
                  <div className='alertt' style={{display:'none', marginTop:7, marginBottom:7}}>
                  <Alert variant="filled" severity="error">{msg}</Alert>   
                  </div>
                    <div className="form-group">
                      <label for="email" className="sr-only">Email</label>
                      <input type="email" name="email" id="email" className="form-control" placeholder="Adresse email" required="true"></input>
                    </div>
                    <div className="form-group mb-4">
                      <label for="password" className="sr-only">Mot de passe</label>
                      <input type="password" name="password" id="password" className="form-control" placeholder="***********" required="true"></input>
                    </div>
                    <div className="form-group" style={{'marginLeft': 9+'%'}}>
                    <input class="form-check-input" type="checkbox" value="admin" id="admin" name="admin" ></input>
                    <label class="form-check-label" for="flexCheckChecked"> Admin</label>
                    </div>
                    <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Login"></input>
                  </form>
                  <a href="#!" className="forgot-password-link" onClick={handleClickOpen}>Mot de passe oublié?</a>
                  <p className="login-card-footer-text">Vous n'avez pas un compte? <a href="/Inscription" class="text-reset">Inscrivez-vous</a></p>
              </div>
            </div>
            <div className="col-md-7">
            <img src={loginside}   style={{width: 85+'%', height: 95+'%', 'padding-left': 80+'px'}}></img>
            </div>
          </div>
        </div>
       
      </div>
      <div>
      {/**---------------------------------Dialog : formlaire Mot de passe Oublie-------------------------------- */}

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">réintialisation du mot de passe</DialogTitle>
        <form action="" method="post" onSubmit={MotPasseOublie} >
        <DialogContent>
          <DialogContentText>
            veuillez saisir votre adresse email afin de réintialiser votre mot de passe.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="emailMP"
            label="Adresse email"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button type='submit' onClick={handleClose1} color="primary">
            Valider
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
    </main>
     
      
    );
  }
  export default Login;