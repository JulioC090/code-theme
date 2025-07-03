import activityBar from '@/components/activity-bar';
import breadcrumbs from '@/components/breadcrumbs';
import buttons from '@/components/buttons';
import dropdown from '@/components/dropdown';
import editor from '@/components/editor';
import general from '@/components/general';
import inputs from '@/components/inputs';
import scrollbars from '@/components/scrollbars';
import sideBar from '@/components/side-bar';
import statusBar from '@/components/status-bar';
import tabs from '@/components/tabs';
import terminal from '@/components/terminal';
import titleBar from '@/components/title-bar';
import widgets from '@/components/widgets';
import { ColorTheme } from '@/types';

const theme: ColorTheme = {
  name: 'Meu Tema Customizado',
  type: 'dark',
  colors: {
    ...general,
    ...activityBar,
    ...sideBar,
    ...statusBar,
    ...titleBar,
    ...inputs,
    ...buttons,
    ...terminal,
    ...breadcrumbs,
    ...widgets,
    ...tabs,
    ...editor,
    ...scrollbars,
    ...dropdown,
  },
};

export default theme;
