

class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    fetch("https://yelp-search.herokuapp.com/search?term=pizza&location=philadelphia", { method: "get"})
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      var businessData = result.businesses
      this.state.data = businessData
      this.forceUpdate()
      console.log(this.state);
    }.bind(this))
  }

  render() {
    if (this.state.data) {
        var businesses = this.state.data.map(function(business) {

          return <div>{business.name}</div>

        })
        return <div>{businesses}</div>
    }
    else {
      return(
        <div>WAITING!</div>
      )
    }
  }
};

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('react-app')
);
