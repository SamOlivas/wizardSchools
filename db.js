const Sequelize = require('sequelize');
const dbName = 'wizardSchools';
const db = new Sequelize(process.env.DATABASE_URL || `postgres:localhost/${dbName}`);

const Students = db.define('student', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
     validate: {
       isEmail: true
     }
  },
  GPA: {
    type: Sequelize.FLOAT
  }
})

const Schools = db.define('schools', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING
  }
})

Schools.hasMany(Students)

//SEED DATA
syncAndSeed = async() => {
  await db.sync({force:true})
  await studentsSeed.map((student) => {
    Students.create(student)
  })
  await schoolsSeed.map((school) => {
    Schools.create(school)
  })
}

const studentsSeed = [
  {firstName: 'Ron', lastName: 'Weasley', email: 'ronald@scabbers.net', GPA: 3.0},
  {firstName: 'Draco', lastName: 'Malfoy', email: 'draconios@deatheater.net', GPA: 3.5},
  {firstName: 'Harry', lastName: 'Potter', email: 'harry@quidditch.net', GPA: 2.3},
  {firstName: 'Hermione', lastName: 'Granger', email: 'hermione@smarts.net', GPA: 3.4},
  {firstName: 'Neville', lastName: 'Longbottom', email: 'neville@trevor.net', GPA: 3.6}
];

const schoolsSeed = [
  {name:'Space Academy', image:'https://ecdn.teacherspayteachers.com/thumbitem/Hogwarts-House-Crests-2761803-1478088561/original-2761803-3.jpg'},
  {name:'Hufflepuff', image:'https://www.nicepng.com/png/detail/43-439104_hufflepuff-crest-harry-potter-banner-harry-potter-hufflepuff.png'},
  {name:'Slytherin', image:'https://www.picclickimg.com/00/s/MTUwMFgxNTAw/z/INAAAOSw0j9ZQFMP/$/Slytherin-House-Crest-Pendant-Necklace-Harry-Potter-Hogwarts-_1.jpg'}
]

module.exports = {
  models: {
    Students,
    Schools
  },
  syncAndSeed,
  studentsSeed,
  schoolsSeed
}
