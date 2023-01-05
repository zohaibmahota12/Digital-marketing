import { useState } from "react";


function StudentMarks() {
  const bodystyles = {
    backgroundColor: "SlateGray",
    color: "white",
    fontSize:"1.5rem"
}

  const mystyles={
    color: "white",
    margin: "2rem",
  
  fontSize:"3rem"
  
  }

    const [m1, setMarks1] = useState();
    const [m2, setMarks2] = useState();
    const [m3, setMarks3] = useState();
    const [m4, setMarks4] = useState();
    const [m5, setMarks5] = useState();
    const [m6, setMarks6] = useState();
   
    const [gradee, setGrade] =  useState(); 
    const [average, setAvg] =  useState(); 
    var total;
    var grade;
    var avg;
function handleClick()
{
 // setTot(Number(num1) + Number(num2)); // set number to the state
  total= Number(m1) + Number(m2) + Number(m3)+ Number(m4)+ Number(m5)+ Number(m6);


  avg =  Number(total/6);

  setAvg(avg); 

  if(avg > 90)
  {
    grade = "A+"
  }
  else if(avg > 80)
  {
    grade = "B"
  }
  else if(avg > 65)
  {
    grade = "C"
  }
  else if(avg > 50)
  {
    grade = "D"
  }

  else
  {
    grade = "E"
  }

  setGrade(grade); 

}

    return (
      <div  class="container"style={bodystyles}>
   
        <h1 style={mystyles}>Enter Your Marks and  I Calculate Your Result</h1>
       <div class="form-group">
        <label>English</label>
        <input type="text" name="m1" class="form-control" onChange={(event) =>
                {
                  setMarks1(event.target.value);      
                }}>
        </input>
        </div>

        <div class="form-group">
        <label>Urdu</label>
        <input type="text" name="m2"  class="form-control" onChange={(event) =>
                {
                  setMarks2(event.target.value);      
                }}>
         </input> 
         </div>


         <div class="form-group">
        <label>Pakistan Studies</label>
        <input type="text" name="m3"  class="form-control" onChange={(event) =>
                {
                  setMarks3(event.target.value);      
                }}>
         </input> 
         </div>
         <div class="form-group">
        <label>Islamiyat</label>
        <input type="text" name="m4"  class="form-control" onChange={(event) =>
                {
                  setMarks4(event.target.value);      
                }}>
         </input> 
         </div>
         <div class="form-group">
        <label>Computer</label>
        <input type="text" name="m5"  class="form-control" onChange={(event) =>
                {
                  setMarks5(event.target.value);      
                }}>
         </input> 
         </div>
         <div class="form-group">
        <label>Physics</label>
        <input type="text" name="m6"  class="form-control" onChange={(event) =>
                {
                  setMarks6(event.target.value);      
                }}>
         </input> 
         </div>

        
        <div class="form-group">
        <label>Average</label>
        <input type="text"   class="form-control" value={ average }></input>   
        </div>
        <div class="form-group">
        <label>Grade</label>
        <input type="text"   class="form-control" value={ gradee }></input>   
        </div>
        <button onClick={handleClick}  class="btn btn-warning mt-4"> Click Me</button>
      </div>
    );
            
}
  export default StudentMarks;