const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
// app.use(cors({ origin:'http://127.0.0.1:5500'}));
const corsOptions = {
    origin: ['http://127.0.0.1', 'http://example2.com'],
};
const authRoutes = require('./routes/auth');

app.use(express.json());

app.use('/auth', authRoutes);
mongoose.connect('mongodb+srv://bryhadir:QSWUPT3wvg4FlNS1@cluster0.y1yevzt.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./models/user'); 

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     console.log(`${username}  | ${password}`);
//     if (username === 'admin' && password === 'admin') {
//         res.status(200).json({ message: 'Авторизация успешна' });
//         console.log('Авторизация успешна');
//     } else {
//         res.status(401).json({ message: 'Ошибка авторизации' });
//         console.log('Ошибка авторизации' );
//     }
// });

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Поиск пользователя в базе данных по имени пользователя
        const user = await User.findOne({ username });

        if (!user) {
            // Пользователь не найден
            return res.status(401).json({ message: 'Ошибка авторизации' });
        }

        // Проверка пароля
        if (user.password === password) {
            // Пароль совпадает - авторизация успешна
            return res.status(200).json({ message: 'Авторизация успешна' });
        } else {
            // Пароль не совпадает
            return res.status(401).json({ message: 'Ошибка авторизации' });
        }
    } catch (error) {
        // Ошибка при выполнении запроса к базе данных
        console.error(error);
        return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
});

