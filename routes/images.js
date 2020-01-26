const express = require('express')
const router = express.Router()
const Images = require('../models/images')

//Get ALl
router.get('/', async (req,res)=>{
    try{
        const images = await Images.find()
        if(images.length>0){
            res.json(images[images.length-1].selectedImages)
        }
        else{
            res.json([])
        }
        res.json(images)
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})


//Save All

router.post('/saveSelectedImages', async (req,res)=>{
    const images  = new Images({
        selectedImages : req.body.selectedImages
    })

    try{
        const newImageOrder=await images.save()
        res.status(201).json(newImageOrder)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }

})

module.exports= router
