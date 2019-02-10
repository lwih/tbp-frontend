import {fontSizes, heights} from './theme';

export const setFontZise = (size) => {
    switch (size) {
        case 'tiny':
            return fontSizes['12'];
        case 'small':
            return fontSizes['14'];
        case 'medium':
            return fontSizes['16'];
        case 'big':
            return fontSizes['18'];
        case 'huge':
            return fontSizes['22'];
        default:
            return fontSizes['16'];
    }
}

export const setButtonHeight = (size) => {
    switch (size) {
        case 'tiny':
            return heights.tiny;
        case 'small':
            return heights.small;
        case 'medium':
            return heights.medium;
        case 'big':
            return heights.big;
        case 'huge':
            return heights.huge;
        default:
            return heights.medium;
    }
}