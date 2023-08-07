import React from 'react';
import data from "./data"
import List from "./List";

const App = () => {
  const [people, setPeople] = React.useState(data)

  console.log("people: ", people)

  return (
    <main>
        <section className='container'>
          <h3>Lista {people.length} największych kurwi na świecie</h3>
          <List people={people} />
          <button 
            type='button' 
            className='btn btn-block' 
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
      </section>
    </main>
  );
};
export default App;
