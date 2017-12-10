import React from 'react'
import {observer} from 'mobx-react'


import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import Chip from 'material-ui/Chip';

import styles from './file.css';

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
    display: 'table',
    clear: 'both',
    
    "overflowY": "scroll"
};
const bottomPanel =
{
 "textAlign" : "right"
}

const hardWordStyle =
{
    "fontWeight": "500"
}

@observer
export class BookView extends React.Component{
    handleSecondSlider = (event, value) => {
        this.props.model.pageNumber = value + 1;
      };
      createWord = (text, hardWords) =>
      {
        var hardWord = this.props.model.getHardWord( text, hardWords);
          if(hardWord == null )
          return text;
          else
          {              
              return <span onMouseEnter={this.mouseEnter.bind(this, hardWord.translation)} onMouseLeave={this.mouseLeave} style={hardWordStyle}>{text} </span>;
          }
      }
      mouseEnter = (text) => {
        this.props.model.hardWordFocused(text);
          }
      mouseLeave = () => {
        this.props.model.isHardWordFocused = false;
      }

    render(){
        const model = this.props.model
        
        // just some HTML markup based of the ViewModel data.
        return <div>
            <div style={styleRow}>
                <div style={styleRight}>
                    <Paper style={stylePage} zDepth={2} >
                           {model.currentPage.translatedText}
                        </Paper>
                </div>
                <div style={styleLeft}>
                
                     <Paper style={stylePage} zDepth={2} >
                        {model.currentPage.orginalText.match(/\b(\w+\W+)/g).map( (word, i) => this.createWord(word, model.service.getHardWords()))}
                    </Paper>
               
              </div>
              </div>
              <div style={bottomPanel}>
                    <Subheader>{model.pageNumber}</Subheader>         
                        { model.isHardWordFocused ? <Chip>{model.hardWordTranslation}</Chip> : null }

                        <FlatButton label="Rozdziały" onClick={ () => model.openChapters() }/>
                        <FlatButton label="Poprzednia" icon={<FontIcon className="muidocs-icon-custom-github" />}  onClick={ () => model.previousPage()}/>           
                        <FlatButton label="Nastepna"   onClick={ () =>model.nextPage()}/>               
                 
                    <Slider min={0} max={4} step={1}  onChange={this.handleSecondSlider}/>
                </div>
            
            
            <Drawer open={model.isChaptersOpened}>
                     {model.chapters.map((chapter, i) => <MenuItem key={chapter.number}   >{chapter.name} </MenuItem>)}                
            </Drawer>

              {/* <div onClick={alert('Pop')}>
             
              </div>
              <RaisedButton label="Następna"   onClick={alert('asds')} primary={true}/> */}
                {/* <h1>React & MobX Todo List!</h1>
                <div>
                    <RaisedButton onClick={() => model.add()}  primary={true} style={buttonStyle} label="New" />
                    <RaisedButton onClick={() => model.load()} secondary={true} style={buttonStyle} label="Load" />
                    <RaisedButton onClick={() => model.save()} style={buttonStyle} label="Save" />
                </div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        
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
// @observer
// export class SingleTodoView extends React.Component{

//     render(){
//         const model = this.props.model
//         const todo = this.props.todo

//         return <TableRow striped={todo.done} displayBorder={false}>
//                     <TableRowColumn>
//                         <Checkbox checked={todo.done} onCheck={e => {todo.done = e.target.checked}} />
//                     </TableRowColumn>
//                     <TableRowColumn>
//                         #{todo.id}
//                     </TableRowColumn>
//                     <TableRowColumn>
//                         <TextField name="text" type="text" value={todo.text} onChange={e => {todo.text = e.target.value}} fullWidth={true} />
//                     </TableRowColumn>
//                     <TableRowColumn>
//                         <RaisedButton onClick={() => model.remove(todo)} label="Delete" />
//                     </TableRowColumn>
//                 </TableRow>
//     }
// }