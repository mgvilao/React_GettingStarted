// React class components
// can start with a top to bottom approach or a bottom to top approach
// in terms of what to define first in a tree like archtecture 

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component {
    state = { username: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        
        // axios call
       const response = await axios.get(`https://api.github.com/users/${this.state.username}`)
       this.props.onSubmit(response.data);
       this.setState({username: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                value={this.state.username} 
                onChange={event => this.setState({ username: event.target.value })}
                placeholder="GitHub username" 
                required />
                <button>Add Card</button>
            </form>
        );
    }
}

class App extends React.Component {
    // constructor
    // this
    
    // a render function is required in each React component
    // it returns the virtual DOM description of the component
    
    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }));
    };

    render() {
      return(
          <div>
              <div className="header">{this.props.title}</div>
              <Form onSubmit={this.addNewProfile} />
              <CardList profiles={this.state.profiles} />
          </div>
      ); 
    }
}
  
ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode,
)