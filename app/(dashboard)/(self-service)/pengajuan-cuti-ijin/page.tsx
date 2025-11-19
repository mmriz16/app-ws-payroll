import Link from "next/link";
import type { Metadata } from "next";
import { DataTable, type ColumnDef } from "@/app/components/data-table";

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
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Pengajuan Cuti & Ijin</span>
                </div>

                <div className="flex flex-col gap-3 border border-black/10 bg-white p-3 sm:gap-4 sm:p-4 md:gap-4 md:p-6">
                    <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-base sm:text-lg font-medium">Pengajuan Cuti & Ijin</h2>
                        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3 md:gap-4">
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
                                href="/pengajuan-cuti-ijin/create"
                                className="flex items-center justify-center w-full sm:w-fit border border-black/10 h-[54px] bg-[#43918B] px-4 py-2.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition active:bg-[#4aa098] hover:bg-[#4aa098]"
                            >
                                Ajukan Cuti
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto border border-black/10 mx-0">
                        <DataTable columns={cutiIjinColumns} data={employees} minWidth="900px" />
                    </div>
                </div>
            </section>
        </div>
    );
}

const cutiIjinColumns: ColumnDef<EmployeeRow>[] = [
    {
        header: "Status",
        accessor: "status",
    },
    {
        header: "NIP",
        accessor: "id",
    },
    {
        header: "Tipe",
        accessor: "tipe",
    },
    {
        header: "Mulai Dari",
        accessor: "mulai_dari",
        headerClassName: "whitespace-nowrap",
        cellClassName: "whitespace-nowrap",
    },
    {
        header: "Sampai Dengan",
        accessor: "sampai_dengan",
        headerClassName: "whitespace-nowrap",
        cellClassName: "whitespace-nowrap",
    },
    {
        header: "Hari Kerja",
        accessor: "hari_kerja",
        headerClassName: "whitespace-nowrap",
    },
    {
        header: "Keterangan",
        accessor: "keterangan",
    },
    {
        header: "Approved Oleh",
        accessor: "approved_oleh",
        headerClassName: "whitespace-nowrap",
    },
    {
        header: "Notes",
        accessor: "notes",
    },
];