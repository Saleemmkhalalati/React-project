import { useState,useEffect, useRef } from "react";
const VerificationCodeInput = ({ codeLength, onCodeChange }) => {
  const [code, setCode] = useState(Array(codeLength).fill(''));
  const [isEmpty,setIsEmpty] = useState(Array(codeLength).fill(false))
  const [isFocus,setIsFocus] = useState(Array(codeLength).fill(false))
  const [lostFocusByBackspace, setLostFocusByBackspace] = useState(false);
  const inputRefs = Array.from({ length: codeLength }, () => useRef(null)); 
  const [invalidCode,setInvalidCode] = useState(false)

  const handleInputChange = (event, index) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 1) {
      const newCode = [...code];
      newCode[index] = newValue;
      setCode(newCode);
      if (newValue.length === 1 && index < codeLength - 1) {
        inputRefs[index + 1].current.focus(); 
      }
      if (newValue !== "") {
        const newEmpty = [...isEmpty];
        newEmpty[index] = false;
        setIsEmpty(newEmpty);
      }
    }
    
  };
  const handleBackspace = (event, index) => {
    if (event.key === 'Backspace' && index > 0) {
      inputRefs[index - 1].current.focus();
      setLostFocusByBackspace(true);
    }
  };
  const handleFocus = (event,index) =>{
    const newFocus = Array(codeLength).fill(false);
    newFocus[index] = true;
    setIsFocus(newFocus)
  }
  const handleEmptyField = (event,index) =>{
    setIsFocus(Array(codeLength).fill(false))
    if(event.target.value === ""){
      const newEmpty = [...isEmpty]
      newEmpty[index] = true;
      setIsEmpty(newEmpty)
    }
    
    
  }
  useEffect(() => {
    onCodeChange(code.join(''));
  }, [code, onCodeChange]);

  const inputFields = code.map((value, index) => (
    <input
      key={index}
      type="text"
      value={value}
      onChange={(e) => handleInputChange(e, index)}
      onKeyUp={(e) => handleBackspace(e, index)}
      onBlur={(e) => handleEmptyField(e, index)}
      onFocus={(e)=>handleFocus(e,index)}
      maxLength={1}
      ref={inputRefs[index]}
      className={`w-16 h-[61px] rounded-md ${isEmpty[index] ? "border-red-400" : "border-myGray-100"} ${isFocus[index]?"border-blue-950" :""} bg-white flex text-center justify-center outline-none border-solid border-[0.8px] border-myGray-100 shadow-verfictionShadow`}
    />
  ));

  return <div className={`flex gap-[40px]`}>{inputFields}</div>;
};

export default VerificationCodeInput;
