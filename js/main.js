let  guessNumber=document.getElementById("guess-num");
let playbtn=document.getElementById("play-btn");

function magicNum(){
    return Math.floor(Math.random()*10);
}


//generate random numbers
let count;
function play(){
    count=0;
    let ranNum=magicNum();
    guessNumber.value=ranNum;

    let boxNumbers=[];
    while(boxNumbers.length<10){
        let genNum=magicNum();
        if(!boxNumbers.includes(genNum)){
            boxNumbers.push(genNum);
           
        };
    };
    console.log(boxNumbers);
    displaybox(boxNumbers)
    
};
playbtn.addEventListener("click",play);


//display num box

let findNum=document.getElementById("find-num");
function displaybox(data){
    findNum.innerHTML="";
    data.forEach(function(elm,i,arr){

        //create element
        let coldiv=document.createElement("div");
        let numBox=document.createElement("div");
        //set attributes
        coldiv.setAttribute("class","col-3");
        numBox.setAttribute("class","numbox");
        numBox.setAttribute("data-target",elm);
        numBox.onclick=findingNum;
        //structure
        coldiv.appendChild(numBox);
        findNum.appendChild(coldiv);

        //to get value
        numBox.innerText=elm;


    });
};

function findingNum(e){
   count +=1;
   let num=e.target.dataset.target
 if(count<=3){
    if(num == guessNumber.value){
        e.target.classList.add("active-success");
        alert("Your guess is correct")
      }else{
         e.target.classList.add("active-lose");
         alert("better guess next time")
      }

 };
   
}
