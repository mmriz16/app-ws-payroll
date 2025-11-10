
import Link from "next/link";
import type { Metadata } from "next";

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
            <section className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Pengajuan Reimbursement</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-medium">Pengajuan Reimbursement</h2>
                        <div className="flex w-fit gap-4">
                            <div className="flex flex-col w-[250px] gap-2">
                                <input id="tanggal_mulai" name="tanggal_mulai" type="month" placeholder="e.g. Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <Link
                                href="/self-service/pengajuan-reimbursement/create"
                                className="flex items-center justify-center w-fit border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                            >
                                Ajukan Reimbursement
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
                    <th className="px-4 py-3">Kode</th>
                    <th className="px-4 py-3">NIP</th>
                    <th className="px-4 py-3">Nama Pegawai</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Entrier</th>
                    <th className="px-4 py-3">Status Pembayaran</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-4 py-3">{row.kode}</td>
                        <td className="px-4 py-3 font-medium text-black/70">{row.nip}</td>
                        <td className="px-4 py-3">{row.nama_pegawai}</td>
                        <td className="px-4 py-3">{row.status}</td>
                        <td className="px-4 py-3">{row.total}</td>
                        <td className="px-4 py-3">{row.entrier}</td>
                        <td className="px-4 py-3">{row.status_pembayaran}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}