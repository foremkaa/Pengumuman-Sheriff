import { TemplateCard } from './template-card';
import { calculateTimeRange, numberToOrdinal } from '../utils/time-calculator';

export function PerampokanWarung() {
  const templates = [
    {
      title: 'Pengumuman Awal Perampokan',
      inputs: [
        { label: 'Nama Warung', key: 'warung', placeholder: 'contoh: WARUNG 24/7' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER TELAH TERJADI PERAMPOKAN WARUNG ${values.warung || '...'} WARGA HARAP MENJAUH ATAU KAMI TINDAK TEGAS`
    },
    {
      title: 'Tahap Evakuasi',
      inputs: [
        { label: 'Nama Warung', key: 'warung', placeholder: 'contoh: WARUNG 24/7' },
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 5', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER PERAMPOKAN WARUNG ${values.warung || '...'} MEMASUKI TAHAP EVAKUASI DALAM ${calculateTimeRange(values.waktu)}, WARGA SILAHKAN MENJAUH DARI LOKASI PERAMPOKAN ATAU KAMI TINDAK TEGAS TERIMA KASIH`
    },
    {
      title: 'Perampokan Clear',
      inputs: [
        { label: 'Nama Warung', key: 'warung', placeholder: 'contoh: WARUNG 24/7' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER PERAMPOKAN WARUNG ${values.warung || '...'} DINYATAKAN CLEAR WARGA BISA MELANJUTKAN AKTIFITASNYA, TERIMA KASIH`
    },
    {
      title: 'Rampok Tarik (Pindah Lokasi)',
      inputs: [
        { label: 'Area Baru', key: 'area', placeholder: 'contoh: PINGGIRAN KOTA' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER INFO STATUS PERAMPOKAN TELAH BERPINDAH LOKASI KE AREA ${values.area || '...'} WARGA HARAP MENJAUH AGAR TIDAK TERKENA TEMBAKAN ATAU AKAN KAMI TINDAK SECARA TEGAS!!!`
    },
    {
      title: 'Countdown Clear Setelah Tarik',
      inputs: [
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 5', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER JIKA TIDAK ADA TEMBAKAN DALAM WAKTU ${calculateTimeRange(values.waktu)}, MAKA AKAN KAMI NYATAKAN CLEAR, TERIMA KASIH`
    },
    {
      title: 'Rampok Pursuit (Pengejaran)',
      inputs: [
        { label: 'Nama Warung', key: 'warung', placeholder: 'contoh: WARUNG 24/7' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER STATUS PERAMPOKAN WARUNG ${values.warung || '...'} BERUBAH MENJADI PENGEJERAN. APABILA WARGA MENDENGAR SUARA SIRINE, HARAP TIDAK MENDEKAT DAN TETAP BERHATI-HATI KARENA KAMI TIDAK BERTANGGUNG JAWAB APABILA ADA TABRAKAN YANG TERJADI!!`
    },
    {
      title: 'Peringatan Pengejaran',
      inputs: [
        { label: 'Peringatan Ke-', key: 'peringatan', placeholder: 'contoh: 1', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER INFO STATUS PENGEJARAN SUSPECT PERAMPOKAN SUDAH MEMASUKI PERINGATAN ${numberToOrdinal(values.peringatan || '...')}`
    },
    {
      title: 'Status Pencarian',
      inputs: [
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 10', type: 'number' as const },
        { label: 'Ciri-ciri Kendaraan', key: 'ciri', placeholder: 'contoh: MOBIL SEDAN HITAM PLAT B 1234 AB' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER STATUS PENGEJARAN SUSPECT PERAMPOKAN BERUBAH MENJADI STATUS PENCARIAN SELAMA ${calculateTimeRange(values.waktu)} TERHADAP KENDARAAN DENGAN CIRI CIRI ${values.ciri || '...'} , WARGA HARAP TETAP BERHATI-HATI. TERIMAKASIH.`
    },
    {
      title: 'Perampokan Tidak Tertangani',
      inputs: [
        { label: 'Nama Warung', key: 'warung', placeholder: 'contoh: WARUNG 24/7' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER STATUS PERAMPOKAN WARUNG ${values.warung || '...'} TELAH DI NYATAKAN CLEAR! PIHAK SHERIFF TARIK MUNDUR DARI AREA PERAMPOKAN. SILAHKAN WARGA BERAKTIFITAS KEMBALI SEPERTI BIASA, TERIMA KASIH`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4 mb-6">
        <h2 className="text-blue-400 font-bold text-lg mb-2">🏪 PERAMPOKAN WARUNG</h2>
        <p className="text-blue-300 text-sm">Template untuk kasus perampokan warung termasuk tahap evakuasi, pengejaran, dan status pencarian</p>
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