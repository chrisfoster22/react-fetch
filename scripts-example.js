class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }

    this.render = this.render.bind(this);
  }

  render() {
      var businesses = this.state.data.map(function(business) {

        return <div key={business.id}>{business.name}</div>

      })
      return <div>{businesses}</div>
  }
};


// fetch("https://yelp-search.herokuapp.com/search?term=pizza&location=fishtown", { method: "get"})
// .then(function(response) {
//   return response.json();
// })
// .then(function(result) {
//   var businessData = result.businesses;
//
//   ReactDOM.render(
//     <HelloWorld data={businessData} />,
//     document.getElementById('react-app')
//   );
//
// });


axios.get("https://yelp-search.herokuapp.com/search", { params: {term: "pizza", location: "fishtown"}})
.then(function(response) {
  var businessData = response.data.businesses;
  ReactDOM.render(
    <HelloWorld data={businessData} />,
    document.getElementById('react-app')
  );

});
