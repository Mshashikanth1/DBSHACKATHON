
const regdb=require("./dbschema")

exports.signup=(req,res)=>{
    const {username ,password ,email}=req.body

    regdb.findOne({email:email}).then((data,err)=>{
        if(data){
            res.status(400).json({msg:"user already exist"})
        }
        else{
            const user={username,password,email}
            regdb.insertMany(user).then((data,err)=>{
                if(err){
                    res.status(400).json({msg:"ok"})
                }
                else{
                    res.status(200).json({msg:"user registered succesfully"})
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
    })
}

exports.login=(req,res)=>{
    const {username,password,email}=req.body

    regdb.findOne({email:email}).then((data,err)=>{
        if(data){
            if(data.password===password){
                res.status(200).json({msg:"user logged in succesfully"})
            }
            else{
                res.status(400).json({msg:"incorrect password"})
            }
        }
        else{
            res.status(400).json({msg:"user doesnot exist"})
        }
    })
}


exports.profile=(req,res)=>{
    const {username,password,email}=req.body

    regdb.findOne({email:email}).then((data,err)=>{
        if(data){
            res.status(200).json({userdata:data})
        }
        else{
            res.status(400).json
        }
    })
}


exports.stocks=(req,res)=>{
    const {stock_id,stock_name,stock_price}=req.body

    const stocks_data={stock_id,stock_name,stock_price}
    regdb.findOne({stock_id:stock_id}).then((err,data)=>{
        if(data){
            res.status(400).json({stocks_data})
        }
        else{
            // const user={stock_id,stock_name,stock_price}
            regdb.insertMany(stocks_data).then((data,err)=>{
                if(err){
                    res.status(400).json({msg:"ok"})
                }
                else{
                    res.status(200).json({stocks_data})
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
    })
}



