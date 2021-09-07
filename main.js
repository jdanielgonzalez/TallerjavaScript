import Electrodomestico from "./Electrodomesticos.js";
import {Nevera} from "./Nevera.js";
import { Television } from "./Television.js";
import { Texto } from "./Texto.js";

let inventarioElc = [];
let inventarioTv  = [];

let menu = new Texto();
let opcion="";

while(opcion!==null)
{
    opcion=prompt(menu.menuPrincipal(),"0");
    switch(opcion)
    {
        case "1":
            let item=prompt(menu.menuAgregarInventario());
            //electrodomesticos
            if(item==="1")
            {
                let consumo=prompt(menu.menuConsumo());
                consumo=consumo.toLowerCase();
                consumo=menu.verificarConsumo(consumo);

                let procedencia=prompt(menu.menuProcedencia());
                procedencia=procedencia.toLowerCase();
                procedencia=menu.verificarProcedencia(procedencia);

                let Elec = new Electrodomestico(procedencia,consumo);
                inventarioElc.push(Elec);
            }

            if(item==="2")
            {
                alert("aqui");
                let consumo=prompt(menu.menuConsumo());
                consumo=consumo.toLowerCase();
                consumo=menu.verificarConsumo(consumo);

                let procedencia=prompt(menu.menuProcedencia());
                procedencia=procedencia.toLowerCase();
                procedencia=menu.verificarProcedencia(procedencia);
                
                let tamaño=prompt(menu.menuTamaño());
                tamaño=menu.verificarTamaño(tamaño);

                let IsTDT=prompt(menu.menuIsTDT());
                IsTDT=menu.verificarOpcion(IsTDT,2);

                let Tv = new Television(procedencia,consumo,tamaño,IsTDT);
                inventarioTv.push(Tv);
            }


            opcion=0;
            break;

        case "2":
            alert("facturazion");
            break;

        case "3":
            let s="";
            if(inventarioElc[0] instanceof Electrodomestico)
            {
                for(let i=0; i<inventarioTv.length; i++)
                {
                    s=s.concat("Electrodomestico ");
                    s=s.concat(inventarioElc[i].getConsumo()+" "+inventarioElc[i].getProcedencia());
                    s=s.concat("\n");
                }
            }

            else if(inventarioTv[0] instanceof Television)
            {
                for(let i=0; i<inventarioTv.length; i++)
                {
                    s=s.concat("Tv ");
                    s=s.concat(inventarioTv[i].getConsumo()+" "+inventarioTv[i].getProcedencia()+" "+inventarioTv[i].getTamaño()+" "+inventarioTv[i].getIsTDT());
                    s=s.concat("\n");
                }

            }
            alert(s); 
            break;
        
        case "0":
            opcion=null;
            break;

        default:
            break;
    }
}


