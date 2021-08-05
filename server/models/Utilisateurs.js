
import mongoose from 'mongoose';

const UtilisateurSchema = mongoose.Schema({
    _id :String,
    nom : String,
    prenom : String,
    statut : String,
    password : String,
    isAdmin : {type:Boolean, default: 0},
    axes: [String] ,
    valide : {type:Boolean, default: 0},
});


const UtilisateurModel = mongoose.model('UtilisateurModel', UtilisateurSchema);

export default UtilisateurModel;
