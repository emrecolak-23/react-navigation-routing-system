import produce from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE = 'change-value';
const ADD_VALUE = 'add-value';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };
      return;
    case CHANGE_VALUE:
      state.valueToAdd = action.payload;
      // return {
      //   ...state,
      //   valueToAdd: action.payload,
      // };
      return;
    case ADD_VALUE:
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
      // return {
      //   ...state,
      //   count: state.count + state.valueToAdd,
      //   valueToAdd: 0,
      // };
      return;
    default:
      return;
    // return state;
  }

  // if (action.type === INCREMENT_COUNT) {
  // return {
  //   ...state,
  //   count: state.count + action.payload,
  // };
  // } else if (action.type === DECREMENT_COUNT) {
  // return {
  //   ...state,
  //   count: state.count + action.payload,
  // };
  // } else if (action.type === CHANGE_VALUE) {
  // return {
  //   ...state,
  //   valueToAdd: action.payload,
  // };
  // } else if (action.type === ADD_VALUE) {
  // return {
  //   ...state,
  //   count: state.count + action.payload,
  //   valueToAdd: 0,
  // };
  // }

  // return state;
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    // setValueToAdd(value);
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button secondary outline onClick={increment}>
          Increment
        </Button>
        <Button secondary outline onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 boder border-gray-100"
        />
        <Button secondary outline>
          Add it
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
