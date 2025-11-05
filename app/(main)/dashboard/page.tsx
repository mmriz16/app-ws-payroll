import { AlertTriangle, Search } from "lucide-react";

const currentWeekSchedule = [
  {
    nip: "00164",
    name: "Miftakhul Rizky",
    days: ["03 Nov 2025", "04 Nov 2025", "05 Nov 2025", "06 Nov 2025", "07 Nov 2025"],
  },
];

const nextWeekSchedule = [
  {
    nip: "00164",
    name: "Miftakhul Rizky",
    days: ["10 Nov 2025", "11 Nov 2025", "12 Nov 2025", "13 Nov 2025", "14 Nov 2025"],
  },
];

const metrics = [
  {
    title: "Absensi November",
    value: "03 / 20",
    description: "Hari Masuk / Hari Kerja",
    background: "bg-[#025aa5]",
  },
  {
    title: "Jatah Cuti 2025",
    value: "0 / 0",
    description: "Sisa Cuti / Jumlah Cuti",
    background: "bg-[#31b0d5]",
  },
  {
    title: "Request Reimburse",
    value: "0",
    description: "Request Reimburse",
    background: "bg-[#ec971f]",
  },
];

type AttendanceRow = {
  id: string;
  date: string;
  status: string;
  checkIn: string;
  checkOut: string;
  duration: string;
  source: string;
  approval: string;
};

const attendanceRows: AttendanceRow[] = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
].map((id) => ({
  id,
  date: `${id.padStart(2, "0")} Nov 2025`,
  status: "Masuk",
  checkIn: "07 : 52 : 04 AM",
  checkOut: "18 : 24 : 08 PM",
  duration: "09 Jam 24 Menit",
  source: "FP",
  approval: "Approved",
}));

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col text-black">
      <section className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-center gap-2 text-sm text-black/60">
          <span>Home</span>
          <span>/</span>
          <span className="font-medium text-[#44b8af]">Dashboard</span>
        </div>

        <div className=" border border-black/10 bg-white p-6">
          <h1 className="text-xl font-medium">Dashboard</h1>
        </div>

        <div className=" border border-black/10 bg-white p-6">
          <h2 className="text-lg font-medium">Jadwal Minggu Ini</h2>
          <ScheduleTable rows={currentWeekSchedule} />
          <h2 className="mt-6 text-lg font-medium">Jadwal Minggu Depan</h2>
          <ScheduleTable rows={nextWeekSchedule} />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className={`${metric.background}  border border-black/10 p-6 text-white`}
            >
              <p className="text-2xl font-medium">{metric.title}</p>
              <div className="mt-2 flex items-baseline gap-2 text-3xl font-normal">
                <span>{metric.value}</span>
              </div>
              <p className="mt-2 text-sm font-light text-white/80">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 border border-red-100 bg-linear-to-r from-[#ff000009] to-[#ff000009] p-6 text-red-600">
          <AlertTriangle className="h-6 w-6 shrink-0" />
          <p className="text-sm font-light leading-6">
            Per 19 Maret 2025, untuk WFO absen menggunakan mesin finger print
            masuk, Check In untuk absen masuk dan Check Out untuk absen pulang !!
            || Pengisian RENCANA dan REALISASI dilakukan melalui Wipro dan
            dipantau oleh atasan
          </p>
        </div>

        <div className=" border border-black/10 bg-white">
          <div className="flex items-center gap-1 border-b border-black/10">
            {["Absensi", "Cuti", "Reimburse", "Team Calendar"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`h-14 min-w-[120px] border-b-2 px-6 text-sm font-medium transition ${tab === "Absensi"
                    ? "border-[#44b8af] text-black"
                    : "border-transparent text-black/50"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-6 p-6">
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
        </div>
      </section>
    </div>
  );
}

type ScheduleRow = {
  nip: string;
  name: string;
  days: string[];
};

function ScheduleTable({ rows }: { rows: ScheduleRow[] }) {
  return (
    <div className="mt-4 overflow-hidden  border border-black/10">
      <table className="min-w-full divide-y divide-black/10 text-left text-xs">
        <thead className="bg-white text-black text-sm">
          <tr>
            <th className="w-20 px-4 py-3 font-bold">NIP</th>
            <th className="px-4 py-3 font-bold">Nama</th>
            {rows[0]?.days.map((day) => (
              <th key={day} className="px-4 py-3 text-center font-bold">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-black/10 bg-white">
          {rows.map((row) => (
            <tr key={row.nip}>
              <td className="px-4 py-3 font-regular">{row.nip}</td>
              <td className="px-4 py-3 font-regular">{row.name}</td>
              {row.days.map((day) => (
                <td key={day} className="px-4 py-3 text-center">
                  <span className="inline-flex min-w-[50px] justify-center bg-[#44b8af] px-1 py-1 text-xs font-semibold text-white">
                    WFO
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AttendanceTable({ rows }: { rows: AttendanceRow[] }) {
  return (
    <table className="min-w-full divide-y divide-black/10 text-left text-xs">
      <thead className="bg-white text-black text-sm">
        <tr>
          <th className="px-4 py-3">#</th>
          <th className="px-4 py-3">Tanggal</th>
          <th className="px-4 py-3">Absensi</th>
          <th className="px-4 py-3">Jam Masuk</th>
          <th className="px-4 py-3">Jam Keluar</th>
          <th className="px-4 py-3">Jam Kerja</th>
          <th className="px-4 py-3">Sumber</th>
          <th className="px-4 py-3">Status Absen</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black/10 bg-white">
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="px-4 py-3 font-medium text-black/70">{row.id}</td>
            <td className="px-4 py-3">{row.date}</td>
            <td className="px-4 py-3">{row.status}</td>
            <td className="px-4 py-3">{row.checkIn}</td>
            <td className="px-4 py-3">{row.checkOut}</td>
            <td className="px-4 py-3">{row.duration}</td>
            <td className="px-4 py-3">{row.source}</td>
            <td className="px-4 py-3">{row.approval}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}