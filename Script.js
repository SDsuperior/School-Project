const calculate = document.getElementById("calculateBtn");
  const clearBtn = document.getElementById("clearBtn"); 

calculate.addEventListener("click", calculateResult);
clearBtn.addEventListener("click", clearForm);

function calculateResult(){
 const studentName = document.getElementById("name").value;

  const english = Number(document.getElementById("english").value); 

  const math = Number(document.getElementById("math").value);

  const computer = Number(document.getElementById("computer").value);

  const physics = Number(document.getElementById("physics").value);


  if(
    studentName === "" ||
    document.getElementById("english").value === "" ||
    document.getElementById("math").value === "" ||
    document.getElementById("computer").value === "" ||
    document.getElementById("physics").value === ""

    ){
    alert("please fill in all fields.");
    return;
    }

    if(
        english < 0 || english > 100 ||
        math < 0 || math > 100 ||
        computer < 0 || computer> 100 ||
        physics < 0 || physics >100 
    ){
       alert("score must be between 0 and 100.");
       return; 
    }

     const total = english + math + computer + physics;
const average = total/4;

let grade;
    
    if(average >=70){ grade ="A";
    } else if(average >=60){ grade ="B";

    } else if(average >=50){ grade ="C";

    } else if(average >=45){ grade ="D";

    } else if(average >=40){ grade ="E";

    } else { grade ="F";}
  
 document.getElementById("result").innerHTML = `
  <h3>Result</h3>
 <p><strong>Student Name:</strong> ${studentName}</p>
 <p><strong>Total:</strong> ${total}</p>
 <p><strong>Average:</strong> ${average.toFixed(2)}</p>
 <p><strong>Grade:</strong> ${grade}</p>`;
}

function clearForm(){
  document.getElementById("name").value = "";
   document.getElementById("english").value = "";
    document.getElementById("math").value = "";
     document.getElementById("computer").value = "";
      document.getElementById("physics").value = "";

       document.getElementById("result").innerHTML = "";
}


  
  
