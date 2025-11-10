
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

type EmployeeRow = {
    id: string;
    tanggal: string;
    nip: string;
    nama: string;
    jam_masuk: string;
    jam_keluar: string;
    status: string;
    project: string;
    mengisi_rencana: string;
    realisasi: string;
    wfo_wfh: string;
    pic: string;
    date: string;
};

const employees: EmployeeRow[] = [
    {
        id: "1",
        tanggal: "01 Jan 2026",
        nip: "00164",
        nama: "Miftakhul Rizky",
        jam_masuk: "08:00",
        jam_keluar: "17:00",
        status: "Hadir",
        project: "Project A",
        mengisi_rencana: "Ya",
        realisasi: "Selesai",
        wfo_wfh: "WFO",
        pic: "Manager",
        date: "01 Jan 2026",
    },
    {
        id: "2",
        tanggal: "02 Jan 2026",
        nip: "00172",
        nama: "Ananda Putri",
        jam_masuk: "08:30",
        jam_keluar: "17:30",
        status: "Hadir",
        project: "Project B",
        mengisi_rencana: "Ya",
        realisasi: "Dalam Proses",
        wfo_wfh: "WFH",
        pic: "Team Lead",
        date: "02 Jan 2026",
    },
    {
        id: "3",
        tanggal: "03 Jan 2026",
        nip: "00188",
        nama: "Bagus Pratama",
        jam_masuk: "09:00",
        jam_keluar: "18:00",
        status: "Hadir",
        project: "Project C",
        mengisi_rencana: "Tidak",
        realisasi: "-",
        wfo_wfh: "WFO",
        pic: "QA Lead",
        date: "03 Jan 2026",
    },
];

export default function RekapRealisasiPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Project</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Rekap Realisasi</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-medium">Rekap Realisasi</h2>
                        <div className="flex w-fit gap-4">
                            <div className="flex flex-col w-[250px] gap-2">
                                <input id="tanggal_mulai" name="tanggal_mulai" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-[250px] gap-2">
                                <input id="tanggal_akhir" name="tanggal_akhir" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-[250px] gap-2">
                                <select id="status" name="status" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
                                    <option value="">Pilih NIP</option>
                                    <option value="00164">Semua</option>
                                    <option value="00165">yang Tidak Mengisi Realisasi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="border border-black/10">
                        <EmployeeTable rows={employees} />
                    </div>
                </div>
            </section>
        </div>
    );
}

function EmployeeTable({ rows }: { rows: EmployeeRow[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-black/10 text-left text-xs border-collapse">
                <thead className="bg-white text-black text-sm">
                    <tr>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">NIP</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Nama</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Jam Masuk</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Jam Keluar</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Status</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Project</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Mengisi Rencana</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Realisasi</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">WFO/WFH</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">PIC</th>
                        <th className="px-4 py-3 bg-white border-r border-black/10">Date</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/10 bg-white">
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.tanggal}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.nip}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.nama}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.jam_masuk}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.jam_keluar}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.status}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.project}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.mengisi_rencana}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.realisasi}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.wfo_wfh}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.pic}</td>
                            <td className="px-4 py-3 bg-white border-r border-black/10">{row.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}