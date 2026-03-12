function calculateresult(){
    let n=document.getElementById("subjects");
    let total=0;
    for (let i=1; i<=n; i++){
        let marks=parseFloat(prompt("enter marks for subject"+1));
        total=total+marks;
    }
    let average=Number;
     average=total/n

     let grade;
     let result;

     if(average>=90){
        grade="A+";
     }
     else if(average>=75){
        grade="A";
     }
     else if(average>=60){
        grade="B+";
     }
     else if(average>=50){
        grade="C";
     }
     else if(average>=40){
        grade="D";
     }
     else{
        grade="F";
     }
    if(average>=40){
        result="Pass";
     }
     else{
        result="fail";
     }
     
}