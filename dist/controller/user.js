"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
// Get '/'
const getData = (req, res, next) => {
    // Return data to the client
    let items = [];
    items = [
        {
            name: `Mahmoud Serag`,
            age: 22,
            isMarried: false
        },
        {
            name: `Islam Mohamed Youssef`,
            age: 25,
            isMarried: true
        },
        {
            name: `Mohamed Ibrahim`,
            age: 22,
            isMarried: false
        },
        {
            name: `Mohamed Sobhi`,
            age: 23,
            isMarried: true
        }
    ];
    let result = {};
    result = {
        success: true,
        code: 200,
        message: 'Response Send Successfully.',
        items: items
    };
    res.status(200).json({
        result
    });
};
exports.getData = getData;
