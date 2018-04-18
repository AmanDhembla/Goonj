import React from 'react';
import { connect } from 'react-redux';


export const VolunteerProfile = (props) => (
  <div>
    {console.log(props.volunteer)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    volunteer: state.volunteer
  };
};

export default connect(mapStateToProps)(VolunteerProfile);
