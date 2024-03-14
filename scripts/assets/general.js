export function customerService(){
  document.querySelectorAll('.js-customer-service').forEach(link =>{
    link.addEventListener('click', ()=>{
      console.log('hello');
      document.querySelector('body').innerHTML = `
      <div class="customer-service-message">
        Can't help you right now Sorry.......<h2>&#128517;</h2>
        <a href="dalmarSons.html">Go Back To Home Page</a>
        </div>`;
    });
  });
    
}