import { ColorTheme } from '@/types';

const background = '#171717';
const foreground = '#ffffff';

const theme: ColorTheme = {
  name: 'Meu Tema Customizado',
  type: 'dark',
  colors: {
    'editor.background': background,
    'editor.foreground': foreground,
    'sideBar.background': background,
  },
  tokenColors: [
    {
      scope: 'comment',
      settings: {
        foreground: '#888888',
      },
    },
  ],
};

export default theme;
