import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import { google } from 'googleapis'; // Uncomment when using Google Sheets

// Environment variables
//const serviceAccountKeyFile = process.env.GOOGLE_SHEET_KEY_FILE;
// const sheetId = process.env.GOOGLE_SHEET_ID;
// const tabName = 'Sheet1';
// const range = 'A:G';

/*
// Uncomment this when you plan to use Google Sheets
const getGoogleSheetClient = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: serviceAccountKeyFile,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
};

const readGoogleSheet = async (googleSheetClient, sheetId, tabName, range) => {
  const res = await googleSheetClient.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tabName}!${range}`,
  });
  return res.data.values.map(row => ({ name: row[0], email: row[1] }));
};
*/

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNo,
      gender,
      modeOfParticipation,
      summitDiscoveryMethod,
    } = await req.json();

    console.log(
      firstName,
      lastName,
      email,
      phoneNo,
      gender,
      modeOfParticipation,
      summitDiscoveryMethod
    );

    // === Nodemailer Config ===
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "invitations@gharvestisland.org",
        pass: "luoa hyxl rplv rngf",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // === Email to Organizers ===
    const mailOptionsToOrganizers = {
      from: 'registration@gharvestisland.org',
      to: 'moji.aladeojebi@gharvestisland.org',
      bcc: 'ugwuisaaciu@gmail.com,crystal.chigbu@gharvestisland.org,seun.onagoruwa@gharvestisland.org',
      subject: 'New Registration Form Submission',
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone No.:</strong> ${phoneNo}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Mode of Participation:</strong> ${modeOfParticipation}</p>
        <p><strong>Summit Discovery Method:</strong> ${summitDiscoveryMethod}</p>
      `,
    };

    // === Confirmation Email to Registrant ===
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for Registering',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Faith Conference 2025</title>
  <style>
    @media only screen and (max-width: 800px) {
      .container { width: 100% !important; padding: 20px !important; }
      .btn { display: block !important; width: 100% !important; box-sizing: border-box; }
      h2 { font-size: 22px !important; }
      p, li { font-size: 16px !important; }
      .social-icons img { width: 24px !important; margin: 0 6px !important; }
    }
  </style>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8f9fa; margin: 0; padding: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
    <tr>
      <td align="center">
        <table class="container" width="700" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <tr>
            <td>
              <img src="https://kelechieze.wordpress.com/wp-content/uploads/2025/05/faithbanner.jpg" alt="Faith Conference 2025 Banner" style="width: 100%; display: block;" />
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <h2 style="color: #333366; font-size: 26px; margin-top: 0;">Faith Conference 2025: Walk by Faith, Not by Sight</h2>
              <p style="font-size: 17px; line-height: 2;">Dear ${firstName || "Attendee"},</p>
              <p style="font-size: 17px; line-height: 2;">Faith Conference is back—and we’re excited to invite you into a fresh encounter with God in 2025!</p>
              <blockquote style="font-size: 17px; line-height: 2; font-style: italic; color: #555; margin: 20px 0;">
                “Now faith is the substance of things hoped for, the evidence of things not seen.” – Hebrews 11:1
              </blockquote>
              <p style="font-size: 17px; line-height: 2;">Faith is how we begin and continue our journey with God. It gives us strength to believe, even when we don’t see. This year’s conference is about stirring up that kind of faith—strong, real, and rooted in His Word.</p>
              <p style="font-size: 17px; line-height: 2;">You’re blessed—but you’ll be extra blessed if you attend!</p>
              <p style="font-size: 17px; line-height: 2;">Warm regards,<br/><strong>Faith Conference Team</strong></p>
              <table align="center" cellpadding="0" cellspacing="0" style="margin-top: 40px;">
                <tr>
                  <td align="center" class="social-icons">
                    <a href="https://facebook.com" target="_blank"><img src="https://kelechieze.wordpress.com/wp-content/uploads/2024/12/faybook.png" alt="Facebook" width="30" /></a>
                    <a href="https://twitter.com" target="_blank"><img src="https://kelechieze.wordpress.com/wp-content/uploads/2024/12/twittwit.png" alt="Twitter" width="30" /></a>
                    <a href="https://instagram.com" target="_blank"><img src="https://kelechieze.wordpress.com/wp-content/uploads/2024/12/ig.png" alt="Instagram" width="30" /></a>
                    <a href="https://youtube.com" target="_blank"><img src="https://kelechieze.wordpress.com/wp-content/uploads/2025/05/yhujio.png" alt="YouTube" width="30" /></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; font-size: 13px; color: #666; padding: 15px; background-color: #f0f0f0;">© 2025 FAITH CONFERENCE, All rights reserved.</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    };

    // Send emails
    await transporter.sendMail(mailOptionsToOrganizers);
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
