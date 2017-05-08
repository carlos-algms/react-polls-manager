import { connect } from 'react-redux';


import PollsListComponent from './PollsListComponent';


const mapStateToProps = state => ({
  polls: state.pollsList.polls,
  isFetching: state.pollsList.isFetching
});

const mapDispatchToProps = () => ({

});

const PollListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollsListComponent);


export default PollListContainer;
