var availableCharacters = {
    letters : "abcdefghilmnopqrstuvzwxyjk",
    numbers : "1234567890",
    upLetters : "ABCDEFGHILMNOPQRSTUVZWXYJK",
    symbols : "[]{}()*;/,._-"
}
var requested=[]
var choices = document.querySelectorAll(".choice")
var diff = document.querySelectorAll(".buttDiff")

for(i = 0; i < choices.length; i++){
    choices[i].addEventListener("click", function(){
        if(this.classList.contains("buttDiff") != true){
            this.classList.toggle("buttonStyleClicked")
        }
        pos = requested.indexOf(this.value)
        if(pos == -1){
            requested.push(this.value)
        }else{
            requested.splice(pos, 1)
        }
    })
}


document.getElementById("generate").addEventListener("click", function(){
    var all = availableCharacters.letters
    var password = ""
    var length = document.getElementById("length").value
    requested.pop()
    for( i = 0; i < requested.length; i++){
        all = all + availableCharacters[requested[i]] 
    }
    for(i = 0; i < length; i++){
        var randomNum = Math.random()* all.length
        password = password + all.slice(randomNum-1, randomNum)
    }
    document.querySelector(".result").innerHTML = password
})

document.querySelector(".copy").addEventListener("click", function(){
    var r = document.createRange();
    r.selectNode(document.getElementById("result"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
})

