class Posts extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>Hello</h2>
            </div>
        )
    }
}    
ReactDOM.render(
    <Posts/>,
    document.getElementById('root')
);