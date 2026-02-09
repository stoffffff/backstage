import { 
  createUnifiedTheme, 
  palettes, 
  genPageTheme, 
  shapes 
} from '@backstage/theme';

export const customTheme = createUnifiedTheme({
  palette: {
    ...palettes.dark,
    primary: {
      main: '#4dabf7', // Clean Aurora Blue
    },
    secondary: {
      main: '#ff922b', // Soft Alert Orange
    },
    background: {
      default: '#1a1b1e', // Deep Slate
      paper: '#25262b',   // Card Surface
    },
    navigation: {
      background: '#141517', // Darker Sidebar
      indicator: '#4dabf7',
      color: '#ced4da',
      selectedColor: '#ffffff',
    },
  },
  defaultPageTheme: 'home',
  /* This beautifies the headers for different entity types */
  pageTheme: {
    home: genPageTheme({ colors: ['#1a1b1e', '#4dabf7'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#1a1b1e', '#4dabf7'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#1a1b1e', '#15aabf'], shape: shapes.wave2 }),
    tool: genPageTheme({ colors: ['#1a1b1e', '#fab005'], shape: shapes.round }),
  },
});