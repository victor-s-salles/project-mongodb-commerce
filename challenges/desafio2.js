db.produtos.find({}, {
    nome: 1,
    _id: 0,
    vendidos: 1,
}).sort({
    vendidos: 1,
});