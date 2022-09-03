# RUMyProfessor
A JavaScript Chrome Extension to make finding the best professors at Rutgers University easier.

The contents of the RUMyProfessor folder are the files necessary to run my RUMyProfessor Chrome extension.
The name RUMyProfessor comes as a combination of Rutgers University (RU) and RateMyProfessor.
This Chrome extension allows students to find the best Rutgers Professors without having to leave the Course Schedule Planner webpage.

The RUMyProfessor folder includes:
1. manifest.json: JSON file that communicates to the Chrome extension page the details of RUMyProfessor.
2. content.js: JavaScript file that takes in the Professor's last name from Course Schedule Planner and displays the professor's rate info (rating and #of ratings).
3. popup.html: HTML file that contains the details of the extension's popup.
4. professors.json: JSON file that contains all professor information to be displayed.
5. getIDs.js: JavaScript file that can webscrape RateMyProfessor for desired professor details. Due to restrictions on Chrome extensions, this scraping works only in development.

The RMP python folder includes:
1. RMPClass.py: Python RateMyProfessor API file.
2. writeProfInfo.py: Python file to get professor data from RateMyProfessor using RMP API and organize data into proper formatting.
