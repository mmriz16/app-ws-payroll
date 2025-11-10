import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type ReimbursementRow = {
    kode: string;
    tanggal_struk: string;
    penerima: string;
    deskripsi: string;
    nilai: string;
};

const reimbursements: ReimbursementRow[] = [
    {
      kode: "REIM-001",
      tanggal_struk: "01 Jan 2026",
      penerima: "Miftakhul Rizky",
      deskripsi: "Transportasi",
      nilai: "Rp 100.000",
    },
  ];

function ReimbursementTable({ rows }: { rows: ReimbursementRow[] }) {
    return (
        <div className="overflow-hidden border border-black/10">
            <table className="min-w-full divide-y divide-black/10 text-left text-xs">
                <thead className="bg-white text-black text-sm">
                    <tr>
                        <th className="px-4 py-3">Kode</th>
                        <th className="px-4 py-3">Tanggal Struk</th>
                        <th className="px-4 py-3">Penerima</th>
                        <th className="px-4 py-3">Deskripsi</th>
                        <th className="px-4 py-3">Nilai</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/10 bg-white">
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="px-4 py-3">{row.kode}</td>
                            <td className="px-4 py-3">{row.tanggal_struk}</td>
                            <td className="px-4 py-3">{row.penerima}</td>
                            <td className="px-4 py-3">{row.deskripsi}</td>
                            <td className="px-4 py-3">{row.nilai}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}  

export default function PengajuanReimbursementCreatePage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-6 p-6">
                <Link href="/self-service/pengajuan-cuti-ijin" className="flex items-center justify-center w-fit text-sm font-semibold text-black">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali
                </Link>
                <div className="flex items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span>Pengajuan Reimbursement</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Buat Pengajuan Reimbursement</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-medium">Buat Pengajuan Reimbursement</h2>

                        <div className="flex w-full gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">Periode</label>
                                <input id="tanggal_mulai" name="tanggal_mulai" type="month" placeholder="e.g. Jan 2026" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label className="text-sm text-black/60" htmlFor="username">NIP</label>
                                <input id="nip" name="nip" type="number" placeholder="e.g. 00164" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                            </div>
                        </div>


                        <div className="flex flex-col w-full gap-2">
                            <label className="text-sm text-black/60" htmlFor="username">Catatan</label>
                            <textarea id="catatan" name="catatan" rows={4} placeholder="e.g. Catatan" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-medium">Attachment</h2>

                        <div className="flex w-full gap-4">
                            <div className="flex flex-col w-full gap-2">
                                <label className="block mb-2 text-sm font-medium text-black/60" htmlFor="file_input">Upload file</label>
                                <input className="block w-full text-sm text-black border border-black/10 px-4 py-4 cursor-pointer bg-[#f7f7f7] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" aria-describedby="file_input_help" id="file_input" type="file" accept=".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .xls" />
                                <p className="mt-1 text-xs text-black/60" id="file_input_help">.jpg .jpeg .png .gif .pdf .doc .docx .xls (Max 10MB/file)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <div className="flex flex-col gap-4">
                    <ReimbursementTable rows={reimbursements} />
                        <div className="flex flex-col w-full gap-2">
                            <label className="text-sm text-black/60" htmlFor="username">Total</label>
                            <input id="total" name="total" type="number" placeholder="e.g. 1.000.000" className="w-full border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" />
                        </div>

                        <Link
                            href="/self-service/pengajuan-reimbursement"
                            className="flex items-center justify-center h-[54px] w-fit border border-black/10 bg-[#43918B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4aa098]"
                        >
                            Ajukan Reimbursement
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}