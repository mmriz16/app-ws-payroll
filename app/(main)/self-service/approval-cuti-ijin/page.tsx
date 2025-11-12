
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
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Approval Cuti & Ijin</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-3 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <h2 className="text-base md:text-lg font-medium">Approval Cuti & Ijin</h2>
                        <div className="flex w-full md:w-fit flex-col md:flex-row gap-3 md:gap-4">
                            <div className="flex flex-row w-full md:w-[500px] gap-2">
                                <div className="flex flex-col w-full sm:w-[200px] md:w-[250px] gap-2">
                                    <input id="Tanggal_Awal" name="Tanggal_Awal" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                                <div className="flex flex-col w-full sm:w-[200px] md:w-[250px] gap-2">
                                    <input id="Tanggal_Akhir" name="Tanggal_Akhir" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full sm:w-[200px] md:w-[250px] gap-2">
                                <select id="pegawai" name="pegawai" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
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

function statusClass(status: string) {
    const base = "inline-flex items-center justify-center rounded-full px-2 py-1 text-xs font-medium";
    switch (status) {
        case "Approved":
            return base + " bg-green-100 text-green-700";
        case "Pending":
            return base + " bg-yellow-100 text-yellow-700";
        case "Rejected":
            return base + " bg-red-100 text-red-700";
        default:
            return base + " bg-gray-100 text-gray-700";
    }
}

function EmployeeTable({ rows }: { rows: EmployeeRow[] }) {
    return (
        <table className="min-w-full divide-y divide-black/10 text-left text-xs">
            <thead className="bg-white text-black text-xs">
                <tr>
                    <th className="px-4 py-3 bg-white border-r border-black/10">NIP</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Nama Lengkap</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tipe</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10 hidden md:table-cell">Catatan Pengajuan</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal Mulai</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal Selesai</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10 hidden md:table-cell">Hari Kerja</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10 hidden md:table-cell">Entrier</th>
                    <th className="px-4 py-3">Status Pengajuan</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-4 py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.nip}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10 truncate">{row.nama_lengkap}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tipe}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10 hidden md:table-cell truncate">{row.catatan_pengajuan}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.tanggal_mulai}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.tanggal_selesai}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10 hidden md:table-cell">{row.hari_kerja}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10 hidden md:table-cell">{row.entrier}</td>
                        <td className="px-4 py-3">
                            <span className={statusClass(row.status_pengajuan)}>{row.status_pengajuan}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
