import React from 'react';
import { Icon } from '../icons';

const LocalLibraryPath = () => [
  <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" key='path0' />,
];

const LocalLibraryIcon = Icon.extend.attrs({
  children: LocalLibraryPath,
})``;

export default LocalLibraryPath;
export { LocalLibraryIcon };
