import {clsx} from 'clsx'
import {Close, Menu} from '../../utils/icons'

const MobileMenuButton = ({open = false, close = false, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('cursor-pointer',
        open && 'block m:hidden',
        close && 'absolute top-7 right-7')}
    >
      {open &&
        <Menu
          size={28}
          className="hover:text-blueSoft-300"
        />
      }
      {close &&
        <Close
          size={28}
          className="hover:text-accent-red"
        />
      }
    </button>
  );
};

export default MobileMenuButton;