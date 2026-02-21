// Fungsi untuk menghitung waktu WIB + menit
export function calculateTimeRange(minutes: string): string {
  if (!minutes || minutes === '') return '...';
  
  const menit = parseInt(minutes);
  if (isNaN(menit)) return '...';
  
  const now = new Date();
  const endTime = new Date(now.getTime() + menit * 60000);
  
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const mins = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${mins}`;
  };
  
  return `${menit} MENIT (${formatTime(now)} - ${formatTime(endTime)})`;
}

// Fungsi untuk mengkonversi angka ke kata ordinal
export function numberToOrdinal(num: string): string {
  if (!num || num === '') return '...';
  
  const number = parseInt(num);
  if (isNaN(number)) return '...';
  
  const ordinals: { [key: number]: string } = {
    1: 'PERTAMA',
    2: 'KEDUA',
    3: 'KETIGA',
    4: 'KEEMPAT',
    5: 'KELIMA',
    6: 'KEENAM',
    7: 'KETUJUH',
    8: 'KEDELAPAN',
    9: 'KESEMBILAN',
    10: 'KESEPULUH'
  };
  
  return ordinals[number] || num;
}