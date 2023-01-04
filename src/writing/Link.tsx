import { useDispatch } from 'react-redux';
import { writingSlice } from '../redux-toolkit/slices';

import { faLink } from '@fortawesome/free-solid-svg-icons';

import Icon from './Icon';

function Link() {
  const dispatch = useDispatch();
  const showLink = () => {
    dispatch(writingSlice.actions.link(true));
  };

  return <Icon icon={faLink} onClick={showLink} />;
}

export default Link;
