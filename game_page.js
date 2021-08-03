playeronename=localStorage.getItem("player1key")
playertwoname=localStorage.getItem("player2key")
playeronescore=0
playertwoscore=0
document.getElementById("player1name").innerHTML=playeronename+" : ";
document.getElementById("player2name").innerHTML=playertwoname+" : ";
document.getElementById("player1score").innerHTML=playeronescore;
document.getElementById("player2score").innerHTML=playertwoscore;
document.getElementById("player_question").innerHTML="questionTurn:"+playeronename
document.getElementById("player_answer").innerHTML="answerTurn:"+playertwoname
function send(){
    No1=document.getElementById("no.1").value
    No2=document.getElementById("no.2").value
    question=Number(No1)*Number(No2)
    q="<h4 id='word_display'>q:"+No1+"x"+No2+"</h4>";
    inp="<br><input class='form-control' placeholder='enter your answer' id='input_box'>"
    btn="<br><button class='btn btn-info' onclick='check()'>check</button> "
    document.getElementById("output").innerHTML=q+inp+btn
    document.getElementById("no.1").value=""
    document.getElementById("no.2").value=""
}
questionTurn ="player1"
answerTurn="player2"
function check() {
    get_answer=document.getElementById("input_box").value
    if(question==get_answer){
        if(answerTurn=="player1"){
            playeronescore=playeronescore+1;
            document.getElementById("player1score").innerHTML=playeronescore;
        }
        else{
            playertwoscore=playertwoscore+1
            document.getElementById("player2score").innerHTML=playertwoscore;
        }
    }
    if(questionTurn=="player1"){
        questionTurn="player2"
        document.getElementById("player_question").innerHTML="questionTurn:"+playertwoname
    }
    else{
        questionTurn="player1"
        document.getElementById("player_question").innerHTML="questionTurn:"+playeronename
    }
    if(answerTurn=="player1"){
        answerTurn="player2"
        document.getElementById("player_answer").innerHTML="answerTurn:"+playertwoname
    }
    else{
        answerTurn="player1"
        document.getElementById("player_answer").innerHTML="answerTurn:"+playeronename
    }
    document.getElementById("output").innerHTML=""
}