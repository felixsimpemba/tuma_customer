import { colors } from './colors';

export const theme = {
    colors,
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
        xxl: 40,
    },
    typography: {
        header: {
            fontSize: 32,
            fontWeight: 'bold' as const,
            color: colors.text,
        },
        subheader: {
            fontSize: 24,
            fontWeight: '600' as const,
            color: colors.text,
        },
        body: {
            fontSize: 16,
            color: colors.text,
        },
        caption: {
            fontSize: 14,
            color: colors.textSecondary,
        },
        button: {
            fontSize: 16,
            fontWeight: '600' as const,
            color: colors.white,
        },
    },
    borderRadius: {
        s: 4,
        m: 8,
        l: 12,
        xl: 16,
        round: 9999,
    },
} as const;

export type Theme = typeof theme;
