player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player1_name + ": ";
document.getElementById("player2_name").innerHTML= player2_name + ": ";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "question turn- "+ player1_name;
document.getElementById("player_answer").innerHTML= "answer turn-"+ player2_name;

function send()
{
get_word=document.getElementById("number").value;
word= get_word.toLowerCase();
console.log(number);



           

question_word= "<h4 id='number_display'> Q. "+ "</h4>";
input_box= "<br> answer: <input type='text' id='input_checkbox'>";
check_button= "<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";
row= question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number").innerHTML= " ";
}