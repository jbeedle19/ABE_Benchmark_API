const router = require('express').Router();
const { suite } = require('../../config/benchmark');
const { bubbleSort, quickSort } = require('../../utils/sort');

router.get('/bubble', (req, res) => {
    try {
        const numbers = [];
        const rounds = req.query.rounds;

        for (let i = 0; i < rounds; i++) {
            numbers.push(Math.floor(Math.random() * 10000) + 1);
        }

        suite
            .add('bubble sort', function () {
                const testArray = [...numbers];

                bubbleSort(testArray);
            })
            .run();
        
        res.status(200).json(suite);
    } catch (err) {
        res.status(500).end();
    }
});

module.exports = router;