console.log('Js live');
function fun(){
var totalsalemount=document.getElementById('Amount').value;
var per=document.getElementById('percent').value;
var ans=document.getElementById('final');
console.log(totalsalemount)
console.log(per);
var result=Number((totalsalemount*per)/100);
console.log(result);
ans.innerHTML=result;
}