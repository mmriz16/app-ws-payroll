
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laporan Terlambat & Tidak Absen",
};

type EmployeeRow = {
    id: string;
    status: string;
    nip: string;
    tanggal: string;
    tipe: string;
    tanggal_lapor: string;
    notes: string;
};

const employees: EmployeeRow[] = [
    {
        id: "1",
        status: "Terlambat",
        nip: "00164",
        tanggal: "01 Jan 2024",
        tipe: "Terlambat",
        tanggal_lapor: "02 Jan 2024",
        notes: "Macet di jalan",
    },
    {
        id: "2",
        status: "Tidak Absen",
        nip: "00172",
        tanggal: "10 Jan 2024",
        tipe: "Tidak Absen",
        tanggal_lapor: "11 Jan 2024",
        notes: "Lupa absen",
    },
    {
        id: "3",
        status: "Terlambat",
        nip: "00188",
        tanggal: "15 Jan 2024",
        tipe: "Terlambat",
        tanggal_lapor: "15 Jan 2024",
        notes: "Kendaraan mogok",
    },
];

export default function LaporanTerlambatTidakAbsenPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <div className="flex flex-wrap items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Laporan Terlambat & Tidak Absen</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-4 md:p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <h2 className="text-lg font-medium">Laporan Terlambat & Tidak Absen</h2>
                        <div className="flex w-full md:w-fit flex-col sm:flex-row gap-4">
                            <div className="flex flex-col w-full md:w-[250px] gap-2">
                                <input id="tanggal_mulai" name="tanggal_mulai" type="month" placeholder="e.g. Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <Link
                                href="/self-service/laporan-terlambat-tidak-absen/create"
                                className="flex items-center justify-center w-full md:w-fit border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                            >
                                Buat Laporan
                            </Link>
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
        <table className="min-w-[600px] divide-y divide-black/10 text-left text-xs">
            <thead className="bg-white text-black text-sm">
                <tr>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Status</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">NIP</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tipe</th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Tanggal Lapor</th>
                    <th className="px-4 py-3">Notes</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.status}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.nip}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tanggal}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tipe}</td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.tanggal_lapor}</td>
                        <td className="px-4 py-3">{row.notes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}