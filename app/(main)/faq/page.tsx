import { Search } from "lucide-react";

type AttendanceRow = {
    id: string;
    name: string;
    description: string;
    location: string;
    action: string;
};

const attendanceRows: AttendanceRow[] = [
    "01",
].map((id) => ({
    id,
    name: "Petunjuk Teknis Payroll v2 / 25-April-2021",
    description: "Petunjuk penggunaan payroll dengan fitur update per 26 April 2021",
    location: "https://www.google.com",
    action: "Download",
}));

export default function DashboardPage() {
    return (
        <div className="flex flex-1 flex-col text-black">
            <section className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span className="font-medium text-[#44b8af]">FAQ</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <h2 className="text-lg font-medium">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <label className="flex w-sm items-center gap-3  border border-black/10 bg-[#f7f7f7] px-4 py-3 text-sm text-black/60">
                            <Search className="h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Enter text to search..."
                                className="w-full bg-transparent text-sm text-black/80 placeholder:text-black/50 focus:outline-none"
                            />
                        </label>
                        <div className="flex items-center gap-3 text-xs">
                            <span>Jam Kerja</span>
                            <span className=" bg-[#44b8af] px-3 py-1 text-white">
                                06:00 - 19:00
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden  border border-black/10">
                        <AttendanceTable rows={attendanceRows} />
                    </div>
                </div>
            </section>
        </div>
    );
}

function AttendanceTable({ rows }: { rows: AttendanceRow[] }) {
    return (
        <table className="min-w-full divide-y divide-black/10 text-left text-xs">
            <thead className="bg-white text-black text-sm">
                <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Deskripsi</th>
                    <th className="px-4 py-3">Lokasi File</th>
                    <th className="px-4 py-3">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-4 py-3 font-medium text-black/70">{row.id}</td>
                        <td className="px-4 py-3">{row.name}</td>
                        <td className="px-4 py-3">{row.description}</td>
                        <td className="px-4 py-3">{row.location}</td>
                        <td className="px-4 py-3">{row.action}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}