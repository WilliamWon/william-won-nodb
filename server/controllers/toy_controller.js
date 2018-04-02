const axios = require("axios");

let toys = [];
let newHead = 999999;
let newTail = 999999999999999;
module.exports = {
    getToys: (req,res) => {
        if (!toys.length) {
            axios.get("http://www.amiiboapi.com/api/amiibo").then( response => {
                toys = response.data.amiibo
                // console.log(response.data.amiibo)    
                res.status(200).json(toys)
                })
        } else {
            res.status(200).json(toys) 
        }
    },
    postToys: (req,res) => {
        const {name,amiiboSeries,image} = req.body;
        toys.push({name, amiiboSeries, head: newHead.toString(), tail: newTail.toString(), image});
        newHead++;
        newTail++;
        res.status(200).json(toys);
    },
    updateToys: (req,res) => {
        const {id} = req.params;
        const {name, amiiboSeries} = req.body;
        toys.forEach(e => {
            if(e.head.concat(e.tail).toString() === id){
                e.name = name;
                e.amiiboSeries = amiiboSeries;
            }
        })
        res.status(200).json(toys);
    },
    deleteToys: (req,res) => {
        const {id} =req.params;
        let index = toys.findIndex(e => {
            return e.head.concat(e.tail).toString() == id
        });
        toys.splice(index,1);
        res.status(200).json(toys);
    }

}