
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

type EmployeeRow = {
    id: string;
    nama_project: string;
    nama_pegawai: string;
    rencana: string;
    realisasi: string;
    tanggal_realisasi: string;
    pic: string;
    tanggal: string;
    status: string;
};

const employees: EmployeeRow[] = [
    {
        id: "1",
        nama_project: "Project A",
        nama_pegawai: "Miftakhul Rizky",
        rencana: "Pengembangan Sistem",
        realisasi: "Selesai",
        tanggal_realisasi: "01 Jan 2026",
        pic: "Manager",
        tanggal: "01 Jan 2026",
        status: "Acknowledge",
    },
    {
        id: "2",
        nama_project: "Project B",
        nama_pegawai: "Ananda Putri",
        rencana: "Maintenance Aplikasi",
        realisasi: "Dalam Proses",
        tanggal_realisasi: "05 Jan 2026",
        pic: "Team Lead",
        tanggal: "05 Jan 2026",
        status: "Not Acknowledge",
    },
    {
        id: "3",
        nama_project: "Project C",
        nama_pegawai: "Bagus Pratama",
        rencana: "Testing & QA",
        realisasi: "Belum Dimulai",
        tanggal_realisasi: "-",
        pic: "QA Lead",
        tanggal: "-",
        status: "Not Acknowledge",
    },
];

export default function AcknowledgePage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Project</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Acknowledge</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-medium">Acknowledge</h2>
                        <div className="flex w-fit gap-4">
                            <div className="flex flex-col w-[250px] gap-2">
                                <input id="tanggal_mulai" name="tanggal_mulai" type="month" placeholder="e.g. Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-[250px] gap-2">
                                <select id="status" name="status" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
                                    <option value="">Pilih Status</option>
                                    <option value="not-acknowledge">Not Acknowledge</option>
                                    <option value="acknowledge">Acknowledge</option>
                                </select>
                            </div>
                            <Link
                                href="/acknowledge/detail"
                                className="flex items-center justify-center w-fit border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                            >
                                Detail Acknowledge
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-hidden  border border-black/10">
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
                    <th className="px-4 py-3 w-12">
                        <input type="checkbox" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 focus:ring-[#43918B] focus:ring-2" />
                    </th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">#</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Nama Project</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Nama Pegawai</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Rencana</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Realisasi</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal Realisasi</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">PIC</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal</th>
                    <th className="px-4 py-3">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-4 py-3">
                            <input type="checkbox" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 focus:ring-[#43918B] focus:ring-2" />
                        </td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.id}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.nama_project}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.nama_pegawai}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.rencana}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.realisasi}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tanggal_realisasi}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.pic}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tanggal}</td>
                        <td className="px-4 py-3">{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}