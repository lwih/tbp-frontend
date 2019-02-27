import {darken, rgba} from 'polished'

export const sizes = {
    tiny: 'tiny',
    small: 'small',
    medium: 'medium',
    big: 'big',
    huge: 'huge'
}

export const heights = {
    tiny: 30,
    small: 40,
    medium: 50,
    big: 70,
    huge: 90
}

export const colors = {
    white: '#ffffff',
    sortOfPink: '#ff4572',
    sortOfPinkLight: '#d7466924',
    sortOfPinkDarker: '#d74669',
    teal: '#20282f',
    darkGrey: darken(0.4, '#f2f3f5'),
    paleGrey: '#f2f3f5',
    halfGrey: 'rgba(255, 255, 255, 0.5)',
    lightBlue: '#00cbe2',
    deepPurple: '#2a079b',
    greenBlue: '#1ab2c4',
    vanillaYellow: rgba('#fff1cf', 0.5)
}

export const spaces = {
    0: 0,
    1: 1,
    2: 2,
    4: 4,
    8: 8,
    16: 16,
    32: 32,
    64: 64,
    96: 96,
    128: 128
}

export const radii = {
    2: 2,
    4: 4,
    8: 8,
    16: 16,
    100: 100
}

export const fontSizes = {
    10: 10,
    12: 12,
    14: 14,
    16: 16,
    18: 18,
    22: 22
}

export const fontWeights = {
    'light': 300,
    'medium': 400,
    'heavy': 700
}