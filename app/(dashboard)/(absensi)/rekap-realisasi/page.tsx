import type { Metadata } from "next";
import { DataTable, type ColumnDef } from "@/app/components/data-table";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

type EmployeeRow = {
    id: string;
    tanggal: string;
    nip: string;
    nama: string;
    jam_masuk: string;
    jam_keluar: string;
    status: string;
    project: string;
    mengisi_rencana: string;
    realisasi: string;
    wfo_wfh: string;
    pic: string;
    date: string;
};

const employees: EmployeeRow[] = [
    {
        id: "1",
        tanggal: "01 Jan 2026",
        nip: "00164",
        nama: "Miftakhul Rizky",
        jam_masuk: "08:00",
        jam_keluar: "17:00",
        status: "Hadir",
        project: "Project A",
        mengisi_rencana: "Ya",
        realisasi: "Selesai",
        wfo_wfh: "WFO",
        pic: "Manager",
        date: "01 Jan 2026",
    },
    {
        id: "2",
        tanggal: "02 Jan 2026",
        nip: "00172",
        nama: "Ananda Putri",
        jam_masuk: "08:30",
        jam_keluar: "17:30",
        status: "Hadir",
        project: "Project B",
        mengisi_rencana: "Ya",
        realisasi: "Dalam Proses",
        wfo_wfh: "WFH",
        pic: "Team Lead",
        date: "02 Jan 2026",
    },
    {
        id: "3",
        tanggal: "03 Jan 2026",
        nip: "00188",
        nama: "Bagus Pratama",
        jam_masuk: "09:00",
        jam_keluar: "18:00",
        status: "Hadir",
        project: "Project C",
        mengisi_rencana: "Tidak",
        realisasi: "-",
        wfo_wfh: "WFO",
        pic: "QA Lead",
        date: "03 Jan 2026",
    },
];

export default function RekapRealisasiPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 sm:p-4 md:p-6">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Project</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Rekap Realisasi</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-base sm:text-lg font-medium">Rekap Realisasi</h2>
                        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:w-fit md:gap-4">
                            <div className="flex flex-col w-full sm:w-[220px] md:w-[250px] gap-2">
                                <input id="tanggal_mulai" name="tanggal_mulai" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full sm:w-[220px] md:w-[250px] gap-2">
                                <input id="tanggal_akhir" name="tanggal_akhir" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full sm:w-[220px] md:w-[250px] gap-2">
                                <select id="status" name="status" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
                                    <option value="">Pilih NIP</option>
                                    <option value="00164">Semua</option>
                                    <option value="00165">yang Tidak Mengisi Realisasi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="border border-black/10 overflow-x-auto">
                        <DataTable columns={rekapColumns} data={employees} />
                    </div>
                </div>
            </section>
        </div>
    );
}

const rekapColumns: ColumnDef<EmployeeRow>[] = [
    {
        header: "Tanggal",
        accessor: "tanggal",
    },
    {
        header: "NIP",
        accessor: "nip",
    },
    {
        header: "Nama",
        accessor: "nama",
    },
    {
        header: "Jam Masuk",
        accessor: "jam_masuk",
    },
    {
        header: "Jam Keluar",
        accessor: "jam_keluar",
    },
    {
        header: "Status",
        accessor: "status",
    },
    {
        header: "Project",
        accessor: "project",
    },
    {
        header: "Mengisi Rencana",
        accessor: "mengisi_rencana",
    },
    {
        header: "Realisasi",
        accessor: "realisasi",
    },
    {
        header: "WFO/WFH",
        accessor: "wfo_wfh",
    },
    {
        header: "PIC",
        accessor: "pic",
    },
    {
        header: "Date",
        accessor: "date",
    },
];