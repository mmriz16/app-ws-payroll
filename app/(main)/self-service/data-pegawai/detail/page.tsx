
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Data Pegawai",
};

export default function DataPegawaiPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
                <Link href="/self-service/data-pegawai" className="flex items-center justify-center w-fit text-sm font-semibold text-black">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali
                </Link>
                <div className="flex items-center gap-2 flex-wrap text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span>Data Pegawai</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Detail Pegawai</span>
                </div>

                <div className="flex w-full flex-col gap-4 lg:flex-row">
                    <div className="flex flex-col w-full gap-4 border border-black/10 bg-white p-4 md:p-6">
                        <h2 className="text-lg font-medium">Data Pribadi</h2>
                        <div className="flex w-full flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">NIP</label>
                                <input id="nip" name="nip" type="number" placeholder="e.g. 00164" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">ID Absensi</label>
                                <input id="id_absensi" name="id_absensi" type="number" placeholder="e.g. 75" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <label className="text-sm text-black/60" htmlFor="username">Nama Lengkap</label>
                            <input id="nama_lengkap" name="nama_lengkap" type="text" placeholder="e.g. Steve Jobs" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                        </div>

                        <div className="flex w-full flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">No KTP/ID/KITAS</label>
                                <input id="no_ktp_id_kitas" name="no_ktp_id_kitas" type="number" placeholder="e.g. 08112233445566778899" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Berlaku Sampai</label>
                                <input id="berlaku_sampai" name="berlaku_sampai" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                        </div>

                        <div className="flex w-full flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">No Paspor</label>
                                <input id="no_paspor" name="no_paspor" type="number" placeholder="e.g. 08112233445566778899" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Berlaku Sampai</label>
                                <input id="berlaku_sampai_paspor" name="berlaku_sampai_paspor" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                        </div>

                        <div className="flex w-full flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Tempat Lahir</label>
                                <input id="tempat_lahir" name="tempat_lahir" type="text" placeholder="e.g. Jakarta" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Tanggal Lahir</label>
                                <input id="tanggal_lahir" name="tanggal_lahir" type="date" placeholder="e.g. 01 Jan 1990" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                        </div>

                        <div className="flex w-full flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60">Jenis Kelamin</label>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2 flex-1">
                                        <input id="laki-laki" name="jenis_kelamin" type="radio" value="laki-laki" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 " />
                                        <label htmlFor="laki-laki" className="text-sm text-black">Laki Laki</label>
                                    </div>
                                    <div className="flex items-center gap-2 flex-1">
                                        <input id="perempuan" name="jenis_kelamin" type="radio" value="perempuan" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 " />
                                        <label htmlFor="perempuan" className="text-sm text-black">Perempuan</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60">Status Perkawinan</label>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2 flex-1">
                                        <input id="kawin" name="status_perkawinan" type="radio" value="kawin" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 " />
                                        <label htmlFor="kawin" className="text-sm text-black">Kawin</label>
                                    </div>
                                    <div className="flex items-center gap-2 flex-1">
                                        <input id="belum-kawin" name="status_perkawinan" type="radio" value="belum-kawin" className="w-4 h-4 text-[#43918B] bg-[#f7f7f7] border-black/10 " />
                                        <label htmlFor="belum-kawin" className="text-sm text-black">Belum Kawin</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <label className="text-sm text-black/60" htmlFor="username">Alamat</label>
                            <textarea id="alamat" name="alamat" rows={4} placeholder="e.g. Jl. Raya Jakarta No. 123" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                        </div>

                        <div className="flex w-full flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Kode Pos</label>
                                <input id="kode_pos" name="kode_pos" type="number" placeholder="e.g. 12345" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Golongan Darah</label>
                                <select id="golongan-darah" name="golongan-darah" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
                                    <option value="">Pilih Golongan Darah</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <label className="text-sm text-black/60" htmlFor="username">Kewarganegaraan</label>
                            <select id="kewarganegaraan" name="kewarganegaraan" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60">
                                <option value="">Pilih Kewarganegaraan</option>
                                <option value="WNI">WNI</option>
                                <option value="WNA">WNA</option>
                            </select>
                        </div>

                        <div className="flex w-full flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">No Telepon</label>
                                <input id="no_telepon" name="no_telepon" type="number" placeholder="e.g. 08123456789" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">No HP</label>
                                <input id="no_hp" name="no_hp" type="number" placeholder="e.g. 08123456789" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <label className="text-sm text-black/60" htmlFor="username">Email</label>
                            <input id="email" name="email" type="email" placeholder="e.g. example@genhr.co.id" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-4">
                        <div className="flex flex-col w-full gap-4 border border-black/10 bg-white p-4 md:p-6">
                            <h2 className="text-lg font-medium">Jabatan & Golongan</h2>

                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Jabatan</label>
                                <input id="jabatan" name="jabatan" type="text" placeholder="e.g. Manager" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>

                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Organisasi</label>
                                <input id="organisasi" name="organisasi" type="text" placeholder="e.g. Manager" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                                <div className="flex flex-col w-full gap-2">
                                    <label className="text-sm text-black/60" htmlFor="username">Golongan</label>
                                    <input id="golongan" name="golongan" type="text" placeholder="e.g. Golongan 1" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <label className="text-sm text-black/60" htmlFor="username">Cuti Tahunan</label>
                                    <input id="cuti_tahunan" name="cuti_tahunan" type="number" placeholder="e.g. 12 hari" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <label className="text-sm text-black/60" htmlFor="username">Tambahan Cuti Pertahun</label>
                                    <input id="tambahan_cuti_pertahun" name="tambahan_cuti_pertahun" type="number" placeholder="e.g. 1 hari" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60">SIM</label>
                                <div className="w-full border border-black/10 overflow-x-auto">
                                    <table className="w-full min-w-[600px]">
                                        <thead className="bg-[#f7f7f7]">
                                            <tr>
                                                <th className="px-4 py-3 bg-white border-r border-black/10 text-left text-sm font-medium text-black/60 border-b border-black/10">#</th>
                                                <th className="px-4 py-3 bg-white border-r border-black/10 text-left text-sm font-medium text-black/60 border-b border-black/10">Jenis SIM</th>
                                                <th className="px-4 py-3 bg-white border-r border-black/10 text-left text-sm font-medium text-black/60 border-b border-black/10">No SIM</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-black/60 border-b border-black/10">Exp Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className=" border-black/10">
                                                <td className="px-4 py-3 bg-white border-r border-black/10 text-sm text-black">1</td>
                                                <td className="px-4 py-3 bg-white border-r border-black/10 text-sm text-black">-</td>
                                                <td className="px-4 py-3 bg-white border-r border-black/10 text-sm text-black">-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-4 border border-black/10 bg-white p-4 md:p-6">
                            <h2 className="text-lg font-medium">Data Perpajakan</h2>

                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Kantor</label>
                                <input id="kantor" name="kantor" type="text" placeholder="e.g. PT Datacaraka Solusindo" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>

                            <div className="flex w-full flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full gap-2">
                                    <label className="text-sm text-black/60" htmlFor="username">Tanggal Masuk</label>
                                    <input id="tanggal_masuk" name="tanggal_masuk" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <label className="text-sm text-black/60" htmlFor="username">Status Pegawai</label>
                                    <input id="status_pegawai" name="status_pegawai" type="text" placeholder="e.g. Karyawan" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col md:flex-row gap-4">
                                <div className="flex flex-col w-full gap-2">
                                    <label className="text-sm text-black/60" htmlFor="username">No NPWP</label>
                                    <input id="no_npwp" name="no_npwp" type="text" placeholder="e.g. 00164" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <label className="text-sm text-black/60" htmlFor="username">Status PTKP</label>
                                    <input id="status_ptkp" name="status_ptkp" type="text" placeholder="e.g. K/1" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Nama Ibu Kandung</label>
                                <input id="nama_ibu_kandung" name="nama_ibu_kandung" type="text" placeholder="e.g. PT Datacaraka Solusindo" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>

                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Kumulatif Penghasilan dari Pemberi Kerja Sebelumnya</label>
                                <input id="kumulatif_penghasilan_sebelumnya" name="kumulatif_penghasilan_sebelumnya" type="number" placeholder="e.g. 1000000" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>

                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Perkiraan Pensiun</label>
                                <input id="perkiraan_pensiun" name="perkiraan_pensiun" type="date" placeholder="e.g. 01 Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
