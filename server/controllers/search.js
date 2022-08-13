const express = require("express")
const router = express()
const connection = require("./mysql")


exports.search = async(req, res) => {
    console.log(req.body)
    let Division = req.body.search

    let sql = `SELECT Division, max(time) AS time, PM25, Average_Temperature, Season FROM final_train_data_t WHERE Division = "${Division}"`
    connection.query(sql, (err, result)=>{
        try{
            if(err) throw err;
            console.log(result)
            let aqiCard = result 
            console.log(aqiCard)           
            res.render("home", {aqiCard})
        }
        catch(err){
            console.log(err)
            res.send(err)
        }
    })

    
}
  