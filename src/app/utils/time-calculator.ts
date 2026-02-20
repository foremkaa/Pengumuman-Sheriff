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
  
  return `${formatTime(now)} - ${formatTime(endTime)}`;
}
