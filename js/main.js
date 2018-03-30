window.onload = function() {
    fetchIssues();

    document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

}

var id = 1;

function fetchIssues() {
    // var issues = [{
    //         id: '1',
    //         desc: 'description',
    //         severity: 'hight',
    //         assignedTo: 'Truongg',
    //         status: 'On'
    //     },
    //     {
    //         id: '2',
    //         desc: 'description',
    //         severity: 'hight',
    //         assignedTo: 'Truongg',
    //         status: 'On'
    //     }
    // ];
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issueList = document.getElementById('issuesList');

    if (issues == null) return false;

    issueList.innerHTML = "";


    for (var i = 0; i < issues.length; i++) {
        console.log(issues);
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;


        issueList.innerHTML += '<div class="well">' +
            '<h6>Issue ID: ' + id + '</h6>' +
            '<p><span class="label label-info">' + status + '</span></p>' +
            '<h3>' + desc + '</h3>' +
            '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' ' +
            '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
            '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' + id + '\')">Close</a> ' +
            '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' + id + '\')">Delete</a>' +
            '</div>';
    };


};

function saveIssue(e) {
    var issueId = id++;



    document.getElementById('issueInputForm').reset();

    fetchIssues();

    e.preventDefault();
}