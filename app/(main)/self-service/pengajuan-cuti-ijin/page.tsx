
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

type EmployeeRow = {
    id: string;
    status: string;
    tipe: string;
    mulai_dari: string;
    sampai_dengan: string;
    hari_kerja: string;
    keterangan: string;
    approved_oleh: string;
    notes: string;
};

const employees: EmployeeRow[] = [
    {
        id: "00164",
        status: "Approved",
        tipe: "Cuti",
        mulai_dari: "01 Jan 2024",
        sampai_dengan: "05 Jan 2024",
        hari_kerja: "5",
        keterangan: "Cuti tahunan",
        approved_oleh: "Manager",
        notes: "-",
    },
    {
        id: "00172",
        status: "Pending",
        tipe: "Ijin",
        mulai_dari: "10 Jan 2024",
        sampai_dengan: "10 Jan 2024",
        hari_kerja: "1",
        keterangan: "Ijin sakit",
        approved_oleh: "-",
        notes: "-",
    },
    {
        id: "00188",
        status: "Rejected",
        tipe: "Cuti",
        mulai_dari: "15 Jan 2024",
        sampai_dengan: "20 Jan 2024",
        hari_kerja: "6",
        keterangan: "Cuti tahunan",
        approved_oleh: "-",
        notes: "Kuota cuti habis",
    },
];

export default function PengajuanCutiIjinPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-3 p-3 sm:gap-4 sm:p-4 md:gap-6 md:p-6">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs md:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Pengajuan Cuti & Ijin</span>
                </div>

                <div className="flex flex-col gap-3 border border-black/10 bg-white p-3 sm:gap-4 sm:p-4 md:gap-4 md:p-6">
                    <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-base sm:text-lg font-medium">Pengajuan Cuti & Ijin</h2>
                        <div className="flex flex-row gap-2.5 sm:flex-row sm:items-center sm:gap-3 md:gap-4">
                            <div className="flex flex-col w-full sm:w-[200px] md:w-[250px] gap-2">
                                <input 
                                    id="tanggal_mulai" 
                                    name="tanggal_mulai" 
                                    type="month" 
                                    placeholder="e.g. Jan 2026" 
                                    className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" 
                                />
                            </div>
                            <Link
                                href="/self-service/pengajuan-cuti-ijin/create"
                                className="flex items-center justify-center w-full sm:w-fit h-[40px] sm:h-[54px] border border-black/10 bg-[#43918B] px-4 py-2.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition active:bg-[#4aa098] hover:bg-[#4aa098]"
                            >
                                Ajukan Cuti
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto border border-black/10 -mx-3 sm:-mx-4 md:mx-0">
                        <div className="min-w-[900px]">
                            <EmployeeTable rows={employees} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function EmployeeTable({ rows }: { rows: EmployeeRow[] }) {
    return (
        <table className="min-w-full divide-y divide-black/10 text-left text-[10px] sm:text-xs">
            <thead className="bg-white text-black text-xs sm:text-sm">
                <tr>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Status</th>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">NIP</th>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Tipe</th>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">Mulai Dari</th>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">Sampai Dengan</th>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">Hari Kerja</th>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Keterangan</th>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">Approved Oleh</th>
                    <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3">Notes</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.status}</td>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 font-medium text-black/70">{row.id}</td>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.tipe}</td>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.mulai_dari}</td>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.sampai_dengan}</td>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.hari_kerja}</td>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.keterangan}</td>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.approved_oleh}</td>
                        <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3">{row.notes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}