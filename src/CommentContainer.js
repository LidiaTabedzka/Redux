import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, removeComment, editButtonClicked, editComment, commentInputChange} from './actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editButtonClicked: (id, value) => dispatch(editButtonClicked(id, value)),
  editComment: (txt, id) => dispatch(editComment(txt, id)),
  commentInputChange: (txt, id) => dispatch(commentInputChange(txt, id)),
});

export default connect(null, mapDispatchToProps)(Comment);