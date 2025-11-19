import { Search } from "lucide-react";
import { DataTable, type ColumnDef } from "@/app/components/data-table";

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
            <section className="flex flex-1 flex-col gap-4 md:gap-6 p-3 sm:p-4 md:p-6">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span className="font-medium text-[#43918B]">FAQ</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-3 sm:p-4 md:p-6">
                    <h2 className="text-base sm:text-lg font-medium">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
                        <label className="flex w-full md:max-w-sm items-center gap-2 sm:gap-3 rounded-lg border border-black/10 bg-[#f7f7f7] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-black/60">
                            <Search className="h-4 w-4 shrink-0" />
                            <input
                                type="text"
                                placeholder="Enter text to search..."
                                className="w-full bg-transparent text-xs sm:text-sm text-black/80 placeholder:text-black/50 focus:outline-none"
                            />
                        </label>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
                            <span>Jam Kerja</span>
                            <span className="bg-[#43918B] px-3 py-1 text-white rounded md:rounded-none">
                                06:00 - 19:00
                            </span>
                        </div>
                    </div>
                    <div className="border border-black/10 overflow-x-auto">
                        <DataTable columns={faqColumns} data={attendanceRows} />
                    </div>
                </div>
            </section>
        </div>
    );
}

const faqColumns: ColumnDef<AttendanceRow>[] = [
    {
        header: "#",
        accessor: "id",
    },
    {
        header: "Name",
        accessor: "name",
    },
    {
        header: "Deskripsi",
        accessor: "description",
    },
    {
        header: "Lokasi File",
        accessor: "location",
    },
    {
        header: "Action",
        accessor: "action",
    },
];