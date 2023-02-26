import React from 'react';
import ToDoForm from './Components/ToDoForm';
import List from './Components/List';
import Footer from './Components/Footer';
import { DataProvider } from './Components/DataProvider';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>

        <ToDoForm />     
        <List />
        <Footer />

      </div>
    </DataProvider>
  );
}

export default App;
