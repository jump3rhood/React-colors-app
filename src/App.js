import React, { Component } from 'react';
import PaletteList from './PaletteList';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
class App extends Component {
  findPalette(id) {
    return seedPalettes.find(function (palette) {
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps} />} />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(routeProps) => <SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} colorId={routeProps.match.params.colorId} />} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedPalettes[0])} />
      // </div>
    )
  }
}
export default App;

