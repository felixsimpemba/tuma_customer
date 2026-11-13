/**
 * Global Color Palette
 * 
 * TODO: PLEASE UPDATE THESE COLORS WITH THE HEX CODES FROM YOUR LOGO.
 * The current values are placeholders based on "earthy tones".
 */
export const colors = {
    // Brand Colors
    primary: '#dd8827ff', // Earthy Brown (Placeholder)
    secondary: '#A1887F', // Light Brown (Placeholder)
    accent: '#D7CCC8', // Very Light Brown (Placeholder)

    // UI Colors
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1a1a1a',
    textSecondary: '#666666',
    border: '#E0E0E0',
    error: '#B00020',

    // Base Colors
    white: '#FFFFFF',
    black: '#000000',
    placeholder: '#999999',
} as const;

export type ColorType = typeof colors;
