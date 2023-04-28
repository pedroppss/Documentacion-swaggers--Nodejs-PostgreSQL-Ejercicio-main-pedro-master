const coches = ["peugeot", "ferrari", "porche", "audi", "mercedes"]


coches.forEach(function (verd) {
    const precio = 2 * verd.length;
    console.log("Te voy a cobrar ", precio, "€ por tu ", verd)

})
const precios = coches.map(function (verd) {
    console.log("Mapeo un ", verd)
    return 2 * verd.length
})
console.log("Factura", precios)