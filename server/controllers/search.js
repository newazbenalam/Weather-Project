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
            let aqiCard = result;
            let color = "green"; 
            console.log(aqiCard)         
            switch (true) {
                case (aqiCard[0].PM25 < 50):
                    color = "green";
                    break;
                case (aqiCard[0].PM25 < 100):
                    color = "yellow";
                    break;
                case (aqiCard[0].PM25 < 150):
                    color = "orange";
                    break;
                case (aqiCard[0].PM25 < 200):
                    color = "crimson";
                    break;
                case (aqiCard[0].PM25 < 300):
                    color = "purple";
                    break;
                case (aqiCard[0].PM25 < 300):
                    color = "brown";
                    break;
                default:
                    color = "rgb(0,128,0)";
                    break;
            }
            console.log(aqiCard[0].PM25)
            res.render("home", {aqiCard, color})
        }
        catch(err){
            console.log(err)
            res.send(err)
        }
    })

    
}
  