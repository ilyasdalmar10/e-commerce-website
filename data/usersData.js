export let usersData = JSON.parse(localStorage.getItem('usersData'));

if(!usersData){
    usersData = [{
        userName : "haha",
        password : "123",
        id : 1
    },{
        userName : "WhiteChocolateMan",
        password : "Chocko_!2",
        id : 2

    }];
}
function saveToDatabase(){
    localStorage.setItem('usersData', JSON.stringify(usersData));
}

