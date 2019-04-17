import React from 'react';
import {connect} from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ListSubheader from '@material-ui/core/ListSubheader';
import { addTask, deleteTask } from './actions';

const container = {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth:400,
    margin: '0 auto',
    marginTop: 20,    
}

const navList = {
  maxWidth:400,
}

class Task extends React.Component {  
  
  constructor(props) {
    super(props);
    this.state = {
      text: '',      
    }
  }

  addTask() {    
    this.props.addTask(this.state.text);
  }

  deleteTask(id) {
    this.props.deleteTask(id);
  }

  renderTasks() {
    const { tasks } = this.props;    
    return (
            
      <List 
        component="nav"
        style={navList}
        subheader={<ListSubheader component="div">Tasks list</ListSubheader>} >      
      {
            tasks.map(task => {
              return (
                <ListItem key={task.id} button>
                <ListItemIcon>
                  <DeleteForeverIcon onClick={() => this.deleteTask(task.id)} />
                </ListItemIcon>
                <ListItemText  inset primary={task.text}/>                
                </ListItem>      
              )
            })
        }
      
    </List>  
      
    )
  }

  render () { 
      return (        
        <div style={container}>
        <div style={container}>
        <Input
            placeholder="Add your task here"
            className="input"
            inputProps={{
            'aria-label': 'Description',
            }}
            onChange={event => this.setState({ text: event.target.value })}
        />        
        <Fab
         color="primary" aria-label="Add" className="fab"
         onClick={() => this.addTask()}>
            <AddIcon />
        </Fab>
        
        <Button 
            size="small"
            component={Link}
            to="/"            
            >Return to welcome screen</Button>   
            </div>

            { this.renderTasks() }

            </div>
  );
}
}

function mapStateToProps(state) {  
  return {
    tasks: state
  }
}

export default connect(mapStateToProps, { addTask, deleteTask })(Task);