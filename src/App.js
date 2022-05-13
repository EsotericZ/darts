import React, { Component } from 'react';
import { Stage, Layer, Text } from 'react-konva';
// import Konva from 'konva';

import ColoredRect from './components/Test';

// function App() {
//   return (
//     <div className="App">
//       Darts
//       <ColoredRect />
//     </div>
//   );
// }
class App extends Component {
  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredRect />
        </Layer>
      </Stage>
    );
  }
}

export default App;