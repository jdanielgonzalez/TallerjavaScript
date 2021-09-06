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
        this.precio+=this.precio*(Number.parseInt((this.capacidad-120)/10))*(5/100);
    }

    calcularPrecio()
    {
        if(this.capacidad>120)
        {
            this.calcularPrecioConsumo();
        }
        return this.precio;
    }
}