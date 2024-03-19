import "./styling.css";
import satData from "./satData"
const Buttons = ({ filterByType, setSat, displaySats,sat }) => {
  return (
    <div className="flex-container">
      {displaySats.map((sat,id)=>{
             return (
        <button key={id} onClick={()=>filterByType(sat)}>{sat} Orbit</button>
       )
      })};
      <button onClick={()=>setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;