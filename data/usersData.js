export let usersData = JSON.parse(localStorage.getItem('usersData'));

if(!usersData){
    usersData = [{
        userName : "iloveComputer",
        password : "fantastic123",
        
    },{
        userName : "WhiteChocolate",
        password : "Chocoloate456",
    }];
}
function saveToDatabase(){
    localStorage.setItem('usersData', JSON.stringify(usersData));
}
saveToDatabase();

