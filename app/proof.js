const express=require("express");
const multer = require("multer");
const axios=require("axios").default;

const createPost=async()=>
{
    try
    {
        const url="http://localhost:4000/Pedrops/v1/departments"
        const body=
        {
            title:"department5",
            description:"this is department5",
            location:"Burgos",
            published:true,
        };
        const response=await axios.post(url,body)
        console.log(response.data)
        const data = [
            {
                name: "paco",
                apellido: "lópez"
            },
            {
                name: "juan",
                apellido: "pardo"
            },
            {
                name: "david",
                apellido: "visbal"
            },
            {
                name: "rosa",
                apellido: "lopez"
            }
        ]
        
        for (let i in data) {
            
            console.log(data[i]);
        }
        for (let i of data) {
            console.log(i);
        }


    }catch(err){
        console.log(err)
    }

}
createPost();