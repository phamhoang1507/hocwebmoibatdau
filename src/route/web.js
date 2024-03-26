import express from "express";
import homecontroller, { getHomePage } from "../controllers/homecontroller";
let router =express.Router();

let initWebRoutes=(app)=>{
    router.get("/",homecontroller.getHomePage);

    router.get("/about",homecontroller.getAboutPage);

    router.get("/vip",(req,res)=>
    {
       return res.send('Hello HoangVIP') 
    });
    return app.use("/",router);
}

module.exports= initWebRoutes;