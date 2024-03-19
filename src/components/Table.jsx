import "./styling.css";
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Satelite Type</th>
       <th>Launch Date</th>
       <th>Status</th>
       </tr>
     </thead>
     <tbody>
      {sat.map((data, id)=>(
  <tr key={id}>
  <td>{data.name}</td>
  <td>{data.type}</td>
  <td>{data.launchDate}</td>
  {data.operational? <td>true</td>: <td>false</td>}
</tr>
      ))}
   
     </tbody>
   </table>
  );
};

export default Table;