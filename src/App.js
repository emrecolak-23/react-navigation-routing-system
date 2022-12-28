import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log('Click!!');
  };

  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click Here!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase /> Sea Deal!
        </Button>
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
