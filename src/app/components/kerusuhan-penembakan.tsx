import { TemplateCard } from './template-card';
import { calculateTimeRange } from '../utils/time-calculator';

export function KerusuhanPenembakan() {
  const templates = [
    {
      title: 'Pengumuman Kerusuhan',
      inputs: [
        { label: 'Wilayah', key: 'wilayah', placeholder: 'contoh: AREA PASAR' },
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 3', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER TELAH TERJADI KERUSUHAN DI WILAYAH ${values.wilayah || '...'}, HARAP SEGERA MEMBUBARKAN DIRI DALAM WAKTU ${calculateTimeRange(values.waktu)} DAN WARGA HARAP MENJAUH ATAU AKAN KAMI TINDAK TEGAS. TERIMA KASIH`
    },
    {
      title: 'Pengumuman Penembakan/Penusukan',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' },
        { label: 'Wilayah', key: 'wilayah', placeholder: 'contoh: AREA CLUB' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER TELAH TERJADI ${values.jenis || 'PENEMBAKAN/PENUSUKAN'} DI WILAYAH ${values.wilayah || '...'} WARGA HARAP MENJAUH ATAU AKAN KAMI TINDAK TEGAS. TERIMA KASIH`
    },
    {
      title: 'Tahap Evakuasi Penembakan/Penusukan',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' },
        { label: 'Wilayah', key: 'wilayah', placeholder: 'contoh: AREA CLUB' },
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 5', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER STATUS ${values.jenis || 'PENEMBAKAN/PENUSUKAN'} WILAYAH ${values.wilayah || '...'} MEMASUKI TAHAP EVAKUASI DALAM ${calculateTimeRange(values.waktu)}, WARGA SILAHKAN MENJAUH DARI LOKASI PERAMPOKAN ATAU KAMI TINDAK TEGAS TERIMA KASIH`
    },
    {
      title: 'Clear Penembakan/Penusukan',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' },
        { label: 'Wilayah', key: 'wilayah', placeholder: 'contoh: AREA CLUB' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER STATUS ${values.jenis || 'PENEMBAKAN/PENUSUKAN'} WILAYAH ${values.wilayah || '...'} DINYATAKAN CLEAR WARGA BISA MELANJUTKAN AKTIFITASNYA, TERIMA KASIH`
    },
    {
      title: 'Pengejaran Suspect',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER TELAH TERJADI PENGEJARAN SUSPECT ${values.jenis || 'PENUSUKAN/PENEMBAKAN'}, APABILA WARGA MENDENGAR SUARA SIRINE, HARAP TIDAK MENDEKAT DAN TETAP BERHATI-HATI KARENA KAMI TIDAK BERTANGGUNG JAWAB APABILA ADA TABRAKAN YANG TERJADI ! ! !`
    },
    {
      title: 'Status Pencarian Suspect',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' },
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 10', type: 'number' as const },
        { label: 'Ciri-ciri Kendaraan', key: 'ciri', placeholder: 'contoh: MOTOR SPORT MERAH PLAT B 5678 CD' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER STATUS PENGEJARAN SUSPECT ${values.jenis || 'PENEMBAKAN/PENUSUKAN'} BERUBAH MENJADI STATUS PENCARIAN SELAMA ${calculateTimeRange(values.waktu)} TERHADAP KENDARAAN DENGAN CIRI CIRI ${values.ciri || '...'} , WARGA HARAP TETAP BERHATI-HATI. TERIMA KASIH.`
    },
    {
      title: 'Clear Pengejaran Suspect',
      inputs: [
        { label: 'Jenis (PENEMBAKAN/PENUSUKAN)', key: 'jenis', placeholder: 'contoh: PENEMBAKAN' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER PENGEJARAN SUSPECT ${values.jenis || 'PENUSUKAN/PENEMBAKAN'} DINYATAKAN CLEAR WARGA BISA MELANJUTKAN AKTIFITASNYA, TERIMA KASIH`
    },
    {
      title: 'Penindakan Kelompok Beratribut',
      inputs: [
        { label: 'Atribut Kelompok', key: 'atribut', placeholder: 'contoh: JAKET MERAH BERTULISKAN XYZ' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER SHERIFF MENINDAK TEGAS KELOMPOK BERATRIBUT ${values.atribut || '...'}`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-4 mb-6">
        <h2 className="text-yellow-400 font-bold text-lg mb-2">⚠️ KERUSUHAN & PENEMBAKAN</h2>
        <p className="text-yellow-300 text-sm">Template untuk kasus kerusuhan, penembakan, penusukan, dan pengejaran suspect</p>
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