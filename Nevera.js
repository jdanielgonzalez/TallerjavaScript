import Electrodomesticos from `./Electrodomesticos.js`;

export class Nevera extends Electrodomestico
{
    constructor(consumo, procedencia, capacidad)
    {
        super(this.consumo,this.precio)
        this.capacidad = capacidad;
        this.precio = this.calcularprecioBase();
    }

    calcularPrecioNevera()
    {
        if(this.capacidad>120)
        {
            this.capacidad = (((this.capacidad-120)*5)/100);
        }
        else
        {
            this.capacidad=0;
        }

        calcularCapacidad()
        {

        }
    }
}