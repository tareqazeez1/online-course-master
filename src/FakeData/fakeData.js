const data = [
    {
        "name":"Learn C Programming",
        "instructor": "Bill Gates",
        "price": 9.99,
        "image":"data:image/png;base64,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",
        "topic": "Programming",
        "id":"1"
    },{
        "name":"Learn Angular JS",
        "instructor": "Steve Jobs",
        "price": 9.99,
        "image":"https://img-a.udemycdn.com/course/240x135/756150_c033_2.jpg",
        "topic": "Programming",
        "id":"2"
    },
    {
        "name":"Learn Web Development",
        "instructor": "Steve Jobs",
        "price": 9.99,
        "image":"https://img-a.udemycdn.com/course/240x135/625204_436a_2.jpg",
        "topic": "Programming",
        "id":"3"
    },
    {
        "name":"Mastering React",
        "instructor": "Mark Zukarberg",
        "price": 20.99,
        "image":"https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
        "topic": "Programming",
        "id":"34"
    },
    {
        "name":"Learn Guiter",
        "instructor": "Warfaze",
        "price": 10.99,
        "image":"https://img-a.udemycdn.com/course/240x135/1641684_39a4.jpg",
        "topic": "Music",
        "id":"43"
    },
    {
        "name":"Learn Networking",
        "instructor": "Bill Gates",
        "price": 10.99,
        "image":"https://img-a.udemycdn.com/course/240x135/751094_fb27_2.jpg",
        "topic": "IT",
        "id":"65"
    },
    {
        "name":"React for Beginners",
        "instructor": "Mark Zukerberg",
        "price": 10.99,
        "image":"https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
        "topic": "Programming",
        "id":"37"
    },
    {
        "name":"Learn C++",
        "instructor": "Tonny",
        "price": 9.99,
        "image":"https://img-a.udemycdn.com/course/240x135/1576854_9aeb.jpg",
        "topic": "Programming",
        "id":"86"
    },
    {
        "name":"Learn Linux",
        "instructor": "Jack Ma",
        "price": 12.99,
        "image":"https://img-a.udemycdn.com/course/240x135/533682_c10c_4.jpg",
        "topic": "Programming",
        "id":"8"
    },
    {
        "name":"Javascript ES7",
        "instructor": "Elon Mask",
        "price": 12.99,
        "image":"https://img-a.udemycdn.com/course/240x135/1551422_a13e_5.jpg",
        "topic": "Programming",
        "id":"9"
    },
    {
        "name":"Javascript ES6",
        "instructor": "Elon Mask",
        "price": 20.99,
        "image":"https://img-a.udemycdn.com/course/240x135/1105822_de56_4.jpg",
        "topic": "Programming",
        "id":"10"
    },
    {
        "name":"Machine learning for beinners",
        "instructor": "Hanson",
        "price": 20.99,
        "image":"https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg",
        "topic": "Programming",
        "id":"11"
    }
];

export default data;