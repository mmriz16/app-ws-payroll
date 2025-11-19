
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengajuan Cuti & Ijin",
};

type EmployeeRow = {
    id: string;
    nip: string;
    nama: string;
    tanggal: Record<string, string>; // key: "01", "02", etc., value: "M" (masuk), "A" (alpha), "L" (libur)
    workday: string;
    absen: string;
    work: string;
    sisa_cuti: string;
};

const employees: EmployeeRow[] = [
    {
        id: "1",
        nip: "00164",
        nama: "Miftakhul Rizky",
        tanggal: {
            "01": "L", "02": "L", "03": "M", "04": "M", "05": "M",
            "06": "M", "07": "A", "08": "L", "09": "L", "10": "M",
            "11": "M", "12": "M", "13": "M", "14": "M", "15": "L",
            "16": "L", "17": "M", "18": "M", "19": "M", "20": "M",
            "21": "M", "22": "L", "23": "L", "24": "M", "25": "M",
            "26": "M", "27": "M", "28": "M", "29": "L", "30": "L",
            "31": "M"
        },
        workday: "22",
        absen: "2",
        work: "20",
        sisa_cuti: "10",
    },
    {
        id: "2",
        nip: "00172",
        nama: "Ananda Putri",
        tanggal: {
            "01": "L", "02": "L", "03": "M", "04": "M", "05": "M",
            "06": "M", "07": "M", "08": "L", "09": "L", "10": "A",
            "11": "M", "12": "M", "13": "M", "14": "M", "15": "L",
            "16": "L", "17": "M", "18": "M", "19": "M", "20": "M",
            "21": "M", "22": "L", "23": "L", "24": "M", "25": "M",
            "26": "M", "27": "M", "28": "M", "29": "L", "30": "L",
            "31": "M"
        },
        workday: "22",
        absen: "1",
        work: "21",
        sisa_cuti: "12",
    },
    {
        id: "3",
        nip: "00188",
        nama: "Bagus Pratama",
        tanggal: {
            "01": "L", "02": "L", "03": "M", "04": "M", "05": "M",
            "06": "M", "07": "M", "08": "L", "09": "L", "10": "M",
            "11": "M", "12": "M", "13": "M", "14": "M", "15": "L",
            "16": "L", "17": "M", "18": "M", "19": "M", "20": "M",
            "21": "M", "22": "L", "23": "L", "24": "M", "25": "M",
            "26": "M", "27": "M", "28": "M", "29": "L", "30": "L",
            "31": "M"
        },
        workday: "22",
        absen: "0",
        work: "22",
        sisa_cuti: "8",
    },
];

export default function AbsensiPegawaiPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 md:p-6">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Project</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">Absensi Pegawai</span>
                </div>

                <div className="flex flex-col gap-3 md:gap-4 border border-black/10 bg-white p-3 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-2">
                        <h2 className="text-base md:text-lg font-medium">Absensi Pegawai</h2>
                        <div className="flex flex-col sm:flex-row w-full md:w-fit gap-3 md:gap-4">
                            <div className="flex flex-col w-full sm:w-[200px] md:w-[250px] gap-2">
                                <input 
                                    id="tanggal_mulai" 
                                    name="tanggal_mulai" 
                                    type="month" 
                                    placeholder="e.g. Jan 2026" 
                                    className="w-full border border-black/10 bg-[#f7f7f7] px-3 md:px-4 py-2.5 md:py-4 text-xs md:text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60" 
                                />
                            </div>
                            <div className="flex flex-col w-full sm:w-[200px] md:w-[250px] gap-2">
                                <select 
                                    id="status" 
                                    name="status" 
                                    className="w-full border border-black/10 bg-[#f7f7f7] px-3 md:px-4 py-2.5 md:py-4 text-xs md:text-sm text-black focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60"
                                >
                                    <option value="">Pilih NIP</option>
                                    <option value="00164">00164 - Miftakhul Rizky</option>
                                    <option value="00165">00165 - Ananda Putri</option>
                                    <option value="00166">00166 - Bagus Pratama</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="border border-black/10 overflow-hidden">
                        <EmployeeTable rows={employees} />
                    </div>
                </div>
            </section>
        </div>
    );
}

function EmployeeTable({ rows }: { rows: EmployeeRow[] }) {
    // Generate array of dates from 01 to 31
    const dates = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));

    return (
        <div className="overflow-x-auto">
            <div className="min-w-[1000px]">
                <table className="min-w-full divide-y divide-black/10 text-left text-xs border-collapse">
                    <thead className="bg-white text-black text-sm">
                        <tr>
                            <th className="px-2 md:px-4 py-2 md:py-3 sticky left-0 bg-white border-r border-black/10 z-10">NIP</th>
                            <th className="px-2 md:px-4 py-2 md:py-3 sticky left-[60px] md:left-[67.72px] min-w-[120px] md:min-w-[200px] bg-white border-r border-black/10 z-10">Nama</th>
                            {dates.map((date) => (
                                <th key={date} className="px-1 md:px-2 py-2 md:py-3 border-r border-black/10 text-center min-w-[32px] md:min-w-[40px] whitespace-nowrap text-[10px] md:text-xs">{date}</th>
                            ))}
                            <th className="px-2 md:px-4 py-2 md:py-3 border-r border-black/10 whitespace-nowrap">Workday</th>
                            <th className="px-2 md:px-4 py-2 md:py-3 border-r border-black/10 whitespace-nowrap">Absen</th>
                            <th className="px-2 md:px-4 py-2 md:py-3 border-r border-black/10 whitespace-nowrap">Work</th>
                            <th className="px-2 md:px-4 py-2 md:py-3 border-r border-black/10 whitespace-nowrap">Sisa</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-black/10 bg-white">
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td className="px-2 md:px-4 py-2 md:py-3 sticky left-0 bg-white border-r border-black/10 z-10 font-medium">{row.nip}</td>
                                <td className="px-2 md:px-4 py-2 md:py-3 sticky left-[60px] md:left-[67.72px] min-w-[120px] md:min-w-[200px] bg-white border-r border-black/10 z-10">{row.nama}</td>
                                {dates.map((date) => {
                                    const value = row.tanggal[date] || "";
                                    const isLibur = value === "L";
                                    const isAlpha = value === "A";
                                    return (
                                        <td
                                            key={date}
                                            className={`px-1 md:px-2 py-2 md:py-3 border-r border-black/10 text-center min-w-[32px] md:min-w-[40px] whitespace-nowrap text-[10px] md:text-xs ${
                                                isLibur 
                                                    ? "bg-red-600 text-white font-semibold" 
                                                    : isAlpha 
                                                    ? "bg-orange-100 text-orange-600 font-medium" 
                                                    : ""
                                            }`}
                                        >
                                            {value || "-"}
                                        </td>
                                    );
                                })}
                                <td className="px-2 md:px-4 py-2 md:py-3 border-r border-black/10">{row.workday}</td>
                                <td className="px-2 md:px-4 py-2 md:py-3 border-r border-black/10">{row.absen}</td>
                                <td className="px-2 md:px-4 py-2 md:py-3 border-r border-black/10">{row.work}</td>
                                <td className="px-2 md:px-4 py-2 md:py-3 border-r border-black/10">{row.sisa_cuti}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}