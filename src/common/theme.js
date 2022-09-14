import { createTheme } from '@mui/material/styles';
import BKamran from 'assets/fonts/BKamran/BKamran.ttf';
import { faIR } from '@mui/material/locale';

export const theme = createTheme({
    direction:'rtl',
    palette: {
        secondary: {
            light: '#8b3386',
            main: '#262626',
            dark: '#4d0048'
        },
        warning: {
            light: '#8C8C8C',
            main: '#404040',
            dark: '#ff9909'
        },
        Error: {
            light: '#eb5b7a',
            main: '#e63359',
            dark: '#a1233e'
        },
        info: {
            light: '#92c2e0',
            main: '#77b3d9',
            dark: '#537d97'
        },
        pink: {
            main: '#F4402F',

        },
        yellow: {
            light: '#ffcb4d',
            main: '#ffbe21',
            dark: '#b28517'
        }
    },
    typography: {
        fontFamily: 'BKamran',
        fontSize: 18,
        fontWeightLight: 500,
        fontWeightRegular: 700,
        fontWeightMedium: 800,
        fontWeightBold: 900,

    },
    overrides: {
        CssBaseline: {
            '@global': {
                '@font-face': [BKamran],
            },
        },
    },
}, faIR);

