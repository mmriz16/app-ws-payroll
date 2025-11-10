
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

type EmployeeRow = {
    id: string;
    nama_project: string;
    rencana: string;
};

const employees: EmployeeRow[] = [
    {
        id: "1",
        nama_project: "Project A",
        rencana: "Pengembangan Sistem",
    },
    {
        id: "2",
        nama_project: "Project B",
        rencana: "Maintenance Aplikasi",
    },
    {
        id: "3",
        nama_project: "Project C",
        rencana: "Testing & QA",
    },
];

export default function AbsenProjectPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Absen Project</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-medium">Absen Project</h2>
                    </div>
                    <div className="overflow-hidden  border border-black/10">
                        <EmployeeTable rows={employees} />
                    </div>

                    <Link
                        href="/self-service/absen-project/create"
                        className="flex items-center justify-center h-[54px] w-fit border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                    >
                        Buat Rencana Project
                    </Link>
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
                    <th className="px-4 py-3 w-12 bg-white border-r border-black/10">
                        <input type="checkbox" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 focus:ring-[#43918B] focus:ring-2" />
                    </th>
                    <th className="px-4 py-3 bg-white border-r border-black/10">Nama Project</th>
                    <th className="px-4 py-3">Rencana</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-4 py-3 bg-white border-r border-black/10">
                            <input type="checkbox" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 focus:ring-[#43918B] focus:ring-2" />
                        </td>
                        <td className="px-4 py-3 bg-white border-r border-black/10">{row.nama_project}</td>
                        <td className="px-4 py-3">{row.rencana}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}