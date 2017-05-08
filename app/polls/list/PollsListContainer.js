import { connect } from 'react-redux';


import PollsListComponent from './PollsListComponent';


const mapStateToProps = state => ({
  polls: state.polls.polls,
  isFetching: state.polls.isFetching
});

const mapDispatchToProps = () => ({

});

const PollListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollsListComponent);


export default PollListContainer;
