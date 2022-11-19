// let data = document.getElementById("data");

let outputData = document.getElementById("outputData");

let i = 0;

function mainFun(){
    let newData = document.getElementById("data").value;
    
    function handler(){

        console.log(newData[i]);
        outputData.insertAdjacentHTML('beforeend', `<span>${newData[i]}</span>`)
        i++;
    
        if(i >= newData.length){
            clearInterval(timer)
        }
        
    }
    let timer = setInterval(()=>{
        handler()
        
    },1000)
}




