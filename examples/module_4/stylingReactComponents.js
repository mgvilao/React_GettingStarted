// this is an alternative way of styling React components
// using inline style tag instead of using a global CSS file

class ConditionalStyle extends React.Component {
    render() {
        return (
            <div style={{ color: Math.random() < 0.5 ? 'green': 'red'}}>
                How's it hanging?
            </div>
        );
    }
}

ReactDOM.render(
    <ConditionalStyle />,
    mountNode,
)