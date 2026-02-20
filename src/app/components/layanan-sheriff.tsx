import { TemplateCard } from './template-card';
import { calculateTimeRange } from '../utils/time-calculator';

export function LayananSheriff() {
  const templates = [
    {
      title: 'Layanan Handphone',
      inputs: [],
      generateText: () => 
        `/POLICER HALO WARGA ROXWOOD, SEKARANG UNTUK LAYANAN SHERIFF TELAH HADIR DI LAYANAN HANDPHONE KALIAN. SILAHKAN MEMBUAT PELAPORAN MELALUI LAYANAN YANG SUDAH DISEDIAKAN. TERIMAKASIH!`
    },
    {
      title: 'Himbauan Lalu Lintas',
      inputs: [],
      generateText: () => 
        `/POLICER HALO WARGA ROXWOOD, DI HIMBAU TETAP MENAATI PERATURAN LALU LINTAS DAN TETAP MELENGKAPI PERLENGKAPAN BERKENDARA TERIMAKASIH.`
    },
    {
      title: 'Iring-iringan Kerajaan',
      inputs: [],
      generateText: () => 
        `/POLICER SEDANG TERJADI IRING-IRINGAN KERAJAAN ROXWOOD, UNTUK SELURUH WARGA ROXWOOD SILAHKAN MENJAUH APABILA MENDENGAR SUARA SIRINE ATAU AKAN KAMI TINDAK TEGAS. TERIMAKASIH`
    },
    {
      title: 'Pemanggilan Organisasi',
      inputs: [
        { label: 'Nama Organisasi', key: 'organisasi', placeholder: 'contoh: GANG MOTOR XYZ' },
        { label: 'Kasus', key: 'kasus', placeholder: 'contoh: KERUSUHAN DI AREA PASAR' },
        { label: 'Waktu Pemanggilan', key: 'waktu', placeholder: 'contoh: 1 JAM' },
        { label: 'Atribut Organisasi', key: 'atribut', placeholder: 'contoh: JAKET KUNING' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER SHERIFF KERAJAAN ROXWOOD MELAKUKAN PEMANGGILAN TERHADAP ORGANISASI MASYARAKAT BERNAMA ${values.organisasi || '...'} ATAS DASAR KASUS ${values.kasus || '...'} . APABILA PANGGILAN INI TIDAK DIPENUHI DALAM WAKTU ${values.waktu || '...'} MAKA PIHAK SHERIFF AKAN MELAKUKAN PENJEMPUTAN PAKSA TERHADAP MASYARAKAT YANG MENGGUNAKAN ATRIBUT ${values.atribut || '...'} . TERIMA KASIH!!!`
    },
    {
      title: 'Pemanggilan Individu',
      inputs: [
        { label: 'Nama Lengkap', key: 'nama', placeholder: 'contoh: HAIKAL BURJO' },
        { label: 'Waktu (menit)', key: 'waktu', placeholder: 'contoh: 30', type: 'number' as const }
      ],
      generateText: (values: Record<string, string>) => 
        `/policer SHERIFF MELAKUKAN PEMANGGILAN ATAS NAMA ${values.nama || '...'} UNTUK DATANG KE FEDERAL SHERIFF DALAM KURUN WAKTU ${values.waktu || '...'} MENIT KEDEPAN (${calculateTimeRange(values.waktu)}) UNTUK DIMINTAI KETERANGAN.`
    },
    {
      title: 'Sterilisasi Distrik',
      inputs: [
        { label: 'Distrik', key: 'distrik', placeholder: 'contoh: PERUMAHAN' },
        { label: 'Koordinat', key: 'koordinat', placeholder: 'contoh: 606 - 608' }
      ],
      generateText: (values: Record<string, string>) => 
        `/POLICER SHERIFF MELAKUKA STERILISASI DI DISTRIK ${values.distrik || '...'} KOORDINAT (${values.koordinat || '...'}) WARGA HARAP MENJAUHI AREA TERSEBUT HINGGA PENGUMUMAN LEBIH LANJUT. TERIMA KASIH!!`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 mb-6">
        <h2 className="text-green-400 font-bold text-lg mb-2">📢 LAYANAN SHERIFF</h2>
        <p className="text-green-300 text-sm">Template untuk pengumuman umum, himbauan, dan layanan Sheriff Kerajaan Roxwood</p>
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