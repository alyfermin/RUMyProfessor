//constants that have references to axios and cheerio for taking and converting info
const cheerio= require("cheerio");
const axios= require("axios");

//getData: takes ID of the professor, then queueries, processess, and returns the ratings data from RMP as an array
async function getData(ID){
    const page= "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + ID; 
    try{
        const response= await axios.get(page);
        const pageData= cheerio.load(response.data);

        const Fname= pageData("#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.gtQBUD > div.TeacherRatingsPage__TeacherBlock-sc-1gyr13u-1.jMpSNb > div.TeacherInfo__StyledTeacher-ti1fio-1.kFNvIp > div:nth-child(2) > div.NameTitle__Name-dowf0z-0.cfjPUG > span:nth-child(1)").text();
        const Lname= pageData("#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.gtQBUD > div.TeacherRatingsPage__TeacherBlock-sc-1gyr13u-1.jMpSNb > div.TeacherInfo__StyledTeacher-ti1fio-1.kFNvIp > div:nth-child(2) > div.NameTitle__Name-dowf0z-0.cfjPUG > span.NameTitle__LastNameWrapper-dowf0z-2.glXOHH").text();
        var rating= pageData("#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.gtQBUD > div.TeacherRatingsPage__TeacherBlock-sc-1gyr13u-1.jMpSNb > div.TeacherInfo__StyledTeacher-ti1fio-1.kFNvIp > div:nth-child(1) > div.RatingValue__AvgRating-qw8sqy-1.gIgExh > div > div.RatingValue__Numerator-qw8sqy-2.liyUjw").text();
        const numRatings= pageData("#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.gtQBUD > div.TeacherRatingsPage__TeacherBlock-sc-1gyr13u-1.jMpSNb > div.TeacherInfo__StyledTeacher-ti1fio-1.kFNvIp > div:nth-child(1) > div.RatingValue__NumRatings-qw8sqy-0.jMkisx").text();
        const wouldTakeAgain= pageData("#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.gtQBUD > div.TeacherRatingsPage__TeacherBlock-sc-1gyr13u-1.jMpSNb > div.TeacherInfo__StyledTeacher-ti1fio-1.kFNvIp > div.TeacherFeedback__StyledTeacherFeedback-gzhlj7-0.cxVUGc > div:nth-child(1) > div.FeedbackItem__FeedbackNumber-uof32n-1.kkESWs").text();
        const levelDiff= pageData("#root > div > div > div.PageWrapper__StyledPageWrapper-sc-3p8f0h-0.gtQBUD > div.TeacherRatingsPage__TeacherBlock-sc-1gyr13u-1.jMpSNb > div.TeacherInfo__StyledTeacher-ti1fio-1.kFNvIp > div.TeacherFeedback__StyledTeacherFeedback-gzhlj7-0.cxVUGc > div:nth-child(2) > div.FeedbackItem__FeedbackNumber-uof32n-1.kkESWs").text();

        rating+= "/5";
        
        var rat= document.getElementById("rating");
        rat.innerHTML('<p rating=' + rating + '></p>');

        var numRat= document.getElementById("numRatings");
        numRat.innerHTML('<p numRatings=' + numRatings + '></p>');

        var wTA= document.getElementById("wouldTakeAgain");
        wTA.innerHTML('<p wouldTakeAgain=' + wouldTakeAgain + '></p>');

        var levelD= document.getElementById("levelDiff");
        levelD.innerHTML('<p levelDiff=' + levelDiff + '></p>');

        return 1;
        
    }
    catch(error){
        console.error(error);
    }
}