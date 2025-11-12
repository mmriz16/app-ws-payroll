
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Pegawai",
};

type EmployeeRow = {
    id: string;
    name: string;
    birthDate: string;
    joinDate: string;
    phoneNumber: string;
    email: string;
};

const employees: EmployeeRow[] = [
    {
        id: "00164",
        name: "Miftakhul Rizky",
        birthDate: "01 Jan 1990",
        joinDate: "03 Mar 2020",
        phoneNumber: "0812-3456-7890",
        email: "miftakhul.rizky@genhr.co.id",
    },
    {
        id: "00172",
        name: "Ananda Putri",
        birthDate: "14 Feb 1993",
        joinDate: "14 Jan 2021",
        phoneNumber: "0813-2345-6789",
        email: "ananda.putri@genhr.co.id",
    },
    {
        id: "00188",
        name: "Bagus Pratama",
        birthDate: "22 Jul 1991",
        joinDate: "22 Nov 2019",
        phoneNumber: "0812-9988-7766",
        email: "bagus.pratama@genhr.co.id",
    },
];

export default function DataPegawaiPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Data Pegawai</span>
                </div>

                <div className="flex flex-col gap-3 md:gap-4 border border-black/10 bg-white p-3 md:p-6">
                    <div className="flex flex-row md:flex-row sm:flex-col sm:items-center items-center justify-between gap-3 md:gap-2">
                        <h2 className="text-base md:text-lg font-medium">Data Pegawai</h2>
                        <Link
                            href="/self-service/data-pegawai/detail"
                            className="flex items-center justify-center h-11 md:h-[54px] w-[150px] sm:w-fit border border-black/10 bg-[#43918B] px-4 py-2.5 md:py-2 text-xs md:text-sm font-semibold text-white transition hover:bg-[#4aa098] active:bg-[#3d8a82]"
                        >
                            Detail Pegawai
                        </Link>
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
        <div className="min-w-[800px]">
            <table className="min-w-full divide-y divide-black/10 text-left text-xs">
                <thead className="bg-white text-black text-xs">
                    <tr>
                        <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">NIP</th>
                        <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Nama</th>
                        <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">Tanggal Lahir</th>
                        <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">Tanggal Masuk</th>
                        <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">No HP</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">Email</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/10 bg-white">
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td className="px-2 md:px-4 py-2 md:py-3 bg-white border-r border-black/10 font-medium text-black/70">{row.id}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3 bg-white border-r border-black/10">{row.name}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap text-[10px] md:text-xs">{row.birthDate}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap text-[10px] md:text-xs">{row.joinDate}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap text-[10px] md:text-xs">{row.phoneNumber}</td>
                            <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap text-[10px] md:text-xs break-all">{row.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}