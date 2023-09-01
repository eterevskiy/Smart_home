// const mongoose = require('mongoose');
// const User = require('./models/user'); // Импорт модели пользователя

// // Строка подключения к вашей базе данных MongoDB Atlas
// mongoose.connect('mongodb+srv://bryhadir:QSWUPT3wvg4FlNS1@cluster0.y1yevzt.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


// const usersData = [
//   { username: 'Aleksandr', password: 'password1' },
//   { username: 'user2', password: 'password2' },
// ];

// async function createUsers() {
//   try {
//     for (const userData of usersData) {
//       const newUser = new User(userData);
//       await newUser.save();
//       console.log(`Пользователь ${userData.username} создан`);
//     }
//     console.log('Все пользователи успешно созданы');
//   } catch (error) {
//     console.error('Ошибка при создании пользователей:', error);
//   } finally {
//     mongoose.connection.close();
//     console.log('Соединение с базой данных закрыто');
//   }
// }

// createUsers();
