import  {Deck, Slide, Heading} from 'spectacle'
import {Intro} from './slides/Intro'
import BuildingBlocks from './slides/BuildingBlocks'
function App() {
  return (
    <Deck>
      <Slide>
        <Intro />
      </Slide>
      <Slide>
        <BuildingBlocks />
      </Slide>
    </Deck>
  );
}

export default App;
