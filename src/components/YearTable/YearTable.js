import shortid from "shortid";

function YearTable(props) {
  console.log('YearTable', props);

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {props.list.map(item => (
          <tr key={shortid.generate()}>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default YearTable;
