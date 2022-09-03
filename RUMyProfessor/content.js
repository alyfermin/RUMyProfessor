/*printInfo: takes the last name (lName) and the professor info object (pInfo), verifies that the highlighted
text is a valid Rutgers University Professor, and displays the professor info (full name, rating, and num of ratings) 
on the Course Schedule Planner webpage. */
async function printInfo(lName, pInfo){
    if (pInfo["fName"]== null) return;

    const info= document.getElementsByTagName("h2")[2];

    let stats= document.createElement('stats');
    let statsText= document.createTextNode("Professor " + pInfo["fName"] + " " + lName + ": rating:" + pInfo["rating"] + "/5; number of ratings:" + pInfo["numRatings"]);
    stats.appendChild(statsText);
    let addBreak= document.createElement('br');
    stats.appendChild(addBreak);
    info.parentNode.insertBefore(stats, info.nextSibling);
}



//getID: takes the last name of a professor (name) and passes last name and professor info object (json) to printInfo
async function getID(name){
    const url= chrome.runtime.getURL('./profInfo.json');
    fetch(url)
        .then((response) => response.json())
        .then((json) =>  printInfo(name, json[name]));
}



//listens for highlight on the Course Schedule Planner page, formats the highlighted text, and passes the info oto getID
window.addEventListener('mouseup', highlighted);
function highlighted(){
    let prof= window.getSelection().toString().trim();
    if(prof.length > 0){    //if text is valid, send prof to the background scipt
        prof=prof.toLowerCase();
        prof= prof.charAt(0).toUpperCase() + prof.slice(1);
        getID(prof);
        
    }
    else return 1;
}
