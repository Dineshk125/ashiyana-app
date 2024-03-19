// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();
// const PORT = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create User Schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.use(bodyParser.json());

// // SignUp Endpoint
// app.post('/signup', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Hash the password before saving it to the database
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the user to the database
//     const user = new User({ username, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // SignIn Endpoint
// app.post('/signin', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find the user in the database
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(401).json({ error: 'Authentication failed' });
//     }

//     // Compare the entered password with the hashed password in the database
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ error: 'Authentication failed' });
//     }

//     // Generate a JWT token for authentication
//     const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });

//     res.status(200).json({ message: 'Authentication successful', token });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

