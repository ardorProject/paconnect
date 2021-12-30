# Questions endpoints

Base url: https://api-paconnect.herokuapp.com/

Endpoints:

- `GET` v1/api/questions: retrieve all questions
- `GET` v1/api/questions?formType=single: retreive questions with specific type

  `formType` can be either `single`, `personal`, or `group`

- `POST` v1/api/questions: create a question

  Example request body:

  ```json
  {
    "id": "q_2",
    "formType": "personal",
    "isDeleted": false,
    "type": "text",
    "label": "What is your name?",
    "required": true,
    "deletable": false,
    "potentialAnswers": ["Troy", "Minh"]
  }
  ```

- `PUT` v1/api/question/`:id`: update a question by id

  Example request body:

  ```json
  {
    "id": "q_2",
    "formType": "personal",
    "isDeleted": false,
    "type": "text",
    "label": "What is your name?",
    "required": true,
    "deletable": false,
    "potentialAnswers": ["Troy", "Minh"]
  }
  ```

- `DELETE` v1/api/questions/`:id`: delete a question by id

# Users

- Signup
  - make sure no users sign up twice
- Signin
- Get the token for later requests
- Password reset
