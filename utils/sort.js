const bubbleSort = (arr) => {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0, n = arr.length; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];

                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                sorted = false;
            }
        }
    }

    return arr;
};

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1, n = arr.length; i < n; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
};

module.exports = { bubbleSort, quickSort };