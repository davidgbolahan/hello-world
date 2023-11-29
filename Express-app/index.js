const express = require('express');

const app = express()

const port = 3032

// Database
const todoList = [
    { id: 1, title: "Buy groceries", desc: "Pick up eggs, milk, and bread from the supermarket.", completed: false },
    { id: 2, title: "Finish work report", desc: "Complete the quarterly report for the sales department.", completed: true },
    { id: 3, title: "Go for a run", desc: "Run for 30 minutes at the local park.", completed: false },
    { id: 4, title: "Call mom", desc: "Check in with mom and see how she's doing.", completed: true },
    { id: 5, title: "Read a book", desc: "Spend an hour reading 'The Great Gatsby.'", completed: false },
    { id: 6, title: "Plan weekend trip", desc: "Research and plan a weekend getaway to the mountains.", completed: true },
    { id: 7, title: "Pay bills", desc: "Pay the utility bills and rent for the month.", completed: false },
    { id: 8, title: "Attend meeting", desc: "Participate in the team meeting at 10 AM.", completed: true },
    { id: 9, title: "Fix leaking faucet", desc: "Call a plumber to fix the kitchen faucet.", completed: false },
    { id: 10, title: "Organize closet", desc: "Clean and organize the bedroom closet.", completed: true },
    { id: 11, title: "Write thank you notes", desc: "Send out thank you notes for the recent gifts.", completed: false },
    { id: 12, title: "Learn to cook a new recipe", desc: "Try making homemade lasagna for dinner.", completed: true },
    { id: 13, title: "Review project proposal", desc: "Review and provide feedback on the project proposal.", completed: false },
    { id: 14, title: "Take the dog for a walk", desc: "Walk the dog in the evening for exercise.", completed: true },
    { id: 15, title: "Practice playing the guitar", desc: "Spend 30 minutes practicing guitar chords.", completed: false },
    { id: 16, title: "Visit the dentist", desc: "Schedule and go for a regular dental checkup.", completed: true },
    { id: 17, title: "Watch a documentary", desc: "Watch a documentary about wildlife conservation.", completed: false },
    { id: 18, title: "Buy a birthday gift", desc: "Find a suitable gift for a friend's upcoming birthday.", completed: true },
    { id: 19, title: "Clean the garage", desc: "Organize and clean the clutter in the garage.", completed: false },
    { id: 20, title: "Study for an exam", desc: "Prepare for the upcoming history exam next week.", completed: true },
    { id: 21, title: "Water the plants", desc: "Give the indoor and outdoor plants a good watering.", completed: false },
    { id: 22, title: "Update resume", desc: "Update and improve your resume for job applications.", completed: true },
    { id: 23, title: "Fix the broken chair", desc: "Repair the wobbly chair in the dining room.", completed: false },
    { id: 24, title: "Plan a family picnic", desc: "Arrange a picnic with the family for the weekend.", completed: true },
    { id: 25, title: "Renew library books", desc: "Check and renew the library books before they're due.", completed: false },
    { id: 26, title: "Visit the art gallery", desc: "Spend the afternoon at the local art gallery.", completed: true },
    { id: 27, title: "Take a yoga class", desc: "Sign up for a yoga class at the fitness center.", completed: false },
    { id: 28, title: "Call the handyman", desc: "Request a handyman to fix a leak in the roof.", completed: true },
    { id: 29, title: "Prepare a healthy lunch", desc: "Make a nutritious salad for lunch today.", completed: false },
    { id: 30, title: "Watch a classic movie", desc: "Enjoy a classic movie from the 1960s this evening.", completed: true }
  ];

app.get('Todos', (request, response) => {
    response.send('Hello World!')
})

app.get('/intro', (request, response) => {
    response.send('My name is David Ashiedu and I am a student of the University of Lagos')
});



app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})