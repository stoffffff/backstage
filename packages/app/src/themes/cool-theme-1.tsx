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
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
            },
        },
        BackstageHeader: {
            styleOverrides: {
                header: {
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                },
            },
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