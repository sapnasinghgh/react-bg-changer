import { useState } from "react"
function App() {
const [color,setcolor]= useState("olive")
  


  return (
 <>
    <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}
    
      >  

      <div >
                <h1 className="text-center text-4xl text-white">Click the button for change background color</h1>
</div> 


        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"red"}}>Red</button>
           

            <button onClick={()=> setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"green"}}>Green</button>

            <button onClick={()=> setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"blue"}}>Blue</button>

           <button onClick={()=> setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"yellow"}}>Yellow</button>

          <button onClick={()=> setcolor("cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"cyan"}}>cyan</button>

          <button onClick={()=> setcolor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"gray"}}>gray</button>
        </div>
        
        </div>
      </div>
  
   
   </> 
    
  )
}

export default App
