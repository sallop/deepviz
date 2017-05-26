import { connect } from 'react-redux'
import { setValueToEditor } from '../actions'
import MemberTable from '../components/MemberTable'

const mapStateToProps = (state) => {
  return { members: state.members }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (member) => { dispatch(setValueToEditor(member)) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberTable)

