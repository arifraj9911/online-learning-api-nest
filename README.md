<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Online Learning API

## API Documentation

The following endpoints are available for the API:

- **Base URL**: `http://localhost:3000`

### Endpoints

- **Login**
  - **Endpoint**: `POST /auth/login`
  - **URL**: [http://localhost:3000/auth/login](http://localhost:3000/auth/login)
  - **Request Body**:
    ```json
    {
      "email": "arif.raj9911@gmail.com",
      "password": "admin",
      "role": "teacher"
    }
    ```
  - **Description**: Requires `email`, `password`, and `role`. 

- **Get Courses**
  - **Endpoint**: `GET /course`
  - **URL**: [http://localhost:3000/course](http://localhost:3000/course)
  - **Description**: Retrieves a list of courses.

- **Create Course**
  - **Endpoint**: `POST /course`
  - **URL**: [http://localhost:3000/course](http://localhost:3000/course)
  - **Description**: Creates a new course. Request body should include course details.

- **Get Profile**
  - **Endpoint**: `GET /profile/{role}`
  - **URL**: [http://localhost:3000/profile/teacher](http://localhost:3000/profile/teacher) or [http://localhost:3000/profile/student](http://localhost:3000/profile/student)
  - **Description**: Retrieves profile information for `teacher` or `student`.
  - **Example Credentials**:
    - **Teacher**: `{ "email": "arif.raj9911@gmail.com", "password": "admin" }`
    - **Student**: `{ "email": "raj@gmail.com", "password": "raj" }`

- **Get User**
  - **Endpoint**: `GET /user`
  - **URL**: [http://localhost:3000/user](http://localhost:3000/user)
  - **Description**: Retrieves user information.

- **Enroll in Course**
  - **Endpoint**: `POST /course/enroll`
  - **URL**: [http://localhost:3000/course/enroll](http://localhost:3000/course/enroll)
  - **Request Body**:
    ```json
    {
      "courseId": 9,
      "passcode": "che123"
    }
    ```
  - **Description**: Enrolls a student in a course.

- **Remove Enrolled Student**
  - **Endpoint**: `DELETE /course/{courseId}/remove-student/{studentId}`
  - **URL**: [http://localhost:3000/course/{courseId}/remove-student/{studentId}](http://localhost:3000/course/{courseId}/remove-student/{studentId})
  - **Description**: Removes an enrolled student from a course.