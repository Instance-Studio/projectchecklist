import type { Data } from '../types/data';

export function countItems(data: Data) {
    let count = 0;

    data.items.forEach((cat) => {
        cat.items.forEach(() => {
            count++;
        });
    });

    return count;
}
