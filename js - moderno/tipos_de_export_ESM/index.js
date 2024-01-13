import { inline } from "./inline.js"
import defaultInline from "./inline.js"
import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js"
//exportar na mesma linha que voce cria o que você irá exportar
inline()
//export padrão para para apenas 1 elemento do modulo
defaultInline()
//exporta separadamente do inicialização do elemento, geralmente no final do arquivo
group()
//
exportDefault()