export class Texto
{
    constructor()
    {
        this.menu="";
    }

    menuPrincipal()
    {
        this.menu="";
        this.menu =this.menu.concat("*************Bienvenido**************\n"+
        "1. Comprar\n"+
        "2. Factura\n"+
        "3. Ver inventario\n"+
        "0. Salir\n"+
        "\n"+ "ingrese una opcion:");
        return this.menu;
    }

    verificarConsumo(consumo)
    {    
        this.consumo=consumo;
        let malconsumo=true;
        while(malconsumo)
        {
            if(this.consumo!="a" && this.consumo !="b" && this.consumo!="c")
            {
                alert("ingresaste mal el consumo!!")
                this.consumo=prompt(this.menuConsumo());
                this.consumo=this.consumo.toLowerCase();
            }
            else
            {
                malconsumo=false;
                return this.consumo;
            }
        }
        
    }

    verificarProcedencia(procedencia)
    {    
        this.procedencia=procedencia;
        let malprocedencia=true;
        while(malprocedencia)
        {
            if(this.procedencia!="nacional" && this.procedencia !="importado")
            {
                alert("ingresaste mal la procedencia!!")
                this.procedencia=prompt(this.menuProcedencia());
                this.procedencia=this.procedencia.toLowerCase();
            }
            else
            {
                malprocedencia=false;
                return this.procedencia;
            }
        }
        
    }

    verificarOpcion(Opcion)
    {    
        this.Opcion= Opcion;
        let malOpcion=true;
        while(malOpcion)
        {
            if(this.Opcion!="1" && this.Opcion!="2")
            {
                alert("ingresaste mal la opcion!!")
                this.Opcion=prompt(this.menuIsTDT());
            }
            else
            {
                malOpcion=false;
                return this.Opcion;
            }
        }
        
    }

    verificarTamaño(Opcion)
    {  
        this.Opcion= Opcion;
        Opcion=parseInt(Opcion,10);
        let malOpcion=true;

        while(malOpcion)
        {
            if(!Number.isInteger(Opcion))
            {
                alert("tamaño no valido")
                this.Opcion=prompt(this.menuTamaño());
                Opcion=parseInt(Opcion,10);
            }
            else
            {
                malOpcion=false;
                return this.Opcion;
            }
        }
        
    }


    Productos()
    {
        this.menu="";
        this.menu =this.menu.concat("Que articulo desea compar: \n"+
        "1. Electrodomesticos nacionales de consumo B\n"+
        "2. Neveras nacionales de consumo A\n"+
        "3. TVs internacinales de consumo C\n"+
        "4. TVs internacinales de consumo B\n"+
        "5. Tvs nacionales de consumo A\n"+
        "6. Elcetrodomesticos nacionales de consumo A\n"+
        "7. Nevereas internacionales de consumo C\n"+
        "0. para terminar\n"+
        "\n"+ "ingrese una opcion:");
        return this.menu;
    }
}