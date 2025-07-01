const background = '#171717';
const foreground = '#ffffff';

export default {
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
