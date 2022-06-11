'use strict'

var Inventory = require('../Model/Inventory')

var InventoryController = {
    addInventory: function(req, res){
        var inventory = new Inventory()
        var params = req.body 

        inventory.marca = params.marca
        inventory.cantidad = params.cantidad
        inventory.tipo = params.tipo
        inventory.description = params.description

        inventory.save((err, Save_Invent)=>{
            if(err) return res.status(500).send({message: "error al guardar"})
            if(!Save_Invent) return res.status(404).send({message: 'No se ha podido guardar'})

            return res.status(200).send({
                message: "Producto agregado con exito",
                modelo: Save_Invent
            })
        })
    },

    mostrarItem: function(req, res){
        var Idinventory = req.params.id

        if (Idinventory == null) {
            return res.status(404).send({message:"Infomacion no existe"})
        }

        Inventory.findById(Idinventory, (err, invent)=>{
            if(err) return res.status(500).send({message: "error al devolver el listado"})
            if(!invent) return res.status(404).send({message:"Infomacion no existe"})

            return res.status(200).send({
                invent
            })
        })

    },

    obtenerInventario: function(req, res){
        //sort para ordenar mejor ya sea el campo que sea (siempre y cuando sea numerico). 
        Inventory.find({}).sort('-cantidad').exec((err, inventario)=>{
            if(err) return res.status(500).send({message: "error"})
            if(!inventario) return res.status(404).send({message: "No hay inventario registrados"})
            
            return res.status(200).send({
                inventario
            })
        })
    }, 

    actualizarItem: function(req, res){
        var Idinventory = req.params.id
        var update = req.body

        Inventory.findByIdAndUpdate(Idinventory, update, {new: true}, (err, itemAtualzado)=>{
            if(err) return res.status(500).send({message:'Error al devolver actualizar item'})
            if(!itemAtualzado) res.status(404).send({message: 'item no existe'})

            return res.status(200).send({
                item: itemAtualzado
            })
        })
    },

    BorrarItem: function(req, res){
        var Idinventory = req.params.id

        Inventory.findByIdAndDelete(Idinventory, (err, ItemEliminado)=>{
            if(err) return res.status(500).send({message: "Error Al eliminar registro"})
            if(!ItemEliminado) return res.status(404).send({message: "Informacion no existe"})

            return res.status(200).send({
                message: "Registro Eliminado con Exito",
                item: ItemEliminado
            })
        })
    },

}


module.exports = InventoryController