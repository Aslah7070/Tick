/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from 'react'
import Modal from './Modal';
import ConfettiSideCannons from './WinCelebration';

const Game = () => {
    const [board,setBoard]=useState<string[]>(new Array(9).fill(""))
    const [isModalOpen,setIsModalOpen]=useState(false)
    console.log("board",board);
    
    const [x,setX]=useState(false)
    const [win,setWin]=useState<string|null>(null)
 const checking=()=>{
    const winMatch = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for(const [a,b,c] of winMatch){
        if(board[a]&&board[a]===board[b]&&board[a]===board[c]){
            console.log("rr");
            
               setWin(board[a])
               setIsModalOpen(true)
               
             return
        }
      }
if(!board.includes("")&&!win){
    setWin("Draw")
    setIsModalOpen(true)
}
     
 }
  
    useEffect(()=>{
checking()
    },[board,win])

    const handleClick=(index:number)=>{
        console.log("index",index);
        if(board[index]||win)return
        
         const  newBox=[...board]
         newBox[index]=x?"X":"O"
         setBoard(newBox)
         setX(!x)
    }

    const handleRestart=()=>{
      setBoard(new Array(9).fill(""))
      setWin(null)
      setIsModalOpen(false)
      setX(false)
    }
  return (
  <>
  
  <div className='flex flex-col justify-center items-center h-screen'>
      <div className='grid grid-cols-3 gap-3'>
      {
        board.map((box,index)=>(
            <button key={index} onClick={()=>handleClick(index)} className=' border-2 w-20 h-20'>
                <span
                 className={`  font-bold text-3xl ${box==="X"? "text-red-600":box==="O"?"text-green-600":""}`}
                >
                {box}
                </span>
            </button>
        ))
      }
    </div>

    {
      win&&(
<div>
<ConfettiSideCannons/>
<Modal isOpen={isModalOpen} >{win} is win the match congradulation</Modal>
</div>
      )
    }

{
      win==="Draw"&&(
        <Modal isOpen={isModalOpen}  >Match is Draw play again </Modal>
      )
    }


    <button className='mt-20 border border-amber-700 text-3xl rounded-2xl px-5'  onClick={handleRestart} >Rematch</button>
  </div>
  </>
  )
}

export default Game
