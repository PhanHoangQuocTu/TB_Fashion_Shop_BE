const account = require('../models/account.js')

class authController  {
    index(req, res, next){
        return res.send('hello world')
    }

    login(req, res, next)  {
        // var username = req.query.username;
        // var password = req.query.password;
        var username = req.body.username;
        var password = req.body.password;
        console.log(req.query)
        // return res.json(req.body)
        account.findOne({
            username: username,
            password: password
        })
            .then(data => {
                console.log(data)
                if (data) {
                    // console.log(123123)
                  return  res.json(data)
                }
                else {
                    return res.json("sai tai khoan hoac mat khau")
                }
            })
            .catch(err => {
                return res.status(500).json('error')
            })
    }
}

module.exports = new authController()