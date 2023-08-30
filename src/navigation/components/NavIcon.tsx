import { PointerDirection, PointerShape } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faArrowLeft,
  faChevronRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface NavIconProps {
  shape: PointerShape;
  direction: PointerDirection;
}

const iconMap = {
  arrow: {
    left: faArrowLeft,
    right: faArrowRight,
  },
  chevron: {
    left: faChevronLeft,
    right: faChevronRight,
  },
};

const NavIcon = ({ shape, direction }: NavIconProps) => {
  return (
    <FontAwesomeIcon icon={iconMap[shape][direction]} />
  );
};

export default NavIcon;
