import { useDispatch } from 'react-redux';
import { writingSlice } from '../redux-toolkit/slices';

import { faImage } from '@fortawesome/free-solid-svg-icons';

import Icon from './Icon';

function Image() {
  const dispatch = useDispatch();
  const showImage = () => {
    dispatch(writingSlice.actions.image(true));
  };

  return <Icon icon={faImage} onClick={showImage} />;
}

export default Image;
