import React from 'react';
import './App.css';
import marked from '../node_modules/marked/marked.min.js';
const PLACEHOLDER = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

class TextEditor extends React.Component {
  render(){
    return (
    <div class="col-sm-4 border mr-4 editor-back p-0">
      <div id="editor-header"><h4>Editor</h4></div>
      <textarea id="editor" class="container" onChange={this.props.handleChange}>
        {PLACEHOLDER}
      </textarea>
    </div>
  )}
}

class PreviewBox extends React.Component {
  render(){
    return (
      <div id="preview" class="col-sm-10 border text-wrap text-left editor-back p-0">
        <div id="preview-header"><h4>Markdown Preview</h4></div>
        <p class="p-2" dangerouslySetInnerHTML={{__html:marked(this.props.text)}}></p>
      </div>
    )
  }
}

class  App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      input: PLACEHOLDER
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(event){
    this.setState({
      input: event.target.value
    })
  }
  render(){
    return(
      <div class="container fluid d-flex m-0">
        <TextEditor handleChange={this.handleOnChange}/>
        <PreviewBox text={this.state.input} />
      </div>
    )
  }
}
export default App;
