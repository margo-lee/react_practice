import { Table, Container } from "react-bootstrap";
import { Item } from "./Item";

const Tablelist = ({ listData, deleteData }) => {
  return (
    <Container className="pt-3">
      <Table striped variant="dark" size="sm">
        <thead>
          <tr>
            <th>項目列表</th>
          </tr>
        </thead>
        <tbody>
          {listData.map((item) => {
            // console.log(item);
            const { note = "預設值", id } = item;
            return (
              <Item key={id} id={id} note={note} deleteData={deleteData} />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export { Tablelist };
