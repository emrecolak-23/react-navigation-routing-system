import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
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
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
