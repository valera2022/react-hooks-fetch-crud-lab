import React,{useState,useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [items,setItems]= useState([])

useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data=>{ 
    setItems(data)})
  },[])




  function handleDelete(deletedItem){
    

    fetch(`http://localhost:4000/questions/${deletedItem.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        const UpdatedItems = items.filter((item)=>{ return item.id !== deletedItem.id
        })
        setItems(UpdatedItems)
        //  setItems(data)
      });


      



    }




  const mapedItems = items.map((item)=>(
   <QuestionItem question={item} onDelete={handleDelete}/>
   )
  
  )

  console.log(items)
  return (
    <section>
      <h1>Quiz Questions</h1>
      {mapedItems}
      <ul></ul>
    </section>
  );
}

export default QuestionList;
