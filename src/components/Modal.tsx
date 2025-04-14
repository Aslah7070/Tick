import React from "react";

interface Imodal{
  isOpen:boolean;
  children:React.ReactNode
}
const Modal:React.FC<Imodal>= ({ isOpen, children }) => {
    if (!isOpen) return null;
    console.log("dds")

    
  
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 animate-borderMove shadow-lg rounded-xl z-50 p-6 w-11/12 max-w-md">

          <div className="text-center">{children}</div>
  
      </div>
    );
  };
  
  export default Modal;
  