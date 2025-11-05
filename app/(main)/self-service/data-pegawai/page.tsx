
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
            <section className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center gap-2 text-sm text-black/60">
                    <span>Home</span>
                    <span>/</span>
                    <span>Self Service</span>
                    <span>/</span>
                    <span className="font-medium text-[#44b8af]">Data Pegawai</span>
                </div>

                <div className="flex flex-col gap-4 border border-black/10 bg-white p-6">
                    <h2 className="text-lg font-medium">Data Pegawai</h2>
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
                    <th className="px-4 py-3">NIP</th>
                    <th className="px-4 py-3">Nama</th>
                    <th className="px-4 py-3">Tanggal Lahir</th>
                    <th className="px-4 py-3">Tanggal Masuk</th>
                    <th className="px-4 py-3">No HP</th>
                    <th className="px-4 py-3">Email</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="px-4 py-3 font-medium text-black/70">{row.id}</td>
                        <td className="px-4 py-3">{row.name}</td>
                        <td className="px-4 py-3">{row.birthDate}</td>
                        <td className="px-4 py-3">{row.joinDate}</td>
                        <td className="px-4 py-3">{row.phoneNumber}</td>
                        <td className="px-4 py-3">{row.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}