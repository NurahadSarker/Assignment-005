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

const callHistoryData = [];
// coin count
document.getElementById("call-btn-1").addEventListener('click', function(){
    const callBtnValue = 20;
    const coinValue = parseInt(document.getElementById('coin-count').innerText)
    console.log(coinValue)
    if(coinValue > 0){
        alert('📞Calling National Emergency Service 999...')
        const count = coinValue - callBtnValue;
        document.getElementById('coin-count').innerText = count;
    }
    else{
        alert("❌You don't have enough coins. You need at least 20 coins to make a call.")
    }

    const historyData = {
        name: "National Emergency Number",
        date: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(historyData)
    console.log(callHistoryData)
})