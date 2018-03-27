const axios = require("axios");

let toys = [];
let newId = "9999999999";

module.exports = {
    getToys: (req,res) => {
        if (!toys.length) {
            axios.get("http://www.amiiboapi.com/api/amiibo").then( response => {
                toys = response.data.amiibo
                console.log(response.data.amiibo)    
                res.status(200).json(toys)
                })
        } else {
            res.status(200).json(toys) 
        }
    },
    postToys: (req,res) => {
        const {name,amiiboSeries} = req.body;
        toys.push({name, amiiboSeries, head: newId, tail: newId});
        newId++;
        res.status(200).json(toys);
    },
    updateToys: (req,res) => {
        const {id} = req.params;
        const {name, amiiboSeries} = req.body;
        toys.forEach(e => {
            if(e.url.split("/")[5] === id){
                e.name = name;
                e.amiiboSeries = amiiboSeries;
            }
        })
    },
    deleteToys: (req,res) => {
        const{id} =req.params;
            let index = toys.findIndex(e => e.url.split('/')[5]===id);
            toys.splice(index,1);
            res.status(200).json(characters);
    }

}