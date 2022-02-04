const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const init = () => {
    app.listen(PORT, () => {
        console.log(`🚀🚀 Server running on http://localhost:${PORT} 🚀🚀`);
    });
};

init();