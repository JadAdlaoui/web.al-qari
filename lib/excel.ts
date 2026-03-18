import path from 'path';
import fs from 'fs';
import * as XLSX from 'xlsx';

export interface WaitlistEntry {
  '#': number;
  Datum: string;
  Naam: string;
  'E-mailadres': string;
  Telefoon: string;
}

const EXCEL_PATH = path.join(process.cwd(), 'wachtrij.xlsx');

export function getEntries(): WaitlistEntry[] {
  if (!fs.existsSync(EXCEL_PATH)) return [];
  const buf = fs.readFileSync(EXCEL_PATH);
  const wb = XLSX.read(buf, { type: 'buffer' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  return XLSX.utils.sheet_to_json<WaitlistEntry>(ws);
}

export function addEntry(naam: string, email: string, telefoon: string): WaitlistEntry[] {
  const entries = getEntries();
  const now = new Date();
  const datum = now.toLocaleString('nl-NL', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  entries.push({
    '#': entries.length + 1,
    Datum: datum,
    Naam: naam,
    'E-mailadres': email,
    Telefoon: telefoon,
  });

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(entries, {
    header: ['#', 'Datum', 'Naam', 'E-mailadres', 'Telefoon'],
  });
  ws['!cols'] = [
    { wch: 5 }, { wch: 18 }, { wch: 25 }, { wch: 35 }, { wch: 18 },
  ];
  XLSX.utils.book_append_sheet(wb, ws, 'Wachtrij');
  const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
  fs.writeFileSync(EXCEL_PATH, buf);

  return entries;
}

export function emailExists(email: string): boolean {
  return getEntries().some(
    (e) => e['E-mailadres']?.toLowerCase() === email.toLowerCase()
  );
}
