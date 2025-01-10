function Validation(values) { 
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(values.email == ""){
        error.email = "Email Should Not be Empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email Doesn`t Match the Pattern"
    }
    else{
        error.email = ""
    }
    return error;
}
export default Validation;