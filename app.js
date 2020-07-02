// const express = require("express");
// const app = express();
const db = require("./models");
// const PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const apiRoutes = require("./routes/api-routes");
// app.use(apiRoutes);

//how to use promises wrong
// db.sequelize.sync().then(() => {
//     // app.listen(PORT, () => {
//     //     console.log(`Listening at http://localhost:${PORT}`);
//     // })
//     return db.student.create({ fname: "Abdul" })
//         .then(() => {
//             return db.student.findAll()
//         })
//         .then((allStudents) => console.log(allStudents));
// });

//how to use promises correctly
db.sequelize.sync().then(() => {
    return db.student.create({ fname: "Farid" })
        .then(() => {
            return db.student.findAll()
        })
        .then((allStudents) => {
            console.log(allStudents);
            process.exit();
        });

});
