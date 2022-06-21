const PersonaModelo = require('./PersonaModelo');

class Cliente extends PersonaModelo {

    #cuentas_por_cobrar;

    constructor(nombre, apellido, estado, cuentas_por_cobrar, antiguedad) {
        super(nombre,apellido,estado);
        this.#cuentas_por_cobrar = cuentas_por_cobrar;
        this.antiguedad = antiguedad;
    }

    get #getCuentasPorCobrar() {
        return this.cuentas_por_cobrar;
    }

    set setCuentasPorCobrar(cuentas_por_cobrar) {
        this.cuentas_por_cobrar = cuentas_por_cobrar;
    }

    enviarMensaje(){
        if(this.#calcularMorosidad()){
            texto = 'buenas tardes señor, usted debe demasiado'
        }else{
            texto = 'buenas tardes señor, gracias por estar al dia en sus pagos'
        }
        return texto
    }

    #calcularMorosidad(){
        if(this.estado = True && this.#getCuentasPorCobrar() >= 1000){
            console.log('usted debe muchoooo')
            morosidad = True
            // FLAG
        }else{
            morosidad = False
        }
        return morosidad
    }
}

module.exports = Cliente;