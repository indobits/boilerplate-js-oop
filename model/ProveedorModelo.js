const PersonaModelo = require('./PersonaModelo');

class Proveedor extends PersonaModelo {

    constructor(nombre, apellido, estado, cuentas_por_pagar) {
        super(nombre,apellido,estado);
        this.cuentas_por_pagar = cuentas_por_pagar;
    }

    get getCuentasPorPagar() {
        return this.cuentas_por_pagar;
    }
  
    set setCuentasPorPagar(cuentas_por_pagar) {
        this.cuentas_por_pagar = cuentas_por_pagar;
    }
}

module.exports = Proveedor;