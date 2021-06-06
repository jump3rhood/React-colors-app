import React, { Component } from 'react'
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedPalettes[0])} />
      </div>
    )
  }
}
export default App;
