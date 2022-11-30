import express from 'express'
import { paginaInicio } from '../controllers/paginasController.js';
import { paginaNosotros } from '../controllers/paginasController.js';
import { paginaViajes,paginaTestimoniales,paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';
const router=express.Router(); //Utilizar el router de express

router.get('/',paginaInicio)

router.get('/nosotros',paginaNosotros)


router.get('/viajes',paginaViajes)
router.get('/viajes/:viaje',paginaDetalleViaje)


router.get('/testimoniales',paginaTestimoniales)
router.post('/testimoniales',guardarTestimonial)


export default router; //Necesitas exportarlo para usarlo en el index.js general con app