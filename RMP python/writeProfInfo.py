import requests
import json
from RMPClass import RateMyProfScraper


#write Rutgers prof RMP data to professors.json file
def writeProfessors():
    Rutgers= RateMyProfScraper(825)
    data= json.dumps(Rutgers.professorlist)
    file= open('professors.json', 'a')
    file.write(data)
    file.close()


#write Rutgers prof first name, last name, and ID to a JSON file
# #AKA: tFname, tMiddlename, tLname, tid 
def writeProfID():
    f= open('professors.json', 'r')
    data= f.read()
    f.close

    #turn data into a dictionary, not string
    professors= json.loads(data)

    #make list (profs), add name and ID of every prof to list as a dict
    profs= {}

    for i in range(0, len(professors)):
        profs[professors[i]['tLname']]= professors[i]['tid']

    #stringify the data and write dictionary to a JSON file
    data= json.dumps(profs)
    file= open('profIDs.json', 'a')
    file.write(data)
    file.close()

#read professors.json and organize and print to file profInfo.json
def writeProfInfo():
    f= open('professors.json', 'r')
    data= f.read()
    f.close

    professors= json.loads(data)

    #make list (profs), add Lname: {first Name, rating, num of Ratings}
    profs= {}

    for i in range (0, len(professors)):
        profs[professors[i]['tLname']]= {
            "fName": professors[i]['tFname'],
            "rating": professors[i]['overall_rating'],
            "numRatings": professors[i]['tNumRatings']
        }

    #stringify the data and write dictionary to a JSON file
    data= json.dumps(profs)
    file= open('profInfo.json', 'a')
    file.write(data)
    file.close()