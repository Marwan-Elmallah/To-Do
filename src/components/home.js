import { Component } from "react";

class HomeList extends Component {
    state = {
        list:
        [
            
        ],
        Added:""
    }

    handleChange = (e) => {
        let added = e.target.value
        this.setState({Added:added})
    }


    handleSubmit = (e) => {
        let lista = this.state.list
        lista.push({id:lista.length+1,toDo:this.state.Added}) 
        this.setState({list:lista})
        e.target.reset()
        e.preventDefault();
    }

    handleDelete = (id) => {
        let lista = this.state.list.filter((item) => item.id !== id )
        this.setState({list:lista})
    }

    currentTime = (e) => {
        let current = new Date()
        return `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
    }


    render() {
        return(
            <div className="home">
                <h1>TO-DO-LIST</h1>
                <p>Welcome from Home Page</p>
                <form className="form-list" onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control form-control-lg" placeholder="To-Do" onChange={this.handleChange}/>
                    <input type="submit" className="btn btn-success" value="Add To List"/>
                </form>
                <div className="my-list container">
                    <ol>
                        {
                            this.state.list.length > 0 ? (
                                this.state.list.map((item) => {
                                    return(
                                        <li key={item.id} className="badge rounded-pill bg-warning">
                                            <span>{item.toDo}</span>
                                            <span className="delete" onClick={() => this.handleDelete(item.id)}>&times;</span>
                                        </li>
                                    )
                                })
                            ) : (
                                <p>Your List is Empty :(</p>
                            )
                            
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default HomeList