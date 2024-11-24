"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
    await resend.emails.send({
        to: ['yashvanth27502@gmail.com'],
        from: "Acme <onboarding@resend.dev>",
        subject: "testing",
        html: "<strong> You are a dev warrior</strong>"
    })
}
