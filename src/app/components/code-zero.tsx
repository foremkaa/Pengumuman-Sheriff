import { TemplateCard } from './template-card';
import { calculateTimeRange } from '../utils/time-calculator';

export function CodeZero() {
  const templates = [
    {
      title: 'Code 0 - Pengumuman Awal',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' },
        { label: 'Lokasi', key: 'lokasi', placeholder: 'contoh: AREA DOWNTOWN' },
        { label: 'Atribut', key: 'atribut', placeholder: 'contoh: JAKET MERAH' }
      ],
      generateText: (values: Record<string, string>) => 
        `/policer TELAH TERJADI ${values.jenis || 'PENUSUKAN/PENEMBAKAN'} TERHADAP ANGGOTA SHERIFF DI LOKASI ${values.lokasi || '...'}  SHERIFF MENINDAK TEGAS ATRIBUT ${values.atribut || '...'}`
    },
    {
      title: 'Code 0 - Tahap Evakuasi',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' },
        { label: 'Area', key: 'area', placeholder: 'contoh: AREA DOWNTOWN' }
      ],
      generateText: (values: Record<string, string>) => 
        `/policer STATUS ${values.jenis || 'PENUSUKAN/PENEMBAKAN'} DI AREA ${values.area || '...'} MEMASUKI TAHAP EVAKUSASI, WARGA HARAP MENJAUH DARI LOKASI ATAU KAMI TINDAK TEGAS !`
    },
    {
      title: 'Code 0 - Sheriff Tarik Mundur',
      inputs: [
        { label: 'Atribut', key: 'atribut', placeholder: 'contoh: JAKET MERAH' },
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 5', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/policer SHERIFF TARIK MUNDUR ATAS PENINDAKAN ATRIBUT ${values.atribut || '...'} DAN AKAN MEMASUKI TAHAP EVAKUASI DALAM WAKTU ${values.waktu || '...'} (${calculateTimeRange(values.waktu)})`
    },
    {
      title: 'Code 0 - Clear',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' },
        { label: 'Area', key: 'area', placeholder: 'contoh: AREA DOWNTOWN' }
      ],
      generateText: (values: Record<string, string>) => 
        `/policer STATUS ${values.jenis || 'PENUSUKAN/PENEMBAKAN'} DI AREA ${values.area || '...'} DINYATAKAN CLEAR, WARGA SILAHKAN MELANJUTKAN AKTIVITASNYA KEMBALI TERIMAKASIH`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 mb-6">
        <h2 className="text-red-400 font-bold text-lg mb-2">⚠️ CODE 0 - EMERGENCY</h2>
        <p className="text-red-300 text-sm">Template untuk situasi darurat terhadap anggota Sheriff</p>
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
