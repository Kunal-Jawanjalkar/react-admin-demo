import logo from "./logo.svg";
import "./App.css";
import {
  Admin,
  Show,
  SimpleShowLayout,
  TextField,
  Resource,
  ShowGuesser
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {UserList} from "./components/Users";
import {PostList} from "./components/Posts";
import {UserShow, UserCreate, UserEdit} from "./components/Users";

const dataProvider = jsonServerProvider("http://localhost:5000");
function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource name="posts" list={PostList} />
    </Admin>
  );
}

export default App;
