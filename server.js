const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// This is my data (one day it will come from database)
let events = [
  {
    "created": 1478090304000,
    "duration": 9000000,
    "id": "235292442",
    "name": "Cassandra and Scylla Real Life Experience by Kenshoo & MyHeritage  ",
    "status": "upcoming",
    "time": 1482336000000,
    "updated": 1479054296000,
    "utc_offset": 7200000,
    "waitlist_count": 0,
    "yes_rsvp_count": 131,
    "venue": {
      "id": 4761372,
      "name": "Kenshoo",
      "lat": 32.106529235839844,
      "lon": 34.83524703979492,
      "repinned": false,
      "address_1": "HaBarzel 6",
      "city": "Tel Aviv-Yafo",
      "country": "il",
      "localized_country_name": "Israel"
    },
    "group": {
      "created": 1456749346000,
      "name": "Tech-Talk-Teach",
      "id": 19641607,
      "join_mode": "open",
      "lat": 32.06999969482422,
      "lon": 34.77000045776367,
      "urlname": "Tech-Talk-Teach",
      "who": "Members"
    },
    "link": "https://www.meetup.com/Tech-Talk-Teach/events/235292442/",
    "manual_attendance_count": 0,
    "description": "<p><b>Agenda: </b><br/>18:00 – 18:30- Gathering (food and drinks)<br/>18:30 – 19:15- Scylla and Cassandra at Kenshoo- Noam Hasson, Big Data Team Leader @ Kneshoo<br/>19:30-20:15- PeopleStore - blazing fast 2.5 billion profiles storage- Ran Peled, Chief Architect @MyHeritage</p> <p>\n\n<b>\"Scylla and Cassandra at Kenshoo\"</b></p> <p><b>Abstract: </b><br/>Kenshoo is the industry leader in digital marketing and has run Cassandra for quite some time now. The Kenshoo team was interested in Scylla not just due to performance but for ease of administration. It is important to be able to run all of the background operations a sophisticated database keeps under the hood. Kenshoo engineer Noam Hasson demonstrates the speed of compaction and repair of Scylla verse Cassandra. Eventually Noam shows that three Scylla VMs can handle the load of 40 physical Cassandra machines.</p> <p><b>Bio: </b><br/>Noam Hasson has over 12 years of web development experience, and is currently the in-house big data expert at Kenshoo, a global software company that is the sole leader in bid management software and social advertising platforms. Previously, Noam was a web developer with StartApp, a global monetization and advertising mobile network. Prior to that, Noam was a co-founder and CEO of SociaLayer.com, an Israel-based software startup focusing on cutting-edge solutions and web technologies. Earlier in his career, Noam was the CTO of Mekusharim, a leading provider of social networking media solutions.</p> <p><b>\"PeopleStore - blazing fast 2.5 billion profiles storage\"</b></p> <p><b>Abstract: </b><br/>MyHeritage is home to 82 million users with 2.5 billion rich personal profiles in their family trees, stored on complex and highly optimized MySQL infrastructure. As we started encountering scalability and performance issues, we have built a new data store, based on Cassandra, Mesos+Docker, and Hadoop, that is highly scalable and blazing fast. In this meetup we will share the architecture, design considerations and lessons learned. Among the complexities we will cover is the challenge to load the system while data is changing, keeping a MySQL source-of-truth and Cassandra in synch, errors handling and monitoring.</p> <p><b>Bio: </b><br/>Ran Peled is Chief Architect at MyHeritage, with over 30 years of software development experience, and expertise in large-scale Internet applications.</p> ",
    "visibility": "public"
  },
  {
    "created": 1480953324000,
    "duration": 7200000,
    "id": "236044873",
    "name": "כשהרכב שלנו יודע עלינו הכל",
    "status": "upcoming",
    "time": 1482336000000,
    "updated": 1480972871000,
    "utc_offset": 7200000,
    "waitlist_count": 0,
    "yes_rsvp_count": 36,
    "venue": {
      "id": 7538822,
      "name": "Dublin Irish Pub",
      "lat": 32.16050720214844,
      "lon": 34.80963134765625,
      "repinned": false,
      "address_1": "4 Aryeh Shenkar Street",
      "city": "Herzliya",
      "country": "il",
      "localized_country_name": "Israel"
    },
    "group": {
      "created": 1382453299000,
      "name": "HAC - Herzliya Accelerator Center",
      "id": 10796142,
      "join_mode": "open",
      "lat": 32.16999816894531,
      "lon": 34.84000015258789,
      "urlname": "Herzliya-Accelerator-Center-Meetup",
      "who": "Entrepreneurs"
    },
    "link": "https://www.meetup.com/Herzliya-Accelerator-Center-Meetup/events/236044873/",
    "description": "<p>**ההרשמתכם לאירוע מובטחת רק באמצעות הלינק **</p> <p><br/><a href=\"https://www.eventbrite.com/e/29814720632\"><a href=\"https://www.eventbrite.com/e/29814720632\" class=\"linkified\">https://www.eventbrite.com/e/29814720632</a></a></p> <p><br/>תחום 'הרכב המחובר' הוא אחד הנושאים המעניינים והמרתקים כיום, בעידן האינטרנט של הדברים, נוכח היקף השימוש ברכב ברמה היומיומית ומספר הרכבים בעולם.</p> <p><br/>כיום הרכבים שלנו הם מחשב על גלגלים ולא רק מנוע על גלגלים כפי שהיו בעבר, הרכב שלנו אוסף עלינו מידע רב ויודע לנטר ולנתח את הפעילות וההרגלים שלנו. פתיחת דלתות וחלונות בעזרת שעון חכם והתאמה אוטומטית של הטמפרטורה והמוסיקה לפי ההעדפות שלנו, מתבצעים בטכנולוגיה המבוססת פלטפורמת ענן המפשטת בהצלחה פעולות יומיומיות מורכבות.</p> <p>כאמור החוויה הדיגיטלית מתחילה לפני הכניסה לרכב וממשיכה אחרי היציאה כשהמעבר שקוף לצרכן. פעולות יומיומיות כמו מציאת חנייה ותשלום עבורה, תדלוק וקניית אוכל מהיר יכולות להתבצע ישירות מהרכב או באמצעות סמארטפון שמחובר לרכב, והן מעניקות חוויה מושלמת למשתמש.</p> <p>במהלך המיטאפ יתקיים פאנל מומחים בהשתתפות: ד\"ר מיכל לפידות- מנהלת מרכז החדשנות General Motors ישראל, ד\"ר שאול רייכמן- מנהל מרכז החדשנות Renault ישראל, עמית קרפ- סגן נשיאBessemer Venture Partners והדר פודה- מנהלת פיתוח עסקי של יחידת הסטארט-אפים, Deloitte Israel.</p> <p>שלוש חברות סטרטאפ, המפתחות פתרונות שונים עבור עולם הרכב המקושר, יציגו את מוצריהם ביניהן, יעל ריבקינד- מנהלת שותפויות בחברת otonomo, אורי שעשוע- מייסד ומנהל מוצר בחברתNeura, גל אהרון- מייסדת חברת Engie.</p> <p>בואו לשמוע ממיטב המומחים והסטארטאפים בתחום על ההשפעה של המהפכה הדיגיטלית בעולם הרכב וההשפעה שלהם על החיים האורבניים, הביטוח, שרותי מסחר, ממשק מול יצרניות הרכב ועוד.</p> ",
    "visibility": "public"
  },
  {
    "created": 1416703426000,
    "id": "xdssclyvqbcc",
    "name": "she codes(tau) - Weekly HackNight",
    "status": "upcoming",
    "time": 1482336000000,
    "updated": 1416703426000,
    "utc_offset": 7200000,
    "waitlist_count": 0,
    "yes_rsvp_count": 3,
    "venue": {
      "id": 20681282,
      "name": "Tel Aviv University ",
      "lat": 0,
      "lon": 0,
      "repinned": false,
      "address_1": "Shrieber Building, room # 309",
      "city": "Tel Aviv-Yafo",
      "country": "il",
      "localized_country_name": "Israel"
    },
    "group": {
      "created": 1400061316000,
      "name": "she codes(tau);",
      "id": 14448062,
      "join_mode": "open",
      "lat": 32.06999969482422,
      "lon": 34.77000045776367,
      "urlname": "she-codes-tau",
      "who": "Coders"
    },
    "link": "https://www.meetup.com/she-codes-tau/events/236069406/",
    "description": "<p>Our HackNight is a 3-4 hours freestyle coding session in which developers are invited to work on any coding project they like, or learn a new language, while enjoying the hacking atmosphere, and network with other women developers.</p> <p>\n\n\nBring your laptop, and an idea for a coding project. If you don't have an idea, we will help you choose one. Feel free to work on your school-related projects as well.</p> <p>\n\n\nIf you're just starting off with coding, come, and we'll help you choose tutorials and learn further. Feel free to share with your develop(h)er friends.</p> <p><br/>We can't wait to see you :), don't forget your laptop!</p> <p><br/>**snacks will be available** :D</p> ",
    "visibility": "public"
  },
  {
    "created": 1481805548000,
    "duration": 10800000,
    "id": "236256569",
    "name": "Innovative Scaling Solutions",
    "status": "upcoming",
    "time": 1482336000000,
    "updated": 1482157781000,
    "utc_offset": 7200000,
    "waitlist_count": 0,
    "yes_rsvp_count": 125,
    "venue": {
      "id": 23846222,
      "name": "Bitan 26, Namal Tel Aviv",
      "lat": 0,
      "lon": 0,
      "repinned": false,
      "address_1": "Yosef Yakutieli 4, Tel Aviv",
      "city": "Tel Aviv-Yafo",
      "country": "il",
      "localized_country_name": "Israel"
    },
    "group": {
      "created": 1387171943000,
      "name": "Meetups at Wix",
      "id": 11468592,
      "join_mode": "open",
      "lat": 32.06999969482422,
      "lon": 34.77000045776367,
      "urlname": "at-wix",
      "who": "Members"
    },
    "link": "https://www.meetup.com/at-wix/events/236256569/",
    "description": "<p>Israel has been titled as a start up nation, but new startups worldwide are increasing drastically, and more scaling challenges are introduced. These startups, don’t always remain small, as some grow quickly, struggling to hold on to that innovation mentality. There are also large companies that are trying to learn from startups, how to stay relevant in the field.</p> <p>This meetup will discuss the innovative scaling solutions by AWS and Wix and the culture and technologies to support such solutions. Please note the lectures will be given in Hebrew.</p> <p><b>Schedule:</b></p> <p>18:00 - 18:30 - Drinks and food</p> <p>18:30 - 19:15 - Scaling Wix to over 90M users</p> <p>19:15 - 19:30 - Break</p> <p>19:30 - 20:15 - Scaling Your Business in Amazon Style</p> <p>20:15 - More drinks!</p> <p>\n\n\n\n<b>Scaling Wix to over 90M users - Yoav Abrahami<br/></b></p> <p>Over the first 10 years of Wix, Wix infrastructure has gone a number of transformations, starting as a monolithic application server with MySQL, evolving to a service based architecture with with diverse infrastructure. Over this 10 years journey, we have learned a thing or two - some DOs and some DON'Ts.</p> <p>In this presentation I will go over the evolution of Wix architecture, with the different transformations we have done to support Wix at scale. We will share some of our insights about building a web infrastructure for over 90M users</p> <p>Bio:</p> <p>Yoav Abrahami is the Chief Architect at Wix.com, working with developers and operations on building wix future products as well as accelerating and improving development processes. Prior to joining Wix.com, Yoav was an Architect at Amdocs Cramer OSS division. Yoav has a MS in Physics and BS in Computer Science from Tel Aviv University.</p> <p><b>Scaling Your Business in Amazon Style -  Guy Ernest</b></p> <p>In Amazon we are very passionate about helping our customers grow to become the next Amazon, Netflix, IronSource or Waze. We learned so much from our own experience and from the experience of many of our customers, and we love to share this experience with others.</p> <p>We see many small startups that are growing very quickly and struggling to keep the startup (=innovation) mentality. We also see many big companies that are trying to learn from startups how to stay relevant in a competitive market. It is more about agility, independence, smart application, collaboration, and the culture and technologies that can support it.</p> <p>In this lecture, I will share my personal experience and Amazon experience in solving scale problems. Machine learning is one of these scale solutions, and it is also the reason we broken down Amazon to very small two-pizza teams, and the tools that we give to these teams to have superpowers to innovate fast.</p> <p>Bio:</p> <p>Guy Ernest is the Principal Business Development Manager, Machine Learning at AWS. He joined Amazon more than 4 years ago as a solution architect and helped in building the technical team of AWS in Israel. 2 years ago, he moved to Amazon HQ in Seattle to work as a solution architect for Amazon.com, helping one of the largest companies on the planet to use the cloud better. He recently moved to a business development role in one of my passions of machine learning and deep learning, and helping customers to adopt “ML first” strategies.He also spent 25 years in various technical roles in the IDF, in his own startups and some big companies.</p> ",
    "how_to_find_us": "Bitan 26 is located across from Japanika",
    "visibility": "public"
  }
]

let places = [
  {
    id: '1',
    name: 'Coding Academy',
    lat: 2,
    lng: 1,
    tags: [
      'Joy',
      'Fun'
    ]
  },
  {
    id: '2',
    name: 'Home',
    lat: 0,
    lng: 1,
    tags: [
      'Hell'
    ]
  },
  {
    id: '3',
    name: 'Cofix',
    lat: 3,
    lng: 3,
    tags: [
      'Tasty',
      'Cheap'
    ]
  },
];

// *** REST API Events***

// LIST
app.get('/event', (req, res) => {
  res.json(events);
})

// READ
app.get('/event/:id', (req, res) => {
  const id = req.params.id;
  const event = events.find(currItem => currItem.id === id);
  res.json(event);
})

// DELETE
app.delete('/event/:id', (req, res) => {
  const id = req.params.id;
  events = events.filter(currItem => currItem.id !== id);
  res.end('event was Deleted!');
})

// CREATE
app.post('/event', (req, res) => {
  const item = req.body;
  item.id = findNextId();
  events.push(item);
  res.end('event was added!');

})

//UPDATE
app.put('/event', (req, res) => {
  const item = req.body;
  events = events.map(currItem => currItem.id === item.id ? item : currItem)
  res.end('Item was Updated!');
});
/********************************************************************************************* */
// *** REST API Places***

// LIST
app.get('/place', (req, res) => {
  res.json(places);
})

// READ
app.get('/place/:id', (req, res) => {
  const id = req.params.id;
  const place = places.find(currItem => currItem.id === id);
  res.json(place);
})

// DELETE
app.delete('/place/:id', (req, res) => {
  const id = req.params.id;
  places = places.filter(currItem => currItem.id !== id);
  res.end('place was Deleted!');
})

// CREATE
app.post('/place', (req, res) => {
  const item = req.body;
  item.id = findNextId();
  places.push(item);
  res.end('place was added!');

})

//UPDATE
app.put('/place', (req, res) => {
  const item = req.body;
  places = places.map(currItem => currItem.id === item.id ? item : currItem)
  res.end('place was Updated!');
});

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})

function findNextId() {
  var maxId = 0;
  events.forEach(item => {
    if (item.id > maxId) maxId = item.id;
  });
  return maxId + 1;
}
