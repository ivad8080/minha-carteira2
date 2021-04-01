import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;

            success: string;
            info: string;
            warning: string;

            white: string;
            black: string;
            gray: string;
        },
    };
}