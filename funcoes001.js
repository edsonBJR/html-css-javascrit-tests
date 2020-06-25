const estados = [
    { nome: "Minas Gerais", cidade: "Belo Horizonte" },
    { nome: "São Paulo", cidade: "São Paulo" },
    { nome: "Paraná", cidade: "Curitiba" },
    { nome: "Rio Grande do Sul", cidade: "Porto Alegre" }
]

// Metodo não simplificado
const cidadeBusca = 'São Paulo'

function buscaEstado(cidade) {
    for (let estado of estados) {
        if (estado.cidade == cidadeBusca) {
            return console.log(`${estado.nome} e sua capital ${estado.cidade}`)
        }
    }
}
console.log(buscaEstado(estados))

// Metodo simplificado
let checkNomeCidade = (item) => {
    return item.cidade == 'Curitiba'
}

const Cidades =
    estados.filter(checkNomeCidade)
console.log(Cidades)