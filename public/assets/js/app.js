let employeeList = []
let kudosList = []

$.ajax({
    url: '/api/employee',
    method: 'GET'
}).then(function(response) {
    console.log(response);
    if(!response.error)
    {
        employeeList = response;
        populateEmployeeMenu();
    }
    else
    {
        console.log(response);
    }
});

const populateEmployeeMenu = function() {
    let employeeFrom = $("#employeeFromInput");
    let employeeTo = $("#employeeToInput");

    employeeFrom.empty();
    employeeFrom.append(`<option selected>From</option>`)
    employeeTo.empty();
    employeeTo.append(`<option selected>Sending To</option>`)

    for(let i = 0; i < employeeList.length; i++) {
        let newoption = $(`<option value="${employeeList[i]._id}">${employeeList[i].name}</option>`);
        employeeTo.append(newoption.clone());
        employeeFrom.append(newoption);

    }
}

$.ajax({
    url: '/api/kudos',
    method: 'GET'
}).then(function(response) {
    console.log(response);
    if(!response.error)
    {
        kudosList = response;
        renderKudos();
    }
    else
    {
        console.log(response);
    }
});

const renderKudos = function() {
    const kudosdiv = $("#kudosList");
    kudosdiv.empty();

    for(let i = 0; i < kudosList.length; i++)
    {
        kudosdiv.append(renderKudosCard(kudosList[i]));
    }
}

const renderKudosCard = function(kudos) {
    return $(`
    <div class="card kudoscard">
        <h5 class="card-header text-capitalize">${kudos.title}</h5>
        <div class="card-body">
            <h5 class="card-title">To: ${kudos.employeeTo.name}</h5>
            <h5 class="card-title">From: ${kudos.employeeFrom.name}</h5>
            <p class="card-text">${kudos.body}</p>
        </div>
    </div>
    `)
}

const postNewKudos = function() {
    let titlediv = $("#titleInput");
    let bodydiv = $("#bodyInput");
    let employeeFromInput = $("#employeeFromInput");
    let employeeToInput = $("#employeeToInput");

    if(!titlediv.val() || !bodydiv.val() || !employeeFromInput.children("option:selected").val() || !employeeToInput.children("option:selected").val())
    {
        return;
    }

    let newKudos = {
        title: titlediv.val(),
        body: bodydiv.val(),
        employeeTo: employeeFromInput.children("option:selected").val(),
        employeeFrom: employeeToInput.children("option:selected").val(),
    };

    $("#kudosModal").modal("hide");

    $.ajax({
        url: '/api/kudos',
        method: 'POST',
        data: newKudos
    }).then(function(response) {
        if(!response.error)
        {
            titlediv.val("");
            bodydiv.val("");
            employeeFromInput.val("From");
            employeeToInput.val("Sending To");
        }
    })
}

$("#submitButton").on("click", postNewKudos);