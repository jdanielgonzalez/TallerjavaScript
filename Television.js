import Electrodomesticos from "./Electrodomesticos.js";

export class Television extends Electrodomesticos
{
    constructor(procedencia,consumo,tamaño,isTDT)
    {
        super(procedencia,consumo);
        this.precio=0;
        this.procedencia=procedencia;
        this.consumo=consumo;
        this.tamaño=tamaño;
        this.isTDT=isTDT;
        this.precio=super.calcularPrecioBase();
    }

    calcularPrecioTamaño()
    {
        if(this.tamaño>40)
        {
            this.precio+=this.precio*(30/100);
        }
    }

    calcularPrecioTDT()
    {
        if(this.isTDT===true)
        {
            this.precio+=250000;
        }
    }

    getTamaño()
    {
        return this.tamaño;
    }

    getIsTDT()
    {
        return this.isTDT;
    }

    calcularPrecio()
    {
        this.calcularPrecioTamaño();
        this.calcularPrecioTDT();
        return this.precio;
    }
}