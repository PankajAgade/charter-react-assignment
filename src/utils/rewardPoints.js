export function calculateRewardPoints(amount) {
    let points = 0;
    if (amount > 100) {
        points = points + (amount - 100) * 2;
        points = points + 50;
    } else if (amount > 50) {
        points = points + (amount - 50);
    }
    return Math.floor(points);
};
