import {darken, rgba} from 'polished'

export const colors = {
    white: '#ffffff',
    sortOfPink: '#d74669',
    sortOfPinkLight: '#d7466924',
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
    32: 32
}

export const radii = {
    2: 2,
    4: 4,
    8: 8,
    100: 100
}

export const fontWeights = {
    'light': 300,
    'medium': 400,
    'heavy': 700
}