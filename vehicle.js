

var Scount = 0;
var Tcount = 0;
var Wcount = 0;
function Click() {
    var issue = document.getElementById("issues");
    document.getElementById("labelIssues").innerHTML = "Select next  issue type";
   
    var selectedIssue = issue.options[issue.selectedIndex].value;
    console.log(selectedIssue)
    if(selectedIssue == "S") {
        Scount++;
    }
    else if (selectedIssue == "T") {
        Tcount++;
    }
    else if(selectedIssue == "W") {
        Wcount++;
    }
    else {
        console.log("Noone is selected");
    }
}

function Button() {
    
    var issu = document.getElementById("issue-report");
    var day = document.getElementById("daytype").value;
    
    var head = document.createElement("h1");
    var textNode = document.createTextNode(`Vehicle issue report of ${day}`);
    head.appendChild(textNode);
    issu.appendChild(head);
    
    var pNode = document.createElement('h2');
    var dayNode = document.createTextNode(`Day Type: ${day}`);
    pNode.appendChild(dayNode)
    issu.appendChild(pNode)

    var ulN = document.createElement("ol");
    var first = document.createElement("li");
    var second = document.createElement("li");
    var third = document.createElement("li");
    var SNode = document.createTextNode(`Total Number of steering issues: ${Scount}`);
    var TNode = document.createTextNode(`Total number of turbo issues : ${Tcount}`);
    var wNode = document.createTextNode(`Total number of wiper issues : ${Wcount}`);
    
    
    first.appendChild(SNode);
    second.appendChild(TNode);
    third.appendChild(wNode);
    ulN.appendChild(first);
    ulN.appendChild(second);
    ulN.appendChild(third);
    issu.appendChild(ulN);
}



