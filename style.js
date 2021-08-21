var dob=document.querySelector(".dob-input");
var luckyNo=document.querySelector(".lucky-no");
var btnCheck=document.querySelector(".btn-check");

var starterBox=document.querySelector(".starter-box");
var luckyBox=document.querySelector(".lucky-box");
var luckyAnimation=document.querySelector(".lucky-animation");
var sadBox=document.querySelector(".sad-box");


const privacyPolicy=document.querySelector(".privacy-policy");
const closeBtn=document.querySelector(".close");
console.log(privacyPolicy);
closeBtn.addEventListener("click",function(){
    privacyPolicy.style.display="none";
})


btnCheck.addEventListener("click",function(){
    let str=dob.value
    const arr=str.split("-");
    let totalSum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            totalSum+=parseInt(arr[i][j]);
        }
    }
    if(totalSum % (parseInt(luckyNo.value))==0){
        starterBox.style.display="none";
        luckyBox.style.display="block";
        // luckyAnimation.style.display="block";
        sadBox.style.display="none";
    }
    else{
        sadBox.style.display="block";
        starterBox.style.display="none";
        luckyBox.style.display="none";
        // luckyAnimation.style.display="none";
    }
})