import Link from "next/link";
import type { Metadata } from "next";
import { DataTable, type ColumnDef } from "@/app/components/data-table";

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
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 sm:p-4 md:p-6">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Project</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Acknowledge</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-lg font-medium">Acknowledge</h2>
                        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:w-fit md:gap-4">
                            <div className="flex flex-col w-full sm:w-[220px] md:w-[250px] gap-2">
                                <input id="tanggal_mulai" name="tanggal_mulai" type="month" placeholder="e.g. Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full sm:w-[220px] md:w-[250px] gap-2">
                                <select id="status" name="status" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
                                    <option value="">Pilih Status</option>
                                    <option value="not-acknowledge">Not Acknowledge</option>
                                    <option value="acknowledge">Acknowledge</option>
                                </select>
                            </div>
                            <Link
                                href="/acknowledge/detail"
                                className="flex w-full sm:w-fit items-center justify-center border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                            >
                                Detail Acknowledge
                            </Link>
                        </div>
                    </div>
                    <div className="border border-black/10 overflow-x-auto">
                        <DataTable columns={acknowledgeColumns} data={employees} />
                    </div>
                </div>
            </section>
        </div>
    );
}

const acknowledgeColumns: ColumnDef<EmployeeRow>[] = [
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
        header: "#",
        accessor: "id",
    },
    {
        header: "Nama Project",
        accessor: "nama_project",
    },
    {
        header: "Nama Pegawai",
        accessor: "nama_pegawai",
    },
    {
        header: "Rencana",
        accessor: "rencana",
    },
    {
        header: "Realisasi",
        accessor: "realisasi",
    },
    {
        header: "Tanggal Realisasi",
        accessor: "tanggal_realisasi",
    },
    {
        header: "PIC",
        accessor: "pic",
    },
    {
        header: "Tanggal",
        accessor: "tanggal",
    },
    {
        header: "Status",
        accessor: "status",
    },
];