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
        "1. Ingresar inventario\n"+
        "2. Crear Factura\n"+
        "3. Ver inventario\n"+
        "0. Salir\n"+
        "\n"+ "ingrese una opcion:");
        return this.menu;
    }

    menuAgregarInventario()
    {
        this.menu="";
        this.menu =this.menu.concat("Seleccione el tipo de Electrodometico a agregar:\n"+
        "1. Electrodomestico\n"+
        "2. TV\n"+
        "3. nevera\n"+
        "0. Salir\n"+
        "\n"+ "ingrese una opcion:");
        return this.menu;
    }

    menuConsumo()
    {
        this.menu="";
        this.menu =this.menu.concat("Seleccione el consumo: \n"+
        "A\n"+
        "B\n"+
        "C\n"+
        "0. Salir\n"+
        "\n"+ "ingrese una opcion:");
        return this.menu;
    }

    menuProcedencia()
    {
        this.menu="";
        this.menu =this.menu.concat("Seleccione la procedencia: \n"+
        "Nacional\n"+
        "Importado\n"+
        "0. Salir\n"+
        "\n"+ "ingrese una opcion:");
        return this.menu;
    }

    menuTamaño()
    {
        this.menu="";
        this.menu =this.menu.concat("Ingrese el tamaño: \n"+
        "0. Salir\n");
        return this.menu;
    }

    menuIsTDT()
    {
        this.menu="";
        this.menu =this.menu.concat("Tiene codificacion TDT: \n"+
        "1. si\n"+
        "2. no\n"+
        "0. Salir\n");
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
}