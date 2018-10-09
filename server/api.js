const BgRoute = "\x1b[45m\x1b[1m%s\x1b[0m";
const FgYellow = "\x1b[33m\x1b[1m";
const BgBlue = "\x1b[44m\x1b[1m\x1b[37m";
const star =()=>console.log(FgYellow,'*'.repeat(50));
const line =(obj)=>console.log(BgBlue,'-'.repeat(50),{obj});
const loc = (str) => {console.log(BgRoute,"hit "+ str); star();}

// use destructuring for clarity
const { User, } = require('./models')


module.exports = { 
// renders
    index: (req,res)=>{ loc('index');res.render('index') },
    landing: (req,res)=>{ loc('landing');res.render('landing') },

// operations
    register:   (req,res)=>{ loc('register');
                if(req.body.password != req.body.password_conf){
                    console.log('Passwords do not match');                
                    // req.flash('Password mismatch', 'Passwords do not match');
                    res.redirect('/')
                }
                else{
                    User.create(req.body)
                    .then(user =>{ loc('success'); line(user);
                        res.redirect('/landing');
                    })
                    .catch(err => { loc('error');
                        for(let key in err.errors){ 
                            console.log(key,'!==> :', err.errors[key].message);  
                            // req.flash(key, err.errors[key].message);
                        }
                        res.redirect('/');
                    })
                }},
    login:  (req,res)=>{ loc('login');
// email and pass should be run against validator <here>
            User.findOne({  email:req.body.email, password: req.body.password   })
                .then(  user=>{
                    if(user!= null){
                        loc('success');
                        console.log("user :", user);
                        // req.session.whatever = true;
                        res.redirect('/landing');    
                    }
                    else{
                        loc('failure - could not find anything');
                        console.log("user :", user);
                        // req.flash('login', 'Email or password did not match our records');
                        res.redirect('/');
                    }
                })
                .catch(err=>{
                    loc('error')
                    console.log("err: ",err);
                    res.redirect('/');
                })
            },

}

