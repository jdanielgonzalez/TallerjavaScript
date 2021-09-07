import Electrodomesticos from "./Electrodomesticos.js";

export class Nevera extends Electrodomesticos
{
   constructor(procedencia,consumo,capacidad)
   {
       super(procedencia ,consumo);
       this.precio=0;
       this.procedencia=procedencia;
       this.consumo=consumo;
       this.capacidad=capacidad;
       this.precio=super.calcularPrecioBase();
    }

    calcularPrecioConsumo()
    {
        if(this.capacidad>120)
        {
            this.precio+=this.precio*(Number.parseInt((this.capacidad-120)/10))*(5/100);
        }
    }

    validardatos()
    {
        if(Number.isInteger(this.capacidad)===false){return false;}
        if(Number.isInteger(this.capacidad)===true){return true;}
    }

    calcularPrecio()
    {
        let isValido=this.validardatos();
        if(isValido===false)
        {
            return "se ingresaron mal los parametros";
        }
        else if(isValido===true)
        {
            this.calcularPrecioConsumo();
            return this.precio;
        }
        
    }
}