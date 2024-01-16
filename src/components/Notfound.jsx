import '../index.css';
import { Link } from 'react-router-dom';
function Notfound() {
  return (
    <div className="not_found">
      <h2>404 Not Found</h2>
      <Link to={'/'} className="go_back">
        Go to main page
      </Link>
    </div>
  );
}
export default Notfound;
