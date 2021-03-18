$().ready(() => {
    // $("table").addClass("table table-sm");
    // $("button").addClass("btn btn-success");
    $("button").click(() => {
        $.getJSON("http://localhost:59525/api/users")
        .done(users => {console.log(users);
        display(users);})
        .fail( err => {console.error(err);})
    });
    // let on = toggle()
    // $("#style").click(() => {
    // $("table").addClass("table table-sm");
    // $("button").addClass("btn btn-success");
    // $("table").removeClass("table table-sm");
    // $("button").removeClass("btn btn-success");

    // $("table").addClass("table table-dark");
    // $("button").addClass("btn btn-danger");
    // $("table").removeClass("table table-dark");
    // $("button").removeClass("btn btn-danger");
        
    // });
});

const display = (users) => {
    let tbody =$("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append($(`<td>${user.id}</td>`));
        tr.append($(`<td>${user.userName}</td>`));
        tr.append($(`<td>${user.firstName}</td>`));
        tr.append($(`<td>${user.lastName}</td>`));
        tr.append($(`<td>${user.phone}</td>`));
        tr.append($(`<td>${user.email}</td>`));
        tr.append($(`<td>${user.isReviewer ? "Y" : "N"}</td>`));
        tr.append($(`<td>${user.isAdmin ? "Y" : "N"}</td>`));
    }

}