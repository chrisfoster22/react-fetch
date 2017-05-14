class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.data,
      newTitle: "",
      newContent: ""
    }

    this.render = this.render.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://127.0.0.1:4567/posts',
      params: {
        title: this.state.newTitle,
          content: this.state.newContent
      }
})
.then(function(response) {
    this.setState({posts: response.data, newTitle: "", newContent: ""});
}.bind(this))
  }

  handleTitleChange(e) {
    this.setState({newTitle: e.target.value});
  }

  handleContentChange(e) {
    this.setState({newContent: e.target.value});
  }

  render() {
      var posts = this.state.posts.map(function(post) {

        return <div>
                <div key={post.id}>{post.title}</div>
                <div key={post.content + post.id}>{post.content}</div>
              </div>

      })
      return <div>
                <div className="hello">{posts}</div>
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleTitleChange} value={this.state.newTitle} />
                  <input onChange={this.handleContentChange} value={this.state.newContent} />
                  <button>{'Add #' + (this.state.posts.length + 1)}</button>
                </form>
             </div>
  }
};


axios.get("http://127.0.0.1:4567/posts")
.then(function(response) {
  var postsList = response.data;
  ReactDOM.render(
    <Posts data={postsList} />,
    document.getElementById('react-app')
  );

});
