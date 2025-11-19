import Link from "next/link";
import type { Metadata } from "next";
import { DataTable, type ColumnDef } from "@/app/components/data-table";

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
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Absen Project</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-3 md:p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-base md:text-lg font-medium">Absen Project</h2>
                    </div>
                    <div className="border border-black/10 overflow-x-auto">
                        <DataTable columns={projectColumns} data={employees} />
                    </div>

                    <Link
                        href="/self-service/absen-project/create"
                        className="flex h-[54px] w-full sm:w-fit items-center justify-center border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                    >
                        Buat Rencana Project
                    </Link>
                </div>
            </section>
        </div>
    );
}

const projectColumns: ColumnDef<EmployeeRow>[] = [
    {
        header: "",
        accessor: "id",
        render: () => (
            <input type="checkbox" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 focus:ring-[#43918B] focus:ring-2" />
        ),
        headerClassName: "w-12",
        cellClassName: "w-12",
    },
    {
        header: "Nama Project",
        accessor: "nama_project",
    },
    {
        header: "Rencana",
        accessor: "rencana",
    },
];