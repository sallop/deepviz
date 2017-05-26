import { connect } from 'react-redux'
import { setVisibilityFilter } from 'react-redux'
import MemberTable from '../components/MemberTable'

const mapStoreToProps = (state, ownProps) => {
  return {
    activate: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
