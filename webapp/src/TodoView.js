import React from 'react'
import {observer} from 'mobx-react'

import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import styles from './file.css';

const buttonStyle = {
  margin: 12,
};
const styleRight = {  
        float: 'left',
        width: '50%',
        height: '100%'
  };
const styleLeft = {  
    float: 'right',
    width: '50%',
    height: '100%'
};
  const stylePage = {  
    padding : '20px',
    margin : '5px',
    height: '100%'
};
const styleRow = 
{
    content: "",
    display: 'table',
    clear: 'both'
};
// This is a React component.
// The property "model" of the passed props object is an instance of our TodoViewModel class.
// do you remember all those @observable and @computed?
// In order to let your React component automatically update whenever any of
// those observable property of an object in the component props update,
// you should pass your component to the "observer" function/decorator
@observer
export class TodoView extends React.Component{
    handleSecondSlider = (event, value) => {
        this.props.model.pageNumber = value;
      };
    render(){
        const model = this.props.model
        
        // just some HTML markup based of the ViewModel data.
        return <div>
            <div style={styleRow}>
                <div style={styleRight}>
                    <Paper style={stylePage} zDepth={2} >
                            Potężnie zbudowany, bardzo wysoki, szedł prosto na ciebie z lekkim pochyleniem ramion, głową naprzód,
                            patrząc spode łba, jak byk gotujący się do ataku. Jego głęboki, niski głos, nacechowany pewnością siebie, 
                            nie miał w sobie nic przykrego. Był niepokalanie czysty, biało ubrany od trzewików do kapelusza i w rozmaitych wschodnich portach, 
                            gdzie zarabiał na życie w charakterze agenta okrętowego, ciszył się wielką popularnością.

                        </Paper>
                </div>
                <div style={styleLeft}>
                     <Paper style={stylePage} zDepth={2} >
                         
                                He was an inch, perhaps two, under six feet, powerfully built, and he
                                advanced straight at you with a slight stoop of the shoulders, head
                                forward, and a fixed from-under stare which made you think of a charging
                                bull. His voice was deep, loud, and his manner displayed a kind of
                                dogged self-assertion which had nothing aggressive in it. It seemed
                                a necessity, and it was directed apparently as much at himself as at
                                anybody else. He was spotlessly neat, apparelled in immaculate white
                                from shoes to hat, and in the various Eastern ports where he got his
                                living as ship-chandler’s water-clerk he was very popular.
                        
                        </Paper>
               
              </div>
              </div>              
              <Slider min={0} max={100} step={1} value={model.pageNumber} onChange={this.handleSecondSlider}/>
              <RaisedButton label="Następna" primary={true}/>
                {/* <h1>React & MobX Todo List!</h1>
                <div>
                    <RaisedButton onClick={() => model.add()}  primary={true} style={buttonStyle} label="New" />
                    <RaisedButton onClick={() => model.load()} secondary={true} style={buttonStyle} label="Load" />
                    <RaisedButton onClick={() => model.save()} style={buttonStyle} label="Save" />
                </div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Done?</TableHeaderColumn>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Actions</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {model.todos.map((todo, i) => <SingleTodoView key={todo.id} model={model} todo={todo} />)}
                    </TableBody>
                </Table> */}
            </div>
       
    }
}

// Since putting observer only on the TodoView will result in re-rendering all the todos
// any time a single todo is updated, we create a subcomponent that handles the editing for a single todo
// and decorate it with observer. This way updates in the single todo will result in an update of the SingleTodoView.
@observer
export class SingleTodoView extends React.Component{

    render(){
        const model = this.props.model
        const todo = this.props.todo

        return <TableRow striped={todo.done} displayBorder={false}>
                    <TableRowColumn>
                        <Checkbox checked={todo.done} onCheck={e => {todo.done = e.target.checked}} />
                    </TableRowColumn>
                    <TableRowColumn>
                        #{todo.id}
                    </TableRowColumn>
                    <TableRowColumn>
                        <TextField name="text" type="text" value={todo.text} onChange={e => {todo.text = e.target.value}} fullWidth={true} />
                    </TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton onClick={() => model.remove(todo)} label="Delete" />
                    </TableRowColumn>
                </TableRow>
    }
}