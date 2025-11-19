import Link from "next/link";
import type { Metadata } from "next";
import { DataTable, type ColumnDef } from "@/app/components/data-table";

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
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Laporan Terlambat & Tidak Absen</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-3 md:p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <h2 className="text-base md:text-lg font-medium">Laporan Terlambat & Tidak Absen</h2>
                        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-fit">
                            <div className="flex flex-col w-full md:w-[250px] gap-2">
                                <input id="tanggal_mulai" name="tanggal_mulai" type="month" placeholder="e.g. Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <Link
                                href="/self-service/laporan-terlambat-tidak-absen/create"
                                className="flex items-center justify-center w-full sm:w-fit border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                            >
                                Buat Laporan
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto border border-black/10">
                        <DataTable columns={laporanColumns} data={employees} />
                    </div>
                </div>
            </section>
        </div>
    );
}

const laporanColumns: ColumnDef<EmployeeRow>[] = [
    {
        header: "Status",
        accessor: "status",
    },
    {
        header: "NIP",
        accessor: "nip",
    },
    {
        header: "Tanggal",
        accessor: "tanggal",
    },
    {
        header: "Tipe",
        accessor: "tipe",
    },
    {
        header: "Tanggal Lapor",
        accessor: "tanggal_lapor",
    },
    {
        header: "Notes",
        accessor: "notes",
    },
];