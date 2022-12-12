import {createGlobalStyle} from 'styled-components';

const lightTheme = {
    'body, .body': {
        'background-color': '#eee',
        'color': '#111'
    },
    '.transparent-color': {
        'color': '#111a'
    },
    '.transparent-b-color': {
        'border-color': '#3332'
    },
    '.bg-box': {
        'background-color': '#ffffffc0'
    },
    '.shadow-bg': {
        'color': '#555'
    },
    '.purple-bg': {
        'background-color': '#aaa2'
    },
    'a:hover .main-topic-name': {
        'color': '#3c00b3'
    },
    'a.active .main-topic-name': {
        'color': '#50f'
    },
    '.main-topic-format': {
        'background-color': '#ffffff'
    },
    'a.active .main-topic-format': {
        'background-color': '#50f'
    },
    '.default-color': {
        'color': '#111'
    },
    '.social-media-dot': {
        'border-color': '#222',
        '--tw-ring-color': '#222',
        '--tw-ring-offset-color': '#ffffffc0'
    },
    '.curiosities-actived': {
        'background-color': '#222',
        'color': '#eee',
        'left': ''
    },
    '.curiosities-disabled': {
        'background-color': ''
    },
    '.curiosities-disabled:hover': {
        'background-color': '#2221'
    },
    '#about-me > section::before': {
        'opacity': '.5'
    },
    '#about-me > section': {
        'color': '#ddd'
    },
    '.language-component': {
        'box-shadow': '0 .5rem 1rem #3333',
        'color': '#ddd'
    },
    '#header': {
        'background-color': '',
        'border-color': '#55f4',
        'border-width': '',
        'backdrop-filter': '',
    },
    '#wave': {
        'background-color': '#eee8'
    },
    '#header.scrolled': {
        'background-color': '#eeea'
    },
    '#header > a': {
        'color': '#50f',
        'background-color': 'transparent'
    },
    '#header > a:hover': {
        'background-color': '#5500ff10'
    },
    '#page-owner::before, #page-button::before': {
        'background-color': '#50f',
        'transform': '',
        'width': ''
    },
    '#page-owner': {
        'color': ''
    },
    '#page-owner:hover': {
        'color': '#eee'
    },
    '#themeToggler': {
        'background-color': '#bbb'
    },
    '#ball': {
        'background-color': '#ddd',
        'left': '0%',
        'box-shadow': 'none'
    },
    '#themeToggler:hover #ball': {
        'box-shadow': '0 0 0 .25em #8885'
    },
    '#sun, #moon': {
        'translate': '0'
    },
    '#block-children': {
        'background': '#161616'
    }
};

const darkTheme = {
    'body, .body': {
        'background-color': '#111',
        'color': '#fff'
    },
    '.transparent-color': {
        'color': '#eeea'
    },
    '.transparent-b-color': {
        'border-color': '#eee2'
    },
    '.bg-box': {
        'background-color': '#0a0a0ac0'
    },
    '.shadow-bg': {
        'color': '#555'
    },
    '.purple-bg': {
        'background-color': '#50f3'
    },
    'a:hover .main-topic-name': {
        'color': '#947cff'
    },
    'a.active .main-topic-name': {
        'color': '#64f'
    },
    '.main-topic-format': {
        'background-color': '#0a0a0a'
    },
    'a.active .main-topic-format': {
        'background-color': '#64f'
    },
    '.default-color': {
        'color': '#eee'
    },
    '.social-media-dot': {
        'border-color': '#eee',
        '--tw-ring-color': '#eee',
        '--tw-ring-offset-color': '#0a0a0a'
    },
    '.curiosities-actived': {
        'background-color': '#eee',
        'color': '#222',
        'left': ''
    },
    '.curiosities-disabled': {
        'background-color': ''
    },
    '.curiosities-disabled:hover': {
        'background-color': '#eee1'
    },
    '#about-me > section::before': {
        'opacity': '1'
    },
    '#about-me > section': {
        'color': '#50f8'
    },
    '.language-component': {
        'color': '#50f8'
    },
    '#header': {
        'background-color': '',
        'border-color': '#555',
        'border-width': '',
        'backdrop-filter': ''
    },
    '#wave': {
        'background-color': '#1118'
    },
    '#header.scrolled': {
        'background-color': '#111a'
    },
    '#header > a': {
        'color': '#ddd',
        'background-color': 'transparent'
    },
    '#header > a:hover': {
        'background-color': '#5554'
    },
    '#page-owner::before, #page-button::before': {
        'background-color': '#fff',
        'transform': '',
        'width': ''
    },
    '#page-owner': {
        'color': ''
    },
    '#page-owner:hover': {
        'color': '#111'
    },
    '#themeToggler': {
        'background-color': '#1c1c1c'
    },
    '#ball': {
        'background-color': '#282828',
        'left': '50%',
        'box-shadow': 'none'
    },
    '#themeToggler:hover #ball': {
        'box-shadow': '0 0 0 .25em #98f4'
    },
    '#sun, #moon': {
        'translate': '-100%'
    },
    '#block-children': {
        'background': '#eee'
    }
};

const predefinedPropsTimeout = {
    'background-color': '.25s'
}, defaultTimeout = '.15s';

const GlobalStyles = createGlobalStyle`
    ${({theme}) => {
        let finalStr = '';
        for (const elementName in theme) finalStr += getElementStr(elementName, theme[elementName]);
        return finalStr;
    }}
`;

function getElementStr(elementName, htmlElement) {
    const propsList = [];
    for (const propName in htmlElement) propsList.push(propName);
    const oldPropsList = propsList.map(prop => `${predefinedPropsTimeout[prop] || defaultTimeout} ${prop} ease-in-out`),
        finalStr = `${elementName}{transition:${oldPropsList.join(',')};${propsList.map(prop => `${prop}: ${htmlElement[prop]}`).join(';')}}`;
    return finalStr;
};

export {lightTheme, darkTheme, GlobalStyles};