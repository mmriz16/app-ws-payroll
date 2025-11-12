
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

type EmployeeRow = {
    id: string;
    nip: string;
    nama_lengkap: string;
    tipe: string;
    catatan_pengajuan: string;
    tanggal_mulai: string;
    tanggal_selesai: string;
    hari_kerja: string;
    entrier: string;
    status_pengajuan: string;
};

const employees: EmployeeRow[] = [
    {
        id: "1",
        nip: "00164",
        nama_lengkap: "Miftakhul Rizky",
        tipe: "Cuti",
        catatan_pengajuan: "Cuti tahunan",
        tanggal_mulai: "01 Jan 2024",
        tanggal_selesai: "05 Jan 2024",
        hari_kerja: "5",
        entrier: "Admin",
        status_pengajuan: "Approved",
    },
    {
        id: "2",
        nip: "00172",
        nama_lengkap: "Ananda Putri",
        tipe: "Ijin",
        catatan_pengajuan: "Ijin sakit",
        tanggal_mulai: "10 Jan 2024",
        tanggal_selesai: "10 Jan 2024",
        hari_kerja: "1",
        entrier: "Admin",
        status_pengajuan: "Pending",
    },
    {
        id: "3",
        nip: "00188",
        nama_lengkap: "Bagus Pratama",
        tipe: "Cuti",
        catatan_pengajuan: "Cuti tahunan",
        tanggal_mulai: "15 Jan 2024",
        tanggal_selesai: "20 Jan 2024",
        hari_kerja: "6",
        entrier: "Admin",
        status_pengajuan: "Rejected",
    },
];

const pegawaiList = [
    { nip: "00164", nama: "Miftakhul Rizky" },
    { nip: "00172", nama: "Ananda Putri" },
    { nip: "00188", nama: "Bagus Pratama" },
];

export default function ApprovalCutiIjinPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <div className="flex items-center gap-2 flex-wrap text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Approval Cuti & Ijin</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <h2 className="text-lg font-medium">Approval Cuti & Ijin</h2>
                        <div className="flex w-full md:w-fit flex-col md:flex-row gap-3 md:gap-4">
                            <div className="flex flex-row w-full md:w-[500px] gap-2">
                                <div className="flex flex-col w-full md:w-[250px] gap-2">
                                    <input id="Tanggal_Awal" name="Tanggal_Awal" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                                <div className="flex flex-col w-full md:w-[250px] gap-2">
                                    <input id="Tanggal_Akhir" name="Tanggal_Akhir" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-[250px] gap-2">
                                <select id="pegawai" name="pegawai" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
                                    <option value="">Pilih Pegawai</option>
                                    {pegawaiList.map((pegawai) => (
                                        <option key={pegawai.nip} value={pegawai.nip}>
                                            {pegawai.nip} - {pegawai.nama}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto border border-black/10">
                        <EmployeeTable rows={employees} />
                    </div>
                </div>
            </section>
        </div>
    );
}

function EmployeeTable({ rows }: { rows: EmployeeRow[] }) {
    return (
        <table className="min-w-full divide-y divide-black/10 text-left text-xs">
            <thead className="bg-white text-black text-sm">
                <tr>
                    <th className="px-4 py-3 bg-white border-r border-black/10">NIP</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Nama Lengkap</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tipe</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Catatan Pengajuan</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal Mulai</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal Selesai</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Hari Kerja</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Entrier</th>
                    <th className="px-4 py-3">Status Pengajuan</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.nip}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.nama_lengkap}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tipe}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.catatan_pengajuan}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tanggal_mulai}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tanggal_selesai}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.hari_kerja}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.entrier}</td>
                        <td className="px-4 py-3">{row.status_pengajuan}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}