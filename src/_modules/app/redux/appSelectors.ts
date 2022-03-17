import type { RootState } from '../../../_shared/infra/redux/store';

export const selectAppDarkMode = ({ modules }: RootState): boolean => modules?.app.darkMode;
  