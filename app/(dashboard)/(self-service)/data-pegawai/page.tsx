import Link from "next/link";
import type { Metadata } from "next";
import { DataTable, type ColumnDef } from "@/app/components/data-table";

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

const employeeColumns: ColumnDef<EmployeeRow>[] = [
    {
        header: "NIP",
        accessor: "id",
    },
    {
        header: "Nama",
        accessor: "name",
    },
    {
        header: "Tanggal Lahir",
        accessor: "birthDate",
        headerClassName: "whitespace-nowrap",
        cellClassName: "whitespace-nowrap",
    },
    {
        header: "Tanggal Masuk",
        accessor: "joinDate",
        headerClassName: "whitespace-nowrap",
        cellClassName: "whitespace-nowrap",
    },
    {
        header: "No HP",
        accessor: "phoneNumber",
        headerClassName: "whitespace-nowrap",
        cellClassName: "whitespace-nowrap",
    },
    {
        header: "Email",
        accessor: "email",
        headerClassName: "whitespace-nowrap",
        cellClassName: "whitespace-nowrap break-all",
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
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-base md:text-lg font-medium">Data Pegawai</h2>
                        <Link
                            href="/data-pegawai/detail"
                            className="flex h-11 md:h-[54px] w-full sm:w-fit items-center justify-center border border-black/10 bg-[#43918B] px-4 py-2.5 md:py-2 text-xs md:text-sm font-semibold text-white transition hover:bg-[#4aa098] active:bg-[#3d8a82]"
                        >
                            Detail Pegawai
                        </Link>
                    </div>
                    <div className="overflow-x-auto border border-black/10">
                        <DataTable columns={employeeColumns} data={employees} />
                    </div>
                </div>
            </section>
        </div>
    );
}