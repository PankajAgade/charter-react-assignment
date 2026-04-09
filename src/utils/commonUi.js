export const getAvtarLetters = (name) => {
    return name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase();
};

export const monthOptionsList = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
];

export const yearOptionsList = [
    { "value": "2026", "label": "2026" },
    { "value": "2025", "label": "2025" },
    { "value": "2024", "label": "2024" },
    { "value": "2023", "label": "2023" },
    { "value": "2022", "label": "2022" },
    { "value": "2021", "label": "2021" }
];