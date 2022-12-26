import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click Here!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>Sea Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Adds!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
