"use server";

import nodemailer from 'nodemailer';

export default async function sendEmail(name, email, subject, message) {
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            cc: email,
            subject: `Bevestiging contact formulier: ${subject}`,
            text: `Naam: ${name} \n Email: ${email} \n Bericht: ${message}`,
            html: `<!doctype html><html><meta charset="utf-8"><body style="margin: 0; padding: 0; box-sizing: border-box;"><main style="width: 85%; min-height: 100%; margin: auto; background-color: #f8e3ce; border-radius: 10px;"><div class="wrap" style="padding: 15%; position: relative;"><img alt="Influentia logo" src="https://res.cloudinary.com/dxksucaad/image/upload/v1682857997/favicon_smflwz.webp"><div class="info" style="font-size: 0.9rem; font-family: Arial, Helvetica, sans-serif; word-wrap: break-word;"><h1>Naam:</h1><p style="font-size: 1.25rem;">${name}<h1>Onderwerp:</h1><p style="font-size: 1.25rem;">${subject}<h1>Email:</h1><p style="font-size: 1.25rem;">${email}<h1>Bericht:</h1></div><div class="content" style="font-size: 1.25rem; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; white-space: pre-wrap;"><p>${message}<p style="font-family: Arial, Helvetica, sans-serif; text-decoration: underline; text-decoration-color: #398546;">Bedankt! Uw bericht wordt zo spoedig mogelijk in behandeling genomen.</div></div></main></html>`
        })
    } catch (error) {
        throw error;
    }
}