import {useState, useCallback, useMemo} from 'react';
import { data } from '../../../../data';
import List from './List';
import {slowFunction} from "./slowFunction.js";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  const value = useMemo(() => {
      slowFunction();
  }, []);

    console.log(value)

  const removePerson = useCallback((id) => {
      console.log(people)
      setPeople(people.filter(person => person.id !== id))
  }, [people])

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
