import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div>
      Nothing found here.
      <Link to="/">Return back</Link>
    </div>
  );
}

export default NoMatch;
