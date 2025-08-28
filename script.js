// heart count
const heartBtns = document.getElementsByClassName("heart-btn")
for(let heartBtn of heartBtns){
    heartBtn.addEventListener('click', function(e){
        e.preventDefault()
        const heartNum = 1;
        const heartValue = parseInt(document.getElementById('heart-count').innerText)
    
        const count = heartValue + heartNum;
        document.getElementById('heart-count').innerText = count;
    })
}

// coin count
document.getElementById("call-btn-1").addEventListener('click', function(){
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('calling.....')
        const count = coinValue - callBtnValue;
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert('Not enough coin....')
    }
})