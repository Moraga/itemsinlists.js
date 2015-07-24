/**
 * Finds the best lists combination that have all required items or most of them
 * @param {Array} items Required items
 * @param {Object} lists Lists {name => [items] ...}
 * @return {Object} Best combination. Items not found or discarted from combination are in "need"
 * @author Alejandro Moraga <moraga86@gmail.com>
 */
(function(root, factory) {
	if (typeof define == 'function' && define.amd)
		define(factory);
	else if (typeof exports == 'object' && exports)
		module.exports = factory();
	else
		root.itemsinlists = factory();
})(this, function (items, lists) {
	// array of solutions
	// default solution has no lists combination
	var opts = [{
		conn: [],
		find: [],
		need: items,
		rank: 0
	}];
	
	// create new solutions based in other solutions (combinations)
	for (var i = 0; i < opts.length; i++) {
		if (opts[i].need.length) {
			for (var name in lists) {
				var find = [];
				var need = [];
				for (var j = 0; j < opts[i].need.length; j++) {
					var item = opts[i].need[j];
					if (lists[name].indexOf(item) != -1) {
						find.push(item);
					}
					else {
						need.push(item);
					}
				}
				
				// adds the new solution
				if (find.length) {
					opts.push({
						conn: opts[i].conn.slice(0).concat(name),
						find: find,
						need: need,
						rank: find.length / (lists[name].length + need.length + opts[i].conn.length * 2 - opts[i].rank)
					});
				}
			}
		}
	}
	
	// sort the solutions by efficiency
	opts.sort(function(a, b) {
		return b.rank - a.rank;
	});
	
	return opts[0];
});