const db = require('./database')
const { STRING, TEXT, DECIMAL } = require('sequelize')

/*
      ------
    | Campus |
      ------

    type: SQL Model object
    values:
        name: String representation of campus name
        imageUrl: URL of main campus image
        address: String representation of campus address
        description: String representation of brief campus descripton
*/
const Campus = db.define('campus', {
    name: {
        type: STRING,
        notEmpty: true,
        notNull: true
    },
    imageUrl: {
        type: STRING,
        isUrl: true,
        defaultValue: './default_campus.png'
    },
    address: {
        type: STRING,
        notEmpty: true,
        notNull: true
    },
    description: {
        type: TEXT,
        defaultValue: 'No description provided'
    }
})

/*
      ------
    | Student |
      ------

    type: SQL Model object
    values:
        firstName: String representation of student's first name
        lastName: String representation of student's last name
        email: String representation of student's email
        imageUrl: URL of student profile image
        gpa: Single decimal numerical representation of student's GPA, between 0.0 and 4.0
*/
const Student = db.define('student', {
    firstName: {
        type: STRING,
        notEmpty: true,
        notNull: true
    },
    lastName: {
        type: STRING,
        notEmpty: true,
        notNull: true
    },
    email: {
        type: STRING,
        isEmail: true,
        notEmpty: true,
        notNull: true
    },
    imageUrl: {
        type: STRING,
        isUrl: true,
        defaultValue: './default_student.jpg'
    },
    gpa: {
        type: DECIMAL(10, 1),
        range: [0.0, 4.0],
        notEmpty: true,
        notNull: true
    }
})

// Export models
module.exports = { models: {
    Campus,
    Student
}}
