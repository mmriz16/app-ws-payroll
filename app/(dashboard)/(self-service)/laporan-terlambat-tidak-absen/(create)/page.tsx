import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

const pegawaiList = [
    { nip: "00164", nama: "Miftakhul Rizky" },
    { nip: "00172", nama: "Ananda Putri" },
    { nip: "00188", nama: "Bagus Pratama" },
];

export default function PengajuanCutiIjinPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <Link href="/self-service/data-pegawai" className="flex items-center justify-center w-fit text-sm font-semibold text-black">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali
                </Link>
                <div className="flex flex-wrap items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span>Laporan Terlambat &amp; Tidak Absen</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Buat Laporan Terlambat &amp; Tidak Absen</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-4 md:p-6">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-medium">Buat Laporan Terlambat &amp; Tidak Absen</h2>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-sm text-black/60" htmlFor="nip">NIP</label>
                        <select id="nip" name="nip" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
                            <option value="">Pilih NIP</option>
                            {pegawaiList.map((pegawai) => (
                                <option key={pegawai.nip} value={pegawai.nip}>
                                    {pegawai.nip} - {pegawai.nama}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex w-full flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-full gap-2">
                            <label className="text-sm text-black/60" htmlFor="username">Dari Tanggal</label>
                            <input id="tanggal_mulai" name="tanggal_mulai" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="text-sm text-black/60" htmlFor="username">Sampai Tanggal</label>
                            <input id="tanggal_selesai" name="tanggal_selesai" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-2">
                        <label className="text-sm text-black/60" htmlFor="username">Keterangan</label>
                        <textarea id="keterangan" name="keterangan" rows={4} placeholder="e.g. Ijin Sakit" className="w-full border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                    </div>

                    <Link
                        href="/self-service/laporan-terlambat-tidak-absen"
                        className="flex items-center justify-center h-[54px] w-full md:w-fit border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                    >
                        Buat Laporan
                    </Link>
                </div>
            </section>
        </div>
    );
}