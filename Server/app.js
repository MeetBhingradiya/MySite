// ? Modules ----------------------------------------------------------------------------------------
const Express                          = require('express');
const SESSION                          = require('express-session');
const MySql                            = require('mysql');
const cors                             = require('cors');
const bodyParser                       = require('body-parser');
const Crypto                           = require('crypto');
const BCrypt                           = require('bcrypt');
const CookieParser                     = require('cookie-parser');
const { reset }                        = require('nodemon');
// ? ------------------------------------------------------------------------------------------------
// ! Variables --------------------------------------------------------------------------------------
const app                              = Express();
const Port                             = 2002;
const Host                             = 'localhost';
const User                             = 'root';
const Password                         = '';
const database                         = 'teamsm';
const multipleStatements               = true;
const ConnectionLimit                  = 10;
// ! ------------------------------------------------------------------------------------------------
// TODO: Import Files -------------------------------------------------------------------------------
// TODO: --------------------------------------------------------------------------------------------
// TODO: Function -----------------------------------------------------------------------------------

// Password Encrypter
function Encrypt(NormalPassword)
    {
        // Layer 1
        const Salt1 = "szd64871g8fds4t9eb4sd65gbt6bdf65g4b1y7"
        const Layer1PasswordHash1 = Crypto.createHash('md5').update(NormalPassword).digest();
        const Layer1PasswordHashString = Layer1PasswordHash1.toString('hex');
        const Layer1PasswordSalt = `${Salt1}${Layer1PasswordHashString}${Salt1}`;
        const Layer1PasswordHash2 = Crypto.createHash('SHA1').update(Layer1PasswordSalt).digest();
        const Layer1PasswordHash2String = Layer1PasswordHash2.toString('hex');
        // Layer 2
        const Salt2 = "sdoitj1hdf8yh618drt68df2h15g4hr1t4t2y"
        const Layer2PasswordHash1 = Crypto.createHash('sha256').update(Layer1PasswordHash2String).digest();
        const Layer2PasswordHashString = Layer2PasswordHash1.toString('hex');
        const Layer2PasswordSalt = `${Salt2}${Layer2PasswordHashString}${Salt2}`;
        const Layer2PasswordHash2 = Crypto.createHash('sha512').update(Layer2PasswordSalt).digest();
        const Layer2PasswordHash2String = Layer2PasswordHash2.toString('hex');
        // Layer 3
        const Salt3 = "91ertb7st98yseytyb4ty65by91se8vbt2ysd98"
        const Layer3PasswordHash1 = Crypto.createHash('SHA1').update(Layer2PasswordHash2String).digest();
        const Layer3PasswordHashString = Layer3PasswordHash1.toString('hex');
        const Layer3PasswordSalt = `${Salt3}${Layer3PasswordHashString}${Salt3}`;
        const Layer3PasswordHash2 = Crypto.createHash('md5').update(Layer3PasswordSalt).digest();
        const Layer3PasswordHash2String = Layer3PasswordHash2.toString('hex');
        // Layer 4
        
        // Layer 5
        // Layer 6
        // Layer 7
        // Layer 8
        // Layer 9
        // Layer 10
        const LastPassword = Layer3PasswordHash2String;
        const Password = LastPassword;
        return Password
    }
// TODO: --------------------------------------------------------------------------------------------
// * APIS -------------------------------------------------------------------------------------------
// ! Stats ------------------------------------------------------------------------------------------
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CookieParser());
app.use(cors({
    origin:["http://localhost:2004"],
    methods: ['GET','POST'],
    credentials: true
}));
app.use(SESSION({
    key:"UserData",
    secret:"MyWebsite",
    resave:false,
    saveUninitialized:false,
    cookie: {
        expires : 60 * 60 * 2
    }
}))

// ! ------------------------------------------------------------------------------------------------
// ! MySql Connection
const MySqlDatabase                    = MySql.createConnection({host: Host,user:User,password:Password,database:database,multipleStatements:true,ConnectionLimit: ConnectionLimit})
MySqlDatabase.connect((error) => {
    if(error)
        {
            try
                {
                    throw new error('MySql Server Error');
                }
            catch (error) 
                {
                    console.log('Error connecting to MySql Server');
                }
        }
    else
        {
            // ? Server Port Lisner
            app.listen(Port, () => {console.log('-> Server listening on port ' + Port + ' -> MySql Server Connected')});
        }
})


// ? Systems ----------------------------------------------------------------------------------------
//! Password Encrypter
// ! Login System
app.post('/Login',(req, res) => {
    const email = req.body.email;
    const validpassword = req.body.password;
    const password = Encrypt(validpassword);
    const AccountFind1 = 'SELECT * FROM users WHERE user_email=? AND user_password=?';
        MySqlDatabase.query(AccountFind1,[email,password],(error,result)=>{
            if(error)
                {
                    res.status(500).send(error);
                    console.log(error);
                }
            else if(result) 
                {
                    if(result.data = ["0"])
                        {
                            req.session.user = result;
                            res.send(result);
                        }
                    else
                        {
                            res.send(`"message" Wrong Email or Password`);
                        }
                }
            else
                {
                    res.send(`""message" :" User Not Found"`);
                }
        })}
    )
// ! Signup System
// ! Friends System
// ! Feedback,Report,Issue System
// ? ------------------------------------------------------------------------------------------------
// ? Role Data --------------------------------------------------------------------------------------
// ! Admin Connection
    // ! SQL Installer
    // ! SQL UnInstaller
    // ! User Blocker
    // ! Admin CURD Penel
// ! Modrator Connection
    // ! User And Vip Blocker
// ! Vip Connection
// ! User Connection
// ? ------------------------------------------------------------------------------------------------
// ? Snippets ---------------------------------------------------------------------------------------
// ! SESSION API
app.get('/auth/login/verify',(req,res)=>{
    if(req.session.user)
        {
            res.send({ Auth : true, user : req.session.user});
        }
    else
        {
            res.send({ loggedIn : false});
        }
})
// ! EMAIL TOKEN API
// ! ACCESS TOKEN API
// ! EMAIL TOKEN EXPIRE API
// ! SAVE SESSION API
// ! MULTIPLE Accounts API
// ! GOOGLE,GITHUB,FACEBOOK,PINTREST, Account ACCESS API
// ! Wallet API
// ! Error Handler API
    // 404 Error API
    app.use(function(req,res){
        res.type('text/html');
        res.status(404);
        res.send('404 Page Not Found');
    })
// ? ------------------------------------------------------------------------------------------------
// * ------------------------------------------------------------------------------------------------
// TODO: Export Files -------------------------------------------------------------------------------
// TODO: --------------------------------------------------------------------------------------------