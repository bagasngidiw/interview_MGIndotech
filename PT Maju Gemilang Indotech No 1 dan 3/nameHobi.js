const people = [{
        nama: "Smith",
        hobi: "Self service"
    },
    {
        nama: "Dio  ",
        hobi: "Design Grafis"
    },
    {
        nama: "Agung",
        hobi: "Bermain game"
    }
];

var sortByName = [...people]
sortByName = sortByName.sort(function (a, b) {
    if (a.nama < b.nama) {
        return -1;
    }
    if (a.nama > b.nama) {
        return 1;
    }
    return 0;
});

var sortByHobby = [...people]
sortByHobby = sortByHobby.sort(function (a, b) {
    if (a.hobi < b.hobi) {
        return 1;
    }
    if (a.hobi > b.hobi) {
        return -1;
    }
    return 0;
});

const result = {
    "result": [{
        nama: sortByName[0].nama,
        hobi: sortByHobby[0].hobi

    }]
}

console.log(result)
