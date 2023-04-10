import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

mongoose.connect('mongodb+srv://sofwanmd13:Cgs120013*@cluster0.8afbpbf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

const User = require('./models/User');

const user = new User({
  firstName: 'Abul Boyan Mohammed',
  lastName: 'Sofwan',
  email: 'sofwanmd701@yahoo.com',
  password: 'my-password',
  mobileNumber: '1234567890'
});

user.save().then(() => {
  console.log('User created successfully');
}).catch((err) => {
  console.error('Error creating user', err);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
