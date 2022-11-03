const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', 'data', 'products.json');

module.exports = class Product {
    constructor(name) {
        this.name = name;
    }

    save() {
        const content = JSON.parse(fs.readFileSync(source));
        content.push(this);
        fs.writeFileSync(source, JSON.stringify(content));
    }

    static fetchAll() {
        try {
            return JSON.parse(fs.readFileSync(source));
        } catch (err) {
            return [];
        }

    }
}