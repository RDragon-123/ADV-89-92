function addUser(){
 Playeronename =document.getElementById("player1name").value;
 Playertwoname =document.getElementById("player2name").value;
 localStorage.setItem("player1key",Playeronename)
 localStorage.setItem("player2key",Playertwoname)
 window.location="game_page.html"
}
