function ClickEvent() {
  function Btnclick() {
    alert("function called");
  }

  return (
    <div className="App">
      {/* <button type="button" onClick={()=>Btnclick()}> */}
      {/* or */}
      <button type="button" onClick={Btnclick}>
        
        <span>Click Me</span>
      </button>
    </div>
  );
}

export default ClickEvent;
