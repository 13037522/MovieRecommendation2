//CommentForm.js

import React, { Component } from 'react';
import Validation from 'react-validation';
import style from './style';
class CommentForm extends Component {
 constructor(props) {
 super(props);
 var table = [
   {title: 'Title'},
   {RealeaseDate:'Release Date'},
   {Duration: 'Duration'},
   {genre: 'Genre'},
   {synopsis: 'Synopsis'},
 ];


 this.state = { title: '', releasedate: '', duration: '', genre: '', synopsis: ''};
 this.handleTitleChange = this.handleTitleChange.bind(this);
 this.handleReleaseDateChange = this.handleReleaseDateChange.bind(this);
 this.handleDurationChange = this.handleDurationChange.bind(this);
 this.handleGenreChange = this.handleGenreChange.bind(this);
 this.handleSynopsisChange = this.handleSynopsisChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 import validator from 'validator';

 // Use Object.assign or any similar API to merge a rules
 // NOTE: IE10 doesn't have Object.assign API natively. Use polyfill/babel plugin.
 Object.assign(Validation.rules, {
     // Key name maps the rule
     required: {
         // Function to validate value
         // NOTE: value might be a number -> force to string
         rule: value => {
             return value.toString().trim();
         },
         // Function to return hint
         // You may use current value to inject it in some way to the hint
         hint: value => {
             return <span className='form-error is-visible'>Required</span>
         }
     },
     email: {
         // Example usage with external 'validator'
         rule: value => {
             return validator.isEmail(value);
         },
         hint: value => {
             return <span className='form-error is-visible'>{value} isnt an Email.</span>
         }
     },
     // This example shows a way to handle common task - compare two fields for equality
     password: {
         // rule function can accept argument:
         // components - components registered to Form mapped by name
         rule: (value, components) => {
             const password = components.password.state;
             const passwordConfirm = components.passwordConfirm.state;
             const isBothUsed = password
                 && passwordConfirm
                 && password.isUsed
                 && passwordConfirm.isUsed;
             const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

             if (!isBothUsed || !isBothChanged) {
                 return true;
             }

             return password.value === passwordConfirm.value;
         },
         hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
     },
     // Define API rule to show hint after API error response
     api: {
         // We don't need the rule here because we will call the 'showError' method by hand on API error
         hint: value => (
             <button
                 className="form-error is-visible"
             >
                 API Error on "{value}" value. Focus to hide.
             </button>
         )
     }
 handleTitleChange(e) {
 this.setState({ title: e.target.value });
 }
 handleReleaseDateChange(e) {
 this.setState({ releasedate: e.target.value });
 }
 handleDurationChange(e) {
 this.setState({ duration: e.target.value });
 }
 handleGenreChange(e) {
 this.setState({ genre: e.target.value });
 }
 handleSynopsisChange(e) {
 this.setState({ synopsis: e.target.value });
 }
 handleSubmit(e) {
   this.state.push(this.state.value);
 e.preventDefault();
 console.log(`${this.state.author} said “${this.state.text}”`)
 //we will be tying this into the POST method in a bit
 }
 render() {
 return (
 <form style={ style.commentForm }
       onSubmit={ this.handleSubmit }>
<h3>Movie Title:</h3>
 <input
 type='title'
 placeholder='Title'
 style={ style.commentFormText}
 value={ this.state.title }
 onChange={ this.handleTitleChange } />
 <h3>Release Date:</h3>
 <input
 type='Release Date'
 placeholder='release Date'
 style={ style.commentFormText}
 value={ this.state.releasedate }
 onChange={ this.handleReleaseDateChange } />
 <h3>Duration:</h3>
  <input
 type='Duration'
 placeholder='Duration'
 style={ style.commentFormText}
 value={ this.state.Duration }
 onChange={ this.handleDurationChange } />
 <h3>Genre:</h3>
 <input
 type='Genre'
 placeholder='Genre'
 style={ style.commentFormText}
 value={ this.state.Genre }
 onChange={ this.handleGenreChange } />
 <h3>Synopsis:</h3>
 <input
 type='Synopsis'
 placeholder='Synopsis'
 style={ style.commentFormNote}
 value={ this.state.Synopsis }
 onChange={ this.handleSynopsisChange } />
 <input
 type='back'
 style={ style.commentFormPost }
 value='Back'/>
 <input
 type='update'
 style={ style.commentFormPost }
 value='UPDATE'/>
 <input
 type='forward'
 style={ style.commentFormPost }
 value='Forward'/>
 </form>
 )
 }
}
export default CommentForm;
