import { TemplateCard } from './template-card';
import { calculateTimeRange } from '../utils/time-calculator';

export function Penyandraan() {
  const templates = [
    {
      title: 'Penyandraan - Pengumuman Awal',
      inputs: [
        { label: 'Atribut', key: 'atribut', placeholder: 'contoh: TOPENG HITAM' },
        { label: 'Area', key: 'area', placeholder: 'contoh: AREA BANK PUSAT' },
        { label: 'Koordinat', key: 'koordinat', placeholder: 'contoh: X: 123, Y: 456' }
      ],
      generateText: (values: Record<string, string>) => 
        `/policer TELAH TERJADI PENYANDRAAN OLEH ATRUBUT ${values.atribut || '...'} DI AREA ${values.area || '...'} ${values.koordinat || ''}, WARGA DI HARAP MENJAUH DARI AREA LOKASI TERSEBUT !`
    },
    {
      title: 'Penyandraan - Berubah Jadi Penembakan',
      inputs: [
        { label: 'Area', key: 'area', placeholder: 'contoh: AREA BANK PUSAT' }
      ],
      generateText: (values: Record<string, string>) => 
        `/policer STATUS PENYANDRAAN BERUBAH MENJADI PENEMBAKAN DI AREA ${values.area || '...'}, WARGA SILAHKAN MENJAUH ATAU KAMI TINDAK TEGAS !`
    },
    {
      title: 'Penyandraan - Countdown Clear',
      inputs: [
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 5', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER JIKA TIDAK ADA TEMBAKAN DALAM WAKTU ${calculateTimeRange(values.waktu)}, MAKA AKAN KAMI NYATAKAN CLEAR, TERIMA KASIH`
    },
    {
      title: 'Penyandraan - Tahap Evakuasi',
      inputs: [
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 5', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER PENYANDRAAN MEMASUKI TAHAP EVAKUASI DALAM ${calculateTimeRange(values.waktu)}, WARGA SILAHKAN MENJAUH DARI LOKASI PERAMPOKAN ATAU KAMI TINDAK TEGAS TERIMA KASIH`
    },
    {
      title: 'Penyandraan - Clear',
      inputs: [
        { label: 'Area', key: 'area', placeholder: 'contoh: AREA BANK PUSAT' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER PENYANDRAAN DI AREA ${values.area || '...'} DINYATAKAN CLEAR WARGA BISA MELANJUTKAN AKTIFITAS, TERIMA KASIH`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-orange-900/30 border border-orange-600 rounded-lg p-4 mb-6">
        <h2 className="text-orange-400 font-bold text-lg mb-2">⚠️ PENYANDRAAN</h2>
        <p className="text-orange-300 text-sm">Template untuk kasus penyandraan</p>
      </div>
      
      {templates.map((template, index) => (
        <TemplateCard
          key={index}
          title={template.title}
          inputs={template.inputs}
          generateText={template.generateText}
        />
      ))}
    </div>
  );
}