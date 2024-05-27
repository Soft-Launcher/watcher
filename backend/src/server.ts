import express from 'express';
import payload from 'payload';

const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
    res.redirect(process.env.ADMIN_UI_BASE_PATH || '/admin');
});

const start = async () => {
    // Initialize Payload
    await payload.init({
        secret: process.env.PAYLOAD_SECRET,
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
        },
    });

    // Add your own express routes here

    app.listen(Number(process.env.PORT) || 3000);
};

start();
