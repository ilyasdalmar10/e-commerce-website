export function formatMoney(pricePennies){
    return(Math.round(pricePennies) /100).toFixed(2);
};
export default formatMoney;

