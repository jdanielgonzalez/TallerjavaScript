export default class Electrodomestico{
    constructor(opcProcedencia, consumo){
        this.precio=0;
        this.consumo = consumo;
        this.opcProcedencia = opcProcedencia;
    }
    obtenerValorProcedencia()
    {
        if(this.opcProcedencia=="nacional"){this.precio+=250000;}
        else if(this.opcProcedencia=="importado"){this.precio+=150000;}
        else {console.log("procedencia no valida")}
    }

    obtenerValorConsumo()
    {
        switch(this.consumo)
        {
            case "a":
                this.precio+=450000;
                break;
            
            case "b":
                this.precio+=350000;
                break;
            
            case "c":
                this.precio+=250000;
                break;
            
            default:
                console.log("consumo no definido");
                break
        }
    }

    calcularPrecioBase()
    {
        this.obtenerValorConsumo();
        this.obtenerValorProcedencia();
        return this.precio;
    }
    
}

