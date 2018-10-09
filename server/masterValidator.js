// MasterValidator
// password regex from https://stackoverflow.com/a/21456918/9693249
// name regex from https://stackoverflow.com/a/43935285/9693249

const MasterValidator = {
    pw1 : 
        {
            validator : (password) => { return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/.test(password)  },
            description: 'Minimum 8 letters and numbers only!'
        },
    pw2 : 
        {
            validator : (password) => { return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/.test(password)  },
            description: 'Minimum 8 characters, 1 : { letter, number, special character }'
        },
    pw3 : 
        {
            validator : (password) => { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/.test(password)  },
            description: 'Minimum 8 characters, 1 : { uppercase, lowercase, number }'
        },
    pw4 : 
        {
            validator : (password) => { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/.test(password)  },
            description: 'Minimum 8 characters, 1 : { uppercase, lowercase, number, special character }'
        },
    pw5 : 
        {
            validator : (password) => { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password)  },
            description: 'Minimum 8 and maximum 10 characters, 1 : { uppercase, lowercase, number, special character }'
        },
    emailValidator :
                {
                    validator : (email) => { return /^[A-Za-z-0-9-_]+(.[A-Za-z-0-9-_]+)*@[A-Za-z-0-9-_]+(.[A-Za-z-0-9-_]+)*(.[A-Za-z]{2,})$/.test(email)  },
                    description: 'Invalid email'
                },
    alphaOnly :
            {
                validator : (str) => { return /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(str) },
                description : 'Only letters are allowed in names'
            },    
}

module.exports = ()=>{    
    return MasterValidator;
}