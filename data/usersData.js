export let usersData = JSON.parse(localStorage.getItem('usersData'));

if(!usersData){
    usersData = [{
        userName : "haha",
        password : "123",
        
    },{
        userName : "WhiteChocolateMan",
        password : "Chocko_!2",
    }];
}
function saveToDatabase(){
    localStorage.setItem('usersData', JSON.stringify(usersData));
}

