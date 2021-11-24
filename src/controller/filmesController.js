const FilmesSchema = require('../models/filmesSchema')
const mongoose = require('mongoose')
const { json } = require('express')

const getAll = async (req, res) => {
    try {
        const filmes = await FilmesSchema.find()
        res.status(200).json(filmes)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const createFilme = async (req, res) => {
    try{

      const newFilm = new FilmesSchema({
       
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        _id: new mongoose.Types.ObjectId() 
     })
        
     const savedFilm = await newFilm.save()
        res.status(200).json({
              message: "FILME ADICIONADO",
              savedFilm
          })
        
        
    } catch (erro) {
        res.status(500).json({
            message:erro.message
        })

    }
}
const updateFilmById = async (req, res) => {
    try {
        
        const findFilm = await FilmesSchema.findById(req.params.id)
        if (findFilm){
        findFilm.author = req.body.year|| findFilm.year
        findFilm.title = req.body.title || findFilm.title
        }
        console.log('Filme adicionado', findFilm )
        res.status(200).json({
            message:"Filme atualizado",
            savedFilm
        })
        const savedFilm = findFilm.save()
    } catch (error) {
        
    }
}


module.exports = {
    getAll,
    createFilme,
    updateFilmById
}