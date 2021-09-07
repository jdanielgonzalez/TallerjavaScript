import Electrodomestico from "./Electrodomesticos.js";
import {Inventario} from "./Inventario.js";
import {Nevera} from "./Nevera.js";
import {Television} from "./Television.js";
import {Texto} from "./Texto.js";

let lista = new Inventario();
console.log(lista);
let cantidad =[5,10,7,13,3,8,12]
let menu = new Texto();
let opcion="";

let totalapagar=0;

while(opcion!==null)
{
    opcion=prompt(menu.menuPrincipal(),"0");
    switch(opcion)
    {
        case "1":
            let p1;
            let n=0;
            do
            {
                p1=prompt(menu.Productos());
                if(p1==="1")
                    {
                    n = prompt("Cuantos desea compar: \n");
                    n= parseInt(n)
                    totalapagar+=lista[0].getPrecio()*n;
                    console.log(totalapagar);
                    }

                else if(p1==="2")
                    {
                        n = prompt("Cuantos desea compar: \n");
                        n=parseInt(n);
                        totalapagar+=lista[1].getPrecio()*n;
                    }

                else if(p1==="3")
                    {
                        n = prompt("Cuantos desea compar: \n");
                        n=parseInt(n);
                        totalapagar+=lista[2].getPrecio()*n;
                    }

                else if(p1==="4")
                    {
                        n = prompt("Cuantos desea compar: \n");
                        n=parseInt(n);
                        totalapagar+=lista[3].getPrecio()*n;
                    }

                else if(p1==="5")
                    {
                        n = prompt("Cuantos desea compar: \n");
                        n=parseInt(n);
                        totalapagar+=lista[4].getPrecio()*n;
                    }

                else if(p1==="6")
                    {
                        n = prompt("Cuantos desea compar: \n");
                        n=parseInt(n);
                        totalapagar+=lista[5].getPrecio()*n;
                    }

                else if(p1==="7")
                    {
                        n = prompt("Cuantos desea compar: \n");
                        n=parseInt(n);
                        totalapagar+=lista[6].getPrecio()*n;
                    }
            }
            while(p1!="0");
            break;

        case "2":
            let p2=1;
            while(p2!=="0")
            {                
                p2=prompt("Total a pagar: "+totalapagar+"$ \n"+"ingrese 0 para regresar:");
            }
            break;
        
        case "0":
            opcion=null;
            break;

        default:
            break;
    }
}


