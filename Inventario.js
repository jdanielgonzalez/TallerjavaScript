import Electrodomestico from "./Electrodomesticos.js";
import { Nevera } from "./Nevera.js";
import { Television } from "./Television.js";
import { Texto } from "./Texto.js";

export class Inventario
{
    constructor()
    {
        let lista=[];
        
        let Elecnb= new Electrodomestico("nacional","b");
        Elecnb.calcularPrecioBase();
        lista.push(Elecnb);

        let Nevna= new Nevera("nacional","a","120");
        lista.push(Nevna);

        let Tvic= new Television("importado","c",40,true);
        lista.push(Tvic);

        let Tvib= new Television("importado","b",40,true);
        lista.push(Tvib);

        let Tvna= new Television("nacional","a",40,true);
        lista.push(Tvna);

        let Elecia= new Electrodomestico("importado","a");
        Elecia.calcularPrecioBase();
        lista.push(Elecia);

        let Nevic= new Nevera("importado","c","120");
        lista.push(Nevic);

        return lista;
    }
}