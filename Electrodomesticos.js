module.exports = class Electrodomestico{
    constructor(opcProcedencia, consumo){
        this.consumo = consumo;
        this.opcProcedencia = opcProcedencia;
        this.precio = this.obtenerValorConsumo()+this.obtenerValorProcedencia();
    }
    obtenerValorProcedencia()
    {
        let resultado = this.opcProcedencia === `Nacional` ? 250000 : 350000;
        return resultado;
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
            console.log("consumo no definido");
        }
    }
}

