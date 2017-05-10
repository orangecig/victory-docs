/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryPie, VictoryLabel, VictoryTooltip  */

// Victory requires `react@^15.5.0` and `prop-types@^15.5.0`

class CustomLabel extends React.Component {
  static defaultEvents = VictoryTooltip.defaultEvents;
  static propTypes = {text: React.PropTypes.string};

  render() {
    return (
      <g>
        <VictoryLabel {...this.props}/>
        <VictoryTooltip
          {...this.props}
          x={0} y={50}
          text={`# ${this.props.text}`}
          orientation="top"
          pointerLength={0}
          cornerRadius={50}
          width={100}
          height={100}
          flyoutStyle={{ fill: "black" }}
        />
      </g>
    );
  }
}

class App extends React.Component {
  render() {
    return (
        <VictoryPie
          style={{ labels: { fill: "white" } }}
          innerRadius={100}
          labelRadius={120}
          labels={(d) => d.y}
          labelComponent={<CustomLabel/>}
          data={[
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 2},
            {x: 4, y: 3},
            {x: 5, y: 1}
          ]}
        />
    );
  }
}

ReactDOM.render(<App/>, mountNode);
