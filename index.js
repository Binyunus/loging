function submit(){
    
    if(username.value === ''){
        setErrorFor(username, 'username cannot be blank' );
    }
    else{
        setSuccessFor(username);
    }
}



