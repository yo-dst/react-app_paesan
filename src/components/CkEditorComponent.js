import React from 'react'
import CKEditor from "react-ckeditor-component";
 
class CkEditorComponent extends React.Component{
 
    constructor(props) {
        super(props);
         
        this.state = {
            content: 'content',
        }
 
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
    }
  
    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }
     
    onChange(evt){
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
      console.log("onChange fired with event info: ", newContent);
    }
     
    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
    }
     
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }
 
    render(){
        return(
            <div>
                <CKEditor 
                activeClass="p10"
                content={this.state.content} 
                events={{
                    "blur": this.onBlur,
                    "afterPaste": this.afterPaste,
                    "change": this.onChange
                }}
                />
            </div>
        )
    }
     
}
 
export default CkEditorComponent;