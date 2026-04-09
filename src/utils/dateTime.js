export function getMonthName(monthNumber) {
    return new Date(2000, monthNumber - 1).toLocaleString('default', { month: 'long' });
};


export function getLastThreeMonths(targetMonth, targetYear) {
    const _targetMonth = parseInt(targetMonth);
    const _targetYear = parseInt(targetYear);

    const monthList = [];
    for (let i = 0; i < 3; i++) {
        let m = _targetMonth - i;
        let y = _targetYear;
        if (m <= 0) {
            m = m + 12;
            y = y - 1;
        }
        monthList.push({ month: m, year: y });
    }
    // console.log({ monthList });

    return monthList;
}