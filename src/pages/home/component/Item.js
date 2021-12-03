import { Button } from "react-bootstrap";

const Item = ({ id, note, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <tr>
      <td className="d-flex justify-content-between">
        <p>{note}</p>
        <Button variant="danger" onClick={deleteItem}>
          刪除
        </Button>
      </td>
    </tr>
  );
};

export { Item };
// export default Item;
