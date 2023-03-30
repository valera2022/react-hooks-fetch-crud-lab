import React from "react";

function QuestionItem({ question,onDelete}) {
  console.log(question)
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function onClickDelete(){
    onDelete(question)
  }


  function handleSelect(e){
    console.log(e.target.value)
  fetch(`http://localhost:4000/questions/${id}`,{

  method:"PATCH",
  headers: {
    "Content-type": "application/json",
  },
  body:JSON.stringify(
    {
      
      correctIndex: e.target.value
    }
   
    

  )})
  .then(r => r.json())
  .then((updatedItem)=> (updatedItem));

  }
  

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleSelect}defaultValue={correctIndex}>{options}</select>
      </label>
      <button  onClick={onClickDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
