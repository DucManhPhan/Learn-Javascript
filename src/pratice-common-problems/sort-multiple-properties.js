var sort_by;
(function() {
    // utility functions
    var default_cmp = function(a, b) {
        if (a == b) return 0;
        return a < b ? -1 : 1;
    },
        getCmpFunc = function(primer, reverse) {
            var cmp = default_cmp;
            if (primer) {
                cmp = function(a, b) {
                    return default_cmp(primer(a), primer(b));
                };
            }
            if (reverse) {
                return function(a, b) {
                    return -1 * cmp(a, b);
                };
            }
            return cmp;
        };

    // actual implementation
    sort_by = function() {
        var fields = [],
            n_fields = arguments.length,
            field, name, reverse, cmp;

        // preprocess sorting options
        for (var i = 0; i < n_fields; i++) {
            field = arguments[i];
            if (typeof field === 'string') {
                name = field;
                cmp = default_cmp;
            }
            else {
                name = field.name;
                cmp = getCmpFunc(field.primer, field.reverse);
            }
            fields.push({
                name: name,
                cmp: cmp
            });
        }

        return function(A, B) {
            var a, b, name, cmp, result;
            for (var i = 0, l = n_fields; i < l; i++) {
                result = 0;
                field = fields[i];
                name = field.name;
                cmp = field.cmp;

                result = cmp(A[name], B[name]);
                if (result !== 0) break;
            }
            return result;
        }
    }
}());

var homes = [
    {
    "h_id": "3",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201",
    "price": "162500"},
{
    "h_id": "4",
    "city": "Bevery Hills",
    "state": "CA",
    "zip": "90210",
    "price": "319250"},
{
    "h_id": "6",
    "city": "Dallas",
    "state": "TX",
    "zip": "75000",
    "price": "556699"},
{
    "h_id": "5",
    "city": "New York",
    "state": "NY",
    "zip": "00010",
    "price": "962500"}
];

homes.sort(sort_by('city', {
    name: 'price',
    primer: parseInt,
    reverse: true
}));

console.log(homes);