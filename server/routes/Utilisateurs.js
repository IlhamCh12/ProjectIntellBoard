import express from 'express';
import {loginU, getUtilisateurs,getInscriptions, RecupPassword,deleteUtilisateurs, ValidateUtilisateurs, updateUtilisateurs, createUtilisateurs, getOneUser} from '../controllers/Utilisateurs.js'
import pkg from 'express-validator';

const {check, validationResult} = pkg;

const router= express.Router();

router.get('/',getUtilisateurs);
router.get('/Inscrits',getInscriptions);
router.post('/Inscription',createUtilisateurs);
router.put('/Valider/:id',ValidateUtilisateurs);
router.put('/Modifier/:id',updateUtilisateurs);
router.get('/:id',getOneUser);
router.delete('/Supprimer/:id',deleteUtilisateurs);
router.post('/login',loginU);
router.post('/MPO',RecupPassword );
export default router;