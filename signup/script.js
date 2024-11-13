function switchPasswordType(password, icon){
    let passInput = document.getElementById(password);   
    let passIcon = document.getElementById(icon);
    
    if (passInput.type === 'password'){
        passInput.type = 'text';
        passIcon.classList.remove('fi-rs-eye');
        passIcon.classList.add('fi-rs-crossed-eye');
    }else{
        passInput.type = 'password';
        passIcon.classList.remove('fi-rs-crossed-eye');
        passIcon.classList.add('fi-rs-eye');
    }

}

