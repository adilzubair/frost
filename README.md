# BitMasters

# Exam Buddy

A web application that help students prepare for examinations by analysing previous year question papers. Its gives the most important topics based on the past paper uploaded.

# Workflow
          1.We firstly upload a desired no. of PDF's(Previous Years Question Papers) to the front-end.
          2.Those PDF's are taken to the back-end and converted to text format. 
          3.These texts are then given to the paLM API along with a prompt to return the most important questions and keywords from these texts.
          4.We also give an optimized query.
          5.Finally the returend values are displayed to the user.

## versions used

Node 14.15.0

Angular  12.2.17


## To run the application 
`cd backend -> npm i 
          ->  npm start`


`cd front-end -> cd examBuddy -> npm i  ->
                              ng serve`
