//CommentForm.js
import React, { Component } from 'react';
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
