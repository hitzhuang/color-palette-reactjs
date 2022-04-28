class Tracker {
    constructor() {
        this.pool = {
            class: "t",
        };
    }

    allocate(hostType) {
        if (hostType in this.pool) {
            this.pool[hostType]++;
        } else {
            this.pool[hostType] = 1;
        }
        return hostType + this.pool[hostType];
    }

    deallocate(hostname) {
        for (let hostType in this.pool) {
            if (hostname.includes(hostType)) {
                console.log(hostname);
                console.log(hostType);
                let id = parseInt(hostname.split(hostType)[1]);
                console.log(id);
                if (id <= this.pool[hostType]) {
                    delete this.pool[hostType];
                    break;
                }
            }
        }
    }
}

function hostAllocation(queries) {
    var tracker = new Tracker();
    var results = [];
    queries.forEach(function (query) {
        var [action, name] = query.split(" ");
        if (action === "A") {
            results.push(tracker.allocate(name));
        } else if (action === "D") {
            tracker.deallocate(name);
        }
    });
    return results;
}

q = ["A apibox", "A apibox", "D apibox1", "A apibox", "A sitebox"];

console.log({
    name: "1t",
    age: 31,
});

// console.log(hostAllocation(q));

console.log(Math.pow(2, 54) - 1);
