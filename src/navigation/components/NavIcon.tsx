import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faArrowLeft,
  faChevronRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface NavIconProps {
  shape: 'arrow' | 'chevron';
  direction: 'left' | 'right';
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
