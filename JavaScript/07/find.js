/*
  Description :
  Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with one argument: value.

  Arguments :
  1) The collection to inspect.
  2) The function invoked per iteration.

  Returns :
  The matched element, else null.
*/

// Début de votre code
const find = (users, cb) => {
	newObj = [];
	let toAdd = true;
	users.map((user) => {
		// console.log(`cb(user.age) =>`, cb(user.age));
		// console.log(`user.age =>`, user.age);
		if (cb(user)) {
			if (toAdd) {
				newObj.push(user);
				toAdd = false;
			}
		}
	});
	if (newObj.length === 0) {
		return null;
	} else return newObj;
};

// Fin de votre code

const users = [
	{ user: 'barney', age: 36, active: true },
	{ user: 'fred', age: 40, active: false },
	{ user: 'pebbles', age: 1, active: true },
];

const callback = (value) => {
	if (value.age < 40) {
		return true;
	} else {
		return false;
	}
};
console.log(find(users, callback));
// Doit afficher `{ user: 'barney', age: 36, active: true }`

console.log(
	find(users, (value) => {
		if (value.age > 50) {
			return true;
		} else {
			return false;
		}
	})
);
// Doit afficher `null`
