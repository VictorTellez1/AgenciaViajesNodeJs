import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";
const paginaInicio=async (req,res)=>{
    //Consultar 3 viajes del modelo viaje
    const promiseDB=[]
    try {
        

        const [viajes,testimoniales]=await Promise.all([
            Viaje.findAll({limit:3}),
            Testimonial.findAll({limit:3})
        ])
        res.render('inicio',{
            pagina:'Inicio',
            clase:'home',
            viajes,
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros=(req,res)=>{
    const viajes="Viaje a Alemania"
    res.render('nosotros',{
        pagina:"Nosotros",
        viajes
    })   
}


const paginaViajes=async (req,res)=>{
    //Consultar los viajes 
    const viajes=await Viaje.findAll();
    res.render('viajes',{
        pagina:"Proximos Viajes",
        viajes
    })
}


const paginaTestimoniales=async (req,res)=>{
    try {
        const testimoniales=await Testimonial.findAll();
        res.render('testimoniales',{
            pagina:"Testimoniales",
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
}


//mustra un viaje por su slug
const paginaDetalleViaje = async (req,res)=>{
    const {viaje}=req.params
    try {
        const resultado=await Viaje.findOne({where:{slug:viaje}})
        res.render('viaje',{
            pagina:"Informacion viaje",
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}