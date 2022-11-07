import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import './App.css';

function App() {
  return <Admin
    dataProvider={dataProvider}
  >
    <Resource name="users" list={ListGuesser} edit={EditGuesser}/>
  </Admin>
}

export default App;
