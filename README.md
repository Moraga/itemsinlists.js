Items in Lists
==============

Finds the best lists combination that have all required items or most of them.

This script was originally designed to improve loading external files.

* Page require N files
* Files are items
* Lists are packages of files
* Best lists combination reduces the traffic and requests
* Packages are good for client-server cache

## Example

```js
// required
var items = ['a', 'c', 'd', 'e'];

// available lists
var lists = {
	x: ['a', 'b', 'c'],
	y: ['a', 'b', 'e'],
	w: ['b', 'c'],
	i: ['d', 'e', 'f'],
	j: ['a', 'b', 'd', 'f', 'g'],
	k: ['b', 'm', 'n', 'o']
};

var solution = itemsinlists(items, lists);

console.log(solution);

{
	// lists combination
	conn: ['x', 'i'],
	// rest from last process
	find: ['d', 'e'],
	// lists have all items
	need: [],
	// efficience
	rank: 0.4347826086956522
}

```

## License

MIT

## Author

Alejandro Moraga <moraga86@gmail.com>