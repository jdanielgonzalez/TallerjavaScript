import Electrodomestico from "./Electrodomesticos.js";
import {Nevera} from "./Nevera.js";

//let lg = new Electrodomestico("nacional","a");  
//console.log(lg.calcularPrecioBase());

let aceb = new Nevera("nacional","a",100);
console.log(aceb.calcularPrecio());