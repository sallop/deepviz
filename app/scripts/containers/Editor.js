import { connect } from 'react-redux'
//import {} from '../actions'
import Editor from '../components/Editor'

//const mapStateToProps = (state, ownProps) => ({
const mapStateToProps = (state) => ({
  member: state.editor
})

//const mapDispatchToProps = (dispatch, ownProps) => ({
//})

export default connect(
    mapStateToProps,
    //mapDispatchToProps
)(Editor)


//export default Editor;
