import {usersData} from "../data/usersData.js";


let userNData = document.getElementById('Username');
let userPData = document.getElementById('Password');


userNData.addEventListener('input', function (){
    userNData.value = this.value;
    
});
userPData.addEventListener('input', function(){
    userPData.value = this.value;
});



let correctUserName;

document.querySelector('.js-submit').addEventListener('click', ()=>{
    console.log(usersData);
    getUserData(userNData.value,userPData.value);
    console.log(correctUserName);
    
});
  
let isSignedIn = false;

function getUserData(givenUserName,givenPassword){
        const matchedData = usersData.find(userData => 
            givenUserName === userData.userName && givenPassword === userData.password
        );

        if (matchedData){   
            
            correctUserName = givenUserName;
            isSignedIn = true;
            typeUserName();
            
        }
        else{
            alert("incorrect");
        }
        
        
}/*
export {isSignedIn};
  
export {correctUserName};

export function changeHtmlUserName(correctUserName){
    document.querySelector('.sign-in').innerHTML = correctUserName;
}
*/
function typeUserName(){
    window.location.href= "dalmarSons.html"; 
}  

// Tried to export correctUserName so i can use the dom, but didn't work.
let newSignInHtml = `
    <div class="sign-in-form">
        <div id="form" >
            <h1>Create Account</h1>
        <div class="input-control">
            <label for="fname">User Name</label>
            <input id="NewUserName" name="fname" type="text" class="js-user-name">
            
        </div>

        <div class="input-control">
            <label for="Password">Password</label>
            <input id="NewPassword" name="Password" type="text" class="js-pass-word">
        </div>
        <button class="js-create">Create account</button> 
        <a href="#"class="creating-link js-sign-back" onclick="location.reload();">Sign In</a>
        </div>

    </div>

`; 
// Finish  of this later.
function addToDataUser(username,password){
    usersData.forEach((userData) =>{
        const setUser = userData.userName;
        const setPassword = userData.password; 
        const matchedData = setUser=== username && setPassword === password;
        if(matchedData){
            alert("Account already taken");
        }
        else{
            usersData.push({
                userName : username,
                password : password
            });
            localStorage.setItem('usersData', JSON.stringify(usersData));
        }
    });
}
document.querySelector('.js-create-account').addEventListener('click', ()=>{
    document.querySelector('.sign-in-container').innerHTML = newSignInHtml;
    
    document.querySelector('.js-create').addEventListener('click', ()=>{
        let NewUsername = document.getElementById('NewUserName');
        let NewPassword = document.getElementById('NewPassword');
                
            NewUsername.addEventListener('input', function(){
                NewUsername.value = this.value;
            });
            NewPassword.addEventListener('input', ()=>{
                    NewPassword.value = this.value;
            });

            addToDataUser(NewUsername.value,NewPassword.value);
        });
   });














