import { ReactComponent as ClientsIcon } from '../assets/icons/contacts.svg';

import Hires from '../pages/Hires';
import HiresClasses from '../pages/HiresClasses';

export const pages = {
  hires: {
    component: Hires,
    Icon: ClientsIcon,
    name: 'Hires',
    exact: true,
    path: '/',
  },
  hiresClasses: {
    component: HiresClasses,
    Icon: ClientsIcon,
    name: 'Hires',
    exact: true,
    path: '/classes',
  },
};
