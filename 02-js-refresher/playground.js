const n = 'istván';
const print = x => console.log(x);
// print(n);

const person = {
    name: 'István',
    age: 26,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

// person.greet();

let hobbies = ['Jogging', 'Running'];
hobbies = hobbies.map(hobby => 'I like ' + hobby.toLowerCase());
for (let hobby of hobbies) {
//    console.log(hobby);
}

hobbies.push('Programming');
hobbies = hobbies.map(hobby => hobby.startsWith('I like') ? hobby : 'I like ' + hobby.toLocaleLowerCase());
//console.log(hobbies);

copy = [...hobbies, 'Reading'];
copy = copy.map(hobby => hobby.startsWith('I like') ? hobby : 'I like ' + hobby.toLocaleLowerCase());
//console.log(copy);

const fnctn = ({ name }) => console.log(name);

//fnctn(person);

const obj = {age: 2, n: 3};
//fnctn(obj);

const [a1, a2, a3] = copy;

//console.log(a1, a2, a3);
//console.log(copy);

setTimeout(() => console.log('Hi!'), 2_000);
const timer = setInterval(() => console.log('2 seconds passed'), 2_000);
setTimeout(() => {
    clearInterval(timer);
    console.log('All done!');
}, 11_000);