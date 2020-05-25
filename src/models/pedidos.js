import mongoose, { mongo } from 'mongoose'
import connection from '../config/db/dbConnection'

const Schema = mongoose.Schema

const pedidoSchema = new Schema({
    deal_id: Number,
    nome: String,
    servico: String,
    vlr: Number,
    vlr_unit: Number,
    descricao: String,
    qtde: Number
 })

 const Pedidos = mongoose.model('Pedidos', pedidoSchema)

 export default Pedidos
 