import {usersData} from "../data/usersData.js";


let userNData = document.getElementById('Username');
let userPData = document.getElementById('Password');


userNData.addEventListener('input', function (){
    userNData.value = this.value;
    
});
userPData.addEventListener('input', function(){
    userPData.value = this.value;
});

document.querySelector('.js-submit').addEventListener('click', ()=>{
    
    getUserData(userNData.value,userPData.value);
    
    
});
  

let correctUserName;
function getUserData(givenUserName,givenPassword){
        const matchedData = usersData.find(userData => 
            givenUserName === userData.userName && givenPassword === userData.password
        );

        if (matchedData){   
            
            correctUserName = userNData.value;
            typeUserName();
            
            
        }
        else{
            alert("incorrect");
        }
        
        
}
    


function typeUserName(){
    window.location.href= "dalmarSons.html"; 
}  

// Tried to export correctUserName so i can use the dom, but didn't work.












