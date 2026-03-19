import { google } from 'googleapis';

function getAuth() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!);
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

export async function appendEntry(naam: string, email: string, telefoon: string) {
  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

  // Haal laatste volgnummer op uit kolom A
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Wachtrij!A:A',
  });
  const rows = res.data.values ?? [];
  // Zoek het hoogste nummer (sla header over)
  let lastNum = 0;
  for (let i = 1; i < rows.length; i++) {
    const n = parseInt(rows[i]?.[0], 10);
    if (!isNaN(n) && n > lastNum) lastNum = n;
  }
  const nextNum = lastNum + 1;

  const now = new Date().toLocaleString('nl-NL', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Wachtrij!A:E',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[nextNum, now, naam, email, telefoon]],
    },
  });
}

export async function emailExists(email: string): Promise<boolean> {
  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Wachtrij!D:D',
  });

  const emails = (res.data.values ?? []).flat().map((e) => e.toLowerCase());
  return emails.includes(email.toLowerCase());
}

export async function getCount(): Promise<number> {
  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Wachtrij!D:D',
  });

  const rows = res.data.values ?? [];
  return rows.length;
}
