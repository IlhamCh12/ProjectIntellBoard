
import React, {Component} from 'react';
import logo from '../assets/lg.png';
import './Style/Authentif.css';
import 'bootstrap/dist/css/bootstrap.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class Inscription extends Component {
  
  constructor(props){
    super(props);

    this.state = {
        fields: {},
        errors: {},
        open: false,
        setOpen: false, 

    }
 }
 handleClickOpen(){
  this.setState({open: true});


  }

  handleClose (){
    window.location.replace("http://localhost:3000/");

  }

 handleValidation(){
  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  //Name
 
  if(fields["confirm_password"] != fields["password"] )
  {
    formIsValid = false;
    errors["confirm_password"] = "Les deux mots de passe ne sont pas les memes !";
  }


 this.setState({errors: errors});
 return formIsValid;
}

contactSubmit(e){
   
  if(this.handleValidation()){
    this.handleClickOpen();
    
 }else
 {
    e.preventDefault();
    alert("Form has errors.")
 }

}
handleChange(field, e){         
  let fields = this.state.fields;
  fields[field] = e.target.value;        
  this.setState({fields});
}



render()
{
  

  return (
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0" >
      <div className="container" >
    <div className="signup-form">
    <center>    
{/**-------------------------------Formulaire d'inscription d'un utilisateur ------------------------- */}
    <form action="/Utilisateurs/Inscription" method="post" onSubmit= {this.contactSubmit.bind(this)} >
   <center>
     <img src={logo}  style={{height:50+'px',width:150+'px'}} ></img> <br></br>
    <p  style={{ 'font-size': 14+'px'}} >Outil de pilotage de la performance de votre entreprise</p>
    </center>
		
		<p class="login-card-description">Inscription</p>
        <div className="form-group">
			
				<input type="text" className="form-control" name="first_name" placeholder="Prénom" required="required" ></input>
        </div>
        <div className="form-group">
				<input type="text" className="form-control" name="last_name" placeholder="Nom" required="required"></input>
        
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required" ></input>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Mot de passe " required="required" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}></input>
            
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirmation du mot de passe" required="required" onChange={this.handleChange.bind(this, "confirm_password")} value={this.state.fields["confirm_password"]} ></input>
            <span style={{color: "red"}}>{this.state.errors["confirm_password"]}</span>
        </div>        
        <div className="form-group">
            <input type="text" className="form-control" name="statut" placeholder="Statut" required="required"></input>
            
        </div>   
        <div className="form-group">
			Vous avez déjà un compte ? <a href="">Connectez-vous !</a>
		</div>
		<div className="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">S'inscrire</button>
        </div>
    </form>
    </center>
{/**---------------------Dialog confirme la validation d'insertion des données d'un utilisateur ------------ */}

    <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Inscription avec succès : "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Votre inscription a été bien prise en considération.
            <br></br>
            Attendez un email de confirmation sera envoyer prochainement . 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
           Oui
          </Button>
        </DialogActions>
      </Dialog>
</div>
</div>
</main>
  );
}
}
export default Inscription;


//            <span style={{color: "red"}}>{this.state.errors["confirm_password"]}</span>

