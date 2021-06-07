import React, { Component } from 'react'
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
class App extends Component {
  findPalette(id) {
    return seedPalettes.find(function (palette) {
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette list goes here</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedPalettes[0])} />
      // </div>
    )
  }
}
export default App;
