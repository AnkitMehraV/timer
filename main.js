num=0


function start(){


    a=setInterval(call,00)

}
function reset(){
    num=00
    document.getElementById("msg").innerHTML=num

}
function stopcount(){
    clearInterval(a)
}
function call(){
    num++
    document.getElementById("msg").innerHTML=num
}