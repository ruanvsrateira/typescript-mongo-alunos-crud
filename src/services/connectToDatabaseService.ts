import { connect } from 'mongoose';
import app from '../app';

export default async function() {
    connect("mongodb+srv://ruanvsrateira:Senac123@cluster0.ragks.mongodb.net/Users?retryWrites=true&w=majority").then(() => app.emit("database_on"))
}