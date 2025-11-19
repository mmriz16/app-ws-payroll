import Link from "next/link";
import type { Metadata } from "next";
import { DataTable, type ColumnDef } from "@/app/components/data-table";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

type EmployeeRow = {
    id: string;
    kode: string;
    nip: string;
    nama_pegawai: string;
    status: string;
    total: string;
    entrier: string;
    status_pembayaran: string;
};

const employees: EmployeeRow[] = [
    {
        id: "1",
        kode: "REIM-001",
        nip: "00164",
        nama_pegawai: "Miftakhul Rizky",
        status: "Approved",
        total: "Rp 500.000",
        entrier: "Admin",
        status_pembayaran: "Sudah Dibayar",
    },
    {
        id: "2",
        kode: "REIM-002",
        nip: "00172",
        nama_pegawai: "Ananda Putri",
        status: "Pending",
        total: "Rp 750.000",
        entrier: "Admin",
        status_pembayaran: "Belum Dibayar",
    },
    {
        id: "3",
        kode: "REIM-003",
        nip: "00188",
        nama_pegawai: "Bagus Pratama",
        status: "Rejected",
        total: "Rp 300.000",
        entrier: "Admin",
        status_pembayaran: "Belum Dibayar",
    },
];

export default function PengajuanReimbursementPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Pengajuan Reimbursement</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-3 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <h2 className="text-base md:text-lg font-medium">Pengajuan Reimbursement</h2>
                        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-fit md:gap-4">
                            <div className="flex flex-col w-full md:w-[250px] gap-2">
                                <input id="tanggal_mulai" name="tanggal_mulai" type="month" placeholder="e.g. Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <Link
                                href="/self-service/pengajuan-reimbursement/create"
                                className="flex items-center justify-center w-full sm:w-fit border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                            >
                                Ajukan
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto border border-black/10">
                        <DataTable columns={reimbursementColumns} data={employees} />
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

function paymentStatusClass(text: string) {
    const base = "inline-flex items-center justify-center rounded-full px-2 py-1 text-xs font-medium";
    if (text === "Sudah Dibayar") return base + " bg-green-100 text-green-700";
    if (text === "Belum Dibayar") return base + " bg-gray-100 text-gray-700";
    return base + " bg-gray-100 text-gray-700";
}

const reimbursementColumns: ColumnDef<EmployeeRow>[] = [
    {
        header: "Kode",
        accessor: "kode",
        cellClassName: "whitespace-nowrap",
    },
    {
        header: "NIP",
        accessor: "nip",
        cellClassName: "font-medium text-black/70 whitespace-nowrap",
    },
    {
        header: "Nama Pegawai",
        accessor: "nama_pegawai",
        cellClassName: "truncate",
    },
    {
        header: "Status",
        accessor: "status",
        render: (value) => (
            <span className={statusClass(String(value))}>{String(value)}</span>
        ),
    },
    {
        header: "Total",
        accessor: "total",
        cellClassName: "whitespace-nowrap",
    },
    {
        header: "Entrier",
        accessor: "entrier",
        headerClassName: "hidden md:table-cell",
        cellClassName: "hidden md:table-cell",
    },
    {
        header: "Status Pembayaran",
        accessor: "status_pembayaran",
        render: (value) => (
            <span className={paymentStatusClass(String(value))}>{String(value)}</span>
        ),
    },
];
