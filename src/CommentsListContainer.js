import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment, editComment, inputChange} from './actions';

const mapStateToProps = state => ({
  comments: state.comments,
  inputText: state.inputTextChange.text
});

const mapDispatchToProps = dispatch => ({
  add: (txt) => dispatch(addComment(txt)),
  edit: (txt, id) => dispatch(editComment(txt, id)),
  change: (txt) => dispatch(inputChange(txt))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);