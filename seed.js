const {db} = require('./server/db')
const {green, red} = require('chalk')
const { models: { Campus, Student }} = require('./server/db/models')

const seed = async () => {
  await db.sync({force: true})

  // Create dummy student data
  const students = [
    { firstName: 'Donald',
      lastName: 'Glover',
      email: 'donaldglover@gmail.com',
      imageUrl: 'donald_glover.jpg',
      gpa: 4.0,
      campusId: 1
    },
    { firstName: 'Jonathan',
      lastName: 'Fricks',
      email: 'jonathanfricks@yahoo.com',
      gpa: 2.5,
      campusId: 2
    },
    {
      firstName: 'Vinnie',
      lastName: 'Paz',
      email: 'vinniepaz@gmail.com',
      imageUrl: 'vinnie_paz.jpeg',
      gpa: 3.5,
      campusId: 3
    }
  ]

  // Create dummy campus data
  const campuses = [
    {
      name: "Jone's BBQ and Foot Massage and Community College",
      address: '1207 E Mason St, Green Bay, WI 54301'
    },
    {
      name: "New York University",
      imageUrl: 'new_york_university.jpeg',
      address: 'New York, NY 10003',
      description: `New York University is a private research university based in New York City. Founded in 1831 by Albert Gallatin as an institution to "admit based upon merit rather than birthright or social class", NYU's historical campus is in Greenwich Village.`
    },
    {
      name: "Community College of Philadelphia",
      imageUrl: 'community_college_of_philadelphia.jpeg',
      address: '1700 Spring Garden St, Philadelphia, PA 19130',
      description: `The Community College of Philadelphia is a public, open-admission institution that provides both academic resources and support services to help students achieve their academic goals. As the largest public institution of higher education in Philadelphia, the College has served more than 685,000 of the city's residents since 1965.`
    }
  ]

  // Seed database with dummy data
  await Promise.all(campuses.map(campus => Campus.create({
      name: campus.name,
      imageUrl: campus.imageUrl ? campus.imageUrl : null,
      address: campus.address,
      description: campus.description
    })
  ))

  await Promise.all(students.map(student => Student.create({
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    imageUrl: student.imageUrl ? student.imageUrl : null,
    gpa: student.gpa,
    campusId: student.campusId ? student.campusId : null 
  })
))

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
