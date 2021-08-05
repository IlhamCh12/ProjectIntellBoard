import UtilisateurModel from '../models/Utilisateurs.js';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import randomstring from 'randomstring';
//import authorize from '../middleware/auth.js';


//--------------------------------------Envoi des Emails -----------------------------

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'intellBoard2021@gmail.com',
      pass: 'Intellcap'
    },
    tls: {
        rejectUnauthorized: false
    }

  });


//----------------------------Lister les utilisateurs from la base de donées -----------------------------

export const getUtilisateurs= async (req,res) =>{
    try {
      const t = await UtilisateurModel.find({'valide': true, 'isAdmin' : false});
        res.status(201).json(t);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

//----------------------------Récuperer un utilisateur par son ID (email)-----------------------------

export const getOneUser= async (req,res) =>{
    try {
      const t = await UtilisateurModel.findById(req.params.id);
        res.status(201).json(t);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

//----------------------------Récuperer un utilisateur par son ID (email)-----------------------------

export const getInscriptions= async (req,res) =>{
    try {
      const t = await UtilisateurModel.find({'valide': false, 'isAdmin' : false});
        res.status(201).json(t);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};
//----------------------------Créer un nouveau utilisateur  -----------------------------
export const createUtilisateurs= async (req,res) =>{
    
    try {
        if(req.body.password===req.body.confirm_password)
        {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newUtili = new UtilisateurModel( {_id : req.body.email, nom: req.body.last_name ,prenom : req.body.first_name, statut:req.body.statut ,password: req.body.password, });
            await newUtili.save();
        }else{
            req.flash("error", "Invalid form...");
            res.redirect("error", "http://localhost:3000/Inscription");
        }

          
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};
//----------------------------Mise à jour d'un utilisateur-----------------------------
export const updateUtilisateurs= async (req,res) =>{
    try {
        const { axes,  nom, prenom, statut } = req.body;
        console.log(axes)
        console.log(req.params.id)
        console.log(req.body.statut)

        UtilisateurModel.findByIdAndUpdate( req.params.id, {axes: axes, nom: nom, prenom: prenom, statut:  statut}).exec();
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};
//----------------------------Valider les inscriptions des utilisateurs et envoie de message de validation-----------------------------
export const ValidateUtilisateurs= async (req,res) =>{
    try {
        const { axes, valide } = req.body;
        UtilisateurModel.findByIdAndUpdate( req.params.id, {axes: axes, valide: valide}).exec();
        
          
          var mailOptions = {
            from: 'intellBoard@outlook.com',
            to: req.params.id,
            subject: 'Validation du compte IntellBoard',
            html: "<h4>Bonjour!</h4> <br>Votre inscription à l'outil IntellBoard a été validée par l'administarteur. Afin de se connecter veuillez utiliser votre adresse email et votre mot de passe"
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};
//----------------------------Suppression d'un utilisateur-----------------------------
export const deleteUtilisateurs= async (req,res) =>{
    try {
        UtilisateurModel.findByIdAndRemove(req.params.id).exec();
        res.redirect('http://localhost:3000/BackOffice');
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

//----------------------------authentification d'un utilisateur (l'admin se derige vers le BackOffice)-----------------------------
export const loginU= async (req,res,next) =>{
   
    const { email, password, admin} = req.body;
    try {
       
        var user = await UtilisateurModel.findOne({ _id: email }).exec();

        if(!user) {
            
             var redir= {redirect : "invalidUser"};
             return res.json(redir);

        }else{

            if(!bcrypt.compareSync(password, user.password)) 
            {   
                var redir= {redirect : "incorrectPass"};
                return res.json(redir);
            }
            else{
                if((admin== 'admin') && (user.isAdmin== true))
                {
                    var redir= {redirect : "connectionAdmin"}
                    return res.json(redir);

                }
                else
                {
                    var redir= {redirect : "connection"};
                    return res.json(redir);
                    
                }
            }
            
        }

    } catch (error) {

        res.send(error);
    }

};
//----------------------------recupération d'un nouveau mot de passe à travers l'email----------------------------
export const RecupPassword= async (req,res) =>{
    try {
        var user = await UtilisateurModel.findOne({ _id: req.body.email }).exec();
        var pass = randomstring.generate(10);
        var mailOptions = {
            from: 'intellBoard@outlook.com',
            to: req.body.email,
            subject: 'Réintialisation du mot de passe  ',
            html: "<h4>Bonjour!</h4> Votre nouveau mot de passe est : <B>" + pass +"</B>",
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              UtilisateurModel.findByIdAndUpdate( req.body.email, {password: bcrypt.hashSync(pass, 10)}).exec();
              return res.redirect('http://localhost:5000/Utilisateurs/'); 
            }
          });
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};