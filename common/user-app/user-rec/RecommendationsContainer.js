import { connect } from 'react-redux';
import Recommendations from './Recommendations';

import { getRecs } from './recommendationAction';

const mapStateToProps = state => ({
  recs: state.rec.recs,
  facebookId: state.post.facebookId
});

const mapDispatchToProps = dispatch => ({
  getRecs: facebookId => dispatch(getRecs(facebookId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
