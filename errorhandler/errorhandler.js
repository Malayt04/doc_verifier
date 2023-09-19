const handleError=(err)=>{
    console.log(err.message,err.code);
    let errors={email:'',password:''};

    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        });
    }

    if(err.message=='incorrect email'){
        errors.email='incorrect email';
    }
    if(err.message=='incorrect password'){
        errors.password='incorrect password';
    }

    if(err.code==11000){
        errors.email='That email already exists';
    }
    return errors;
}


module.exports=handleError;