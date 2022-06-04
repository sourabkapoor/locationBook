import "./tableStyles.scss"
import { Trash2 } from 'react-feather';

const Table = ({tableItems, deleteEntry}) => {

  return <table className="table tableCntr">
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Name</th>
        <th scope="col">Location</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {
        tableItems.map((tableItem, index) => {
          return <tr key={"tableCol" + index}>
            <td>{index + 1}</td>
            <td>{tableItem.name}</td>
            <td>{tableItem.location}</td>
            <td><Trash2 className="delIcon" onClick={() => deleteEntry(tableItem)} /></td>
          </tr>
        })
      }

      {/* No data available */}
      { tableItems.length === 0 &&
        <tr>
          <td colSpan="4">No Data available</td>
        </tr>

      }
    </tbody>
  </table>
}

export default Table;