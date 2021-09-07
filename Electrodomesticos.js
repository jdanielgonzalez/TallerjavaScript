export default class Electrodomestico{

    constructor(opcProcedencia, consumo){
        this.precio=0;
        this.consumo = consumo;
        this.opcProcedencia = opcProcedencia;
    }

    obtenerValorProcedencia()
    {
        switch(this.opcProcedencia)
        {
            case "nacional":
                this.precio+=250000;
                break;

            case "importado":
                this.precio+=350000;
                break;

            default:
                console.log("procedencia no definido");
                break;
        }
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

    getConsumo()
    {
        return this.consumo;
    }
    getProcedencia()
    {
        return this.opcProcedencia;
    }
    
    
}

