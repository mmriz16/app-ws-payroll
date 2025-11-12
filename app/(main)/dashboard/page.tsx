"use client";

import { useState } from "react";
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

type CutiRow = {
  id: string;
  cuti: string;
  mulai_dari: string;
  sampai_dengan: string;
  tanggal_approval: string;
  approved_oleh: string;
  notes: string;
};


type ReimburseRow = {
  id: string;
  nip: string;
  nama: string;
  kode: string;
  status: string;
  status_pembayaran: string;
  catatan: string;
};

const attendanceRows: AttendanceRow[] = [
  {
    id: "01",
    date: "01 Nov 2025",
    status: "Masuk",
    checkIn: "07 : 48 : 12 WIB",
    checkOut: "18 : 03 : 27 WIB",
    duration: "09 Jam 15 Menit",
    source: "FP",
    approval: "Approved",
  },
  {
    id: "02",
    date: "02 Nov 2025",
    status: "Telat",
    checkIn: "08 : 16 : 44 WIB",
    checkOut: "18 : 12 : 05 WIB",
    duration: "08 Jam 56 Menit",
    source: "FP",
    approval: "Approved",
  },
  {
    id: "03",
    date: "03 Nov 2025",
    status: "Masuk",
    checkIn: "07 : 51 : 09 WIB",
    checkOut: "18 : 21 : 44 WIB",
    duration: "09 Jam 30 Menit",
    source: "Mobile",
    approval: "Approved",
  },
  {
    id: "04",
    date: "04 Nov 2025",
    status: "WFH",
    checkIn: "07 : 59 : 58 WIB",
    checkOut: "17 : 45 : 31 WIB",
    duration: "08 Jam 38 Menit",
    source: "Manual",
    approval: "Approved",
  },
  {
    id: "05",
    date: "05 Nov 2025",
    status: "Masuk",
    checkIn: "07 : 42 : 33 WIB",
    checkOut: "18 : 04 : 19 WIB",
    duration: "09 Jam 01 Menit",
    source: "FP",
    approval: "Approved",
  },
  {
    id: "06",
    date: "06 Nov 2025",
    status: "Masuk",
    checkIn: "07 : 55 : 47 WIB",
    checkOut: "18 : 17 : 03 WIB",
    duration: "09 Jam 11 Menit",
    source: "FP",
    approval: "Approved",
  },
  {
    id: "07",
    date: "07 Nov 2025",
    status: "Dinas Luar",
    checkIn: "-",
    checkOut: "-",
    duration: "08 Jam",
    source: "Manual",
    approval: "Approved",
  },
  {
    id: "08",
    date: "08 Nov 2025",
    status: "Cuti Tahunan",
    checkIn: "-",
    checkOut: "-",
    duration: "-",
    source: "Self Service",
    approval: "Approved",
  },
  {
    id: "09",
    date: "09 Nov 2025",
    status: "Masuk",
    checkIn: "07 : 44 : 55 WIB",
    checkOut: "18 : 08 : 12 WIB",
    duration: "09 Jam 05 Menit",
    source: "FP",
    approval: "Approved",
  },
  {
    id: "10",
    date: "10 Nov 2025",
    status: "Sakit",
    checkIn: "-",
    checkOut: "-",
    duration: "-",
    source: "Self Service",
    approval: "Pending",
  },
];

const cutiRows: CutiRow[] = [
  {
    id: "01",
    cuti: "Cuti Tahunan",
    mulai_dari: "01 Nov 2025",
    sampai_dengan: "05 Nov 2025",
    tanggal_approval: "01 Nov 2025",
    approved_oleh: "Admin",
    notes: "Cuti tahunan",
  },
  {
    id: "02",
    cuti: "Cuti Melahirkan",
    mulai_dari: "10 Nov 2025",
    sampai_dengan: "20 Nov 2025",
    tanggal_approval: "09 Nov 2025",
    approved_oleh: "Manager",
    notes: "Cuti melahirkan",
  },
  {
    id: "03",
    cuti: "Cuti Sakit",
    mulai_dari: "15 Nov 2025",
    sampai_dengan: "16 Nov 2025",
    tanggal_approval: "15 Nov 2025",
    approved_oleh: "HR",
    notes: "Sakit demam",
  },
  {
    id: "04",
    cuti: "Cuti Tidak Dibayar",
    mulai_dari: "22 Nov 2025",
    sampai_dengan: "24 Nov 2025",
    tanggal_approval: "21 Nov 2025",
    approved_oleh: "Supervisor",
    notes: "Urusan keluarga",
  },
  {
    id: "05",
    cuti: "Cuti Tahunan",
    mulai_dari: "01 Dec 2025",
    sampai_dengan: "03 Dec 2025",
    tanggal_approval: "30 Nov 2025",
    approved_oleh: "Admin",
    notes: "Cuti akhir tahun",
  },
  {
    id: "06",
    cuti: "Dinas",
    mulai_dari: "05 Dec 2025",
    sampai_dengan: "07 Dec 2025",
    tanggal_approval: "04 Dec 2025",
    approved_oleh: "Manager",
    notes: "Dinas luar kota",
  },
  {
    id: "07",
    cuti: "Cuti Tahunan",
    mulai_dari: "10 Dec 2025",
    sampai_dengan: "12 Dec 2025",
    tanggal_approval: "09 Dec 2025",
    approved_oleh: "HR",
    notes: "Cuti liburan",
  },
  {
    id: "08",
    cuti: "Cuti Sakit",
    mulai_dari: "18 Dec 2025",
    sampai_dengan: "19 Dec 2025",
    tanggal_approval: "18 Dec 2025",
    approved_oleh: "Supervisor",
    notes: "Sakit kepala",
  },
  {
    id: "09",
    cuti: "Cuti Tahunan",
    mulai_dari: "25 Dec 2025",
    sampai_dengan: "27 Dec 2025",
    tanggal_approval: "24 Dec 2025",
    approved_oleh: "Admin",
    notes: "Cuti natal",
  },
  {
    id: "10",
    cuti: "Cuti Tidak Dibayar",
    mulai_dari: "30 Dec 2025",
    sampai_dengan: "31 Dec 2025",
    tanggal_approval: "29 Dec 2025",
    approved_oleh: "Manager",
    notes: "Urusan pribadi",
  },
];

const reimburseRows: ReimburseRow[] = [
  {
    id: "01",
    nip: "00164",
    nama: "Miftakhul Rizky",
    kode: "REIM-001",
    status: "Approved",
    status_pembayaran: "Sudah Dibayar",
    catatan: "Transportasi",
  },
  {
    id: "02",
    nip: "00172",
    nama: "Ananda Putri",
    kode: "REIM-002",
    status: "Pending",
    status_pembayaran: "Belum Dibayar",
    catatan: "Makan siang",
  },
  {
    id: "03",
    nip: "00188",
    nama: "Bagus Pratama",
    kode: "REIM-003",
    status: "Approved",
    status_pembayaran: "Sudah Dibayar",
    catatan: "Parkir",
  },
  {
    id: "04",
    nip: "00164",
    nama: "Miftakhul Rizky",
    kode: "REIM-004",
    status: "Rejected",
    status_pembayaran: "Belum Dibayar",
    catatan: "Hotel",
  },
  {
    id: "05",
    nip: "00172",
    nama: "Ananda Putri",
    kode: "REIM-005",
    status: "Approved",
    status_pembayaran: "Sudah Dibayar",
    catatan: "Tol",
  },
  {
    id: "06",
    nip: "00188",
    nama: "Bagus Pratama",
    kode: "REIM-006",
    status: "Pending",
    status_pembayaran: "Belum Dibayar",
    catatan: "Bensin",
  },
  {
    id: "07",
    nip: "00164",
    nama: "Miftakhul Rizky",
    kode: "REIM-007",
    status: "Approved",
    status_pembayaran: "Sudah Dibayar",
    catatan: "Makan malam",
  },
  {
    id: "08",
    nip: "00172",
    nama: "Ananda Putri",
    kode: "REIM-008",
    status: "Approved",
    status_pembayaran: "Belum Dibayar",
    catatan: "Tiket pesawat",
  },
  {
    id: "09",
    nip: "00188",
    nama: "Bagus Pratama",
    kode: "REIM-009",
    status: "Pending",
    status_pembayaran: "Belum Dibayar",
    catatan: "Taxi",
  },
  {
    id: "10",
    nip: "00164",
    nama: "Miftakhul Rizky",
    kode: "REIM-010",
    status: "Approved",
    status_pembayaran: "Sudah Dibayar",
    catatan: "Internet",
  },
];



export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Absensi");

  const tabs = ["Absensi", "Cuti", "Reimburse", "Team Calendar"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Absensi":
        return (
          <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4 md:gap-6 md:p-6">
            <div className="flex flex-row items-center justify-between gap-2.5 sm:gap-3 md:gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex w-full md:w-sm items-center gap-2 sm:gap-2.5 md:gap-3 border border-black/10 bg-[#f7f7f7] px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-[10px] sm:text-xs md:text-sm text-black/60">
                <Search className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 shrink-0" />
                <input
                  type="text"
                  placeholder="Enter text to search..."
                  className="w-full bg-transparent text-[10px] sm:text-xs md:text-sm text-black/80 placeholder:text-black/50 focus:outline-none"
                />
              </label>
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs">
                <span className="whitespace-nowrap">Jam Kerja Anda</span>
                <span className="bg-[#43918B] px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-white whitespace-nowrap text-[10px] sm:text-xs">
                  6 Jam 25 Menit
                </span>
              </div>
            </div>

            <div className="overflow-x-auto border border-black/10">
              <div className="min-w-[800px]">
                <AttendanceTable rows={attendanceRows} />
              </div>
            </div>
          </div>
        );
      case "Cuti":
        return (
          <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4 md:gap-6 md:p-6">
            <div className="flex flex-row items-center justify-between gap-2.5 sm:gap-3 md:gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex w-full md:w-sm items-center gap-2 sm:gap-2.5 md:gap-3 border border-black/10 bg-[#f7f7f7] px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-[10px] sm:text-xs md:text-sm text-black/60">
                <Search className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 shrink-0" />
                <input
                  type="text"
                  placeholder="Enter text to search..."
                  className="w-full bg-transparent text-[10px] sm:text-xs md:text-sm text-black/80 placeholder:text-black/50 focus:outline-none"
                />
              </label>
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs">
                <span className="whitespace-nowrap">Jam Kerja Anda</span>
                <span className="bg-[#43918B] px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-white whitespace-nowrap text-[10px] sm:text-xs">
                  6 Jam 25 Menit
                </span>
              </div>
            </div>

            <div className="overflow-x-auto border border-black/10">
              <div className="min-w-[800px]">
                <CutiTable rows={cutiRows} />
              </div>
            </div>
          </div>
        );
      case "Reimburse":
        return (
          <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4 md:gap-6 md:p-6">
            <div className="flex flex-row items-center justify-between gap-2.5 sm:gap-3 md:gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex w-full md:w-sm items-center gap-2 sm:gap-2.5 md:gap-3 border border-black/10 bg-[#f7f7f7] px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-[10px] sm:text-xs md:text-sm text-black/60">
                <Search className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 shrink-0" />
                <input
                  type="text"
                  placeholder="Enter text to search..."
                  className="w-full bg-transparent text-[10px] sm:text-xs md:text-sm text-black/80 placeholder:text-black/50 focus:outline-none"
                />
              </label>
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs">
                <span className="whitespace-nowrap">Jam Kerja Anda</span>
                <span className="bg-[#43918B] px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-white whitespace-nowrap text-[10px] sm:text-xs">
                  6 Jam 25 Menit
                </span>
              </div>
            </div>

            <div className="overflow-x-auto border border-black/10">
              <div className="min-w-[800px]">
                <ReimburseTable rows={reimburseRows} />
              </div>
            </div>
          </div>
        );
      case "Team Calendar":
        return (
          <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4 md:gap-6 md:p-6">
            <TeamCalendar />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1 flex-col text-black">
      <section className="flex flex-1 flex-col gap-3 p-3 sm:gap-4 sm:p-4 md:gap-6 md:p-6">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs md:text-sm text-black/60">
          <span>Home</span>
          <span>/</span>
          <span className="font-medium text-[#43918B]">Dashboard</span>
        </div>

        <div className="border border-black/10 bg-white p-3 sm:p-4 md:p-6">
          <h1 className="text-base sm:text-lg md:text-xl font-medium">Dashboard</h1>
        </div>

        <div className="border border-black/10 bg-white p-3 sm:p-4 md:p-6">
          <h2 className="text-sm sm:text-base md:text-lg font-medium">Jadwal Minggu Ini</h2>
          <ScheduleTable rows={currentWeekSchedule} />
          <h2 className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg font-medium">Jadwal Minggu Depan</h2>
          <ScheduleTable rows={nextWeekSchedule} />
        </div>

        <div className="grid gap-2.5 sm:gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className={`${metric.background} border border-black/10 p-3 sm:p-4 md:p-6 text-white`}
            >
              <p className="text-base sm:text-lg md:text-2xl font-medium">{metric.title}</p>
              <div className="mt-1.5 sm:mt-2 flex items-baseline gap-2 text-xl sm:text-2xl md:text-3xl font-normal">
                <span>{metric.value}</span>
              </div>
              <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-light text-white/80">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 border border-red-100 bg-linear-to-r from-[#ff000009] to-[#ff000009] p-3 sm:p-4 md:p-6 text-red-600">
          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0 mt-0.5" />
          <p className="text-[10px] sm:text-xs md:text-sm font-light leading-4 sm:leading-5 md:leading-6">
            Per 19 Maret 2025, untuk WFO absen menggunakan mesin finger print
            masuk, Check In untuk absen masuk dan Check Out untuk absen pulang !!
            || Pengisian RENCANA dan REALISASI dilakukan melalui Wipro dan
            dipantau oleh atasan
          </p>
        </div>

        <div className="border border-black/10 bg-white">
          <div className="flex items-center gap-0.5 sm:gap-1 border-b border-black/10 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`h-11 sm:h-12 md:h-14 min-w-[90px] sm:min-w-[100px] md:min-w-[120px] border-b-2 px-3 sm:px-4 md:px-6 text-[10px] sm:text-xs md:text-sm font-medium transition whitespace-nowrap active:bg-black/5 ${activeTab === tab
                  ? "border-[#43918B] text-black"
                  : "border-transparent text-black/50 active:text-black/70"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {renderTabContent()}
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
    <div className="mt-3 sm:mt-4 overflow-x-auto border border-black/10 mx-0">
      <div className="min-w-[600px]">
        <table className="min-w-full divide-y divide-black/10 text-left text-[10px] sm:text-xs">
          <thead className="bg-white text-black text-xs sm:text-sm">
            <tr>
              <th className="w-14 sm:w-16 md:w-20 px-1.5 sm:px-2 md:px-4 bg-white border-r border-black/10 py-1.5 sm:py-2 md:py-3 font-bold">NIP</th>
              <th className="px-1.5 sm:px-2 md:px-4 bg-white border-r border-black/10 py-1.5 sm:py-2 md:py-3 font-bold">Nama</th>
              {rows[0]?.days.map((day) => (
                <th key={day} className="px-1 sm:px-2 md:px-4 bg-white border-l border-black/10 py-1.5 sm:py-2 md:py-3 text-center font-bold text-[9px] sm:text-[10px] md:text-xs">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10 bg-white">
            {rows.map((row) => (
              <tr key={row.nip}>
                <td className="px-1.5 sm:px-2 md:px-4 bg-white border-r border-black/10 py-1.5 sm:py-2 md:py-3 font-regular">{row.nip}</td>
                <td className="px-1.5 sm:px-2 md:px-4 bg-white border-r border-black/10 py-1.5 sm:py-2 md:py-3 font-regular">{row.name}</td>
                {row.days.map((day) => (
                  <td key={day} className="px-1 sm:px-2 md:px-4 bg-white border-l border-black/10 py-1.5 sm:py-2 md:py-3 text-center">
                    <span className="inline-flex min-w-[35px] sm:min-w-[40px] md:min-w-[50px] justify-center bg-[#43918B] px-0.5 sm:px-1 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs font-semibold text-white">
                      WFO
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AttendanceTable({ rows }: { rows: AttendanceRow[] }) {
  return (
    <table className="min-w-full divide-y divide-black/10 text-left text-[10px] sm:text-xs">
      <thead className="bg-white text-black text-xs sm:text-sm">
        <tr>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">#</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Tanggal</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Absensi</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Jam Masuk</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Jam Keluar</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Jam Kerja</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Sumber</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3">Status Absen</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black/10 bg-white">
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 font-medium text-black/70">{row.id}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.date}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.status}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap text-[9px] sm:text-[10px] md:text-xs">{row.checkIn}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap text-[9px] sm:text-[10px] md:text-xs">{row.checkOut}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap text-[9px] sm:text-[10px] md:text-xs">{row.duration}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.source}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3">{row.approval}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CutiTable({ rows }: { rows: CutiRow[] }) {
  return (
    <table className="min-w-full divide-y divide-black/10 text-left text-[10px] sm:text-xs">
      <thead className="bg-white text-black text-xs sm:text-sm">
        <tr>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">#</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Cuti</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Mulai Dari</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Sampai Dengan</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Tanggal Approval</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Approved Oleh</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3">Notes</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black/10 bg-white">
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 font-medium text-black/70">{row.id}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.cuti}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.mulai_dari}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.sampai_dengan}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.tanggal_approval}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.approved_oleh}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3">{row.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ReimburseTable({ rows }: { rows: ReimburseRow[] }) {
  return (
    <table className="min-w-full divide-y divide-black/10 text-left text-[10px] sm:text-xs">
      <thead className="bg-white text-black text-xs sm:text-sm">
        <tr>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">#</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">NIP</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Nama</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Kode</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Status</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">Status Pembayaran</th>
          <th className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3">Catatan</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black/10 bg-white">
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 font-medium text-black/70">{row.id}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.nip}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.nama}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.kode}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10">{row.status}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white border-r border-black/10 whitespace-nowrap">{row.status_pembayaran}</td>
            <td className="px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3">{row.catatan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TeamCalendar() {
  const daysOfWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  
  // Generate days for November 2025 (30 days)
  // November 1, 2025 is Saturday, so we need 5 empty cells (Mon-Fri) before it
  const daysInMonth = 30;
  const days = [];
  
  // Add empty cells for days before the 1st
  // November 1, 2025 is Saturday, so we need 5 empty cells (Mon-Fri)
  for (let i = 0; i < 5; i++) {
    days.push(null);
  }
  
  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }
  
  // Add empty cells to fill the last week (if needed)
  const remainingCells = 42 - days.length; // 6 rows * 7 days = 42 cells
  for (let i = 0; i < remainingCells; i++) {
    days.push(null);
  }

  return (
    <div className="border border-black/10 bg-white overflow-x-auto mx-0">
      <div className="min-w-[600px]">
        <div className="border-b border-black/10 p-2.5 sm:p-3 md:p-4">
          <h3 className="text-sm sm:text-base md:text-lg font-medium">November 2025</h3>
        </div>
        <div className="grid grid-cols-7 divide-x divide-y divide-black/10">
          {/* Header days */}
          {daysOfWeek.map((day) => (
            <div key={day} className="bg-[#f7f7f7] px-0.5 sm:px-1 md:px-4 py-1.5 sm:py-2 md:py-3 text-center text-[9px] sm:text-[10px] md:text-sm font-medium text-black/60">
              {day}
            </div>
          ))}
          {/* Calendar days */}
          {days.map((day, index) => (
            <div
              key={index}
              className="min-h-[50px] sm:min-h-[60px] md:min-h-[100px] border-r border-black/10 p-0.5 sm:p-1 md:p-2 text-[10px] sm:text-xs md:text-sm"
            >
              {day && (
                <>
                  <div className="font-medium text-black">{day}</div>
                  <div className="mt-0.5 sm:mt-0.5 md:mt-1 space-y-0.5 md:space-y-1">
                    {day === 1 && (
                      <div className="rounded bg-[#43918B] px-0.5 sm:px-1 md:px-2 py-0.5 sm:py-0.5 md:py-1 text-[8px] sm:text-[10px] md:text-xs text-white">
                        Event
                      </div>
                    )}
                    {day === 15 && (
                      <div className="rounded bg-blue-500 px-0.5 sm:px-1 md:px-2 py-0.5 sm:py-0.5 md:py-1 text-[8px] sm:text-[10px] md:text-xs text-white">
                        Meeting
                      </div>
                    )}
                    {day === 25 && (
                      <div className="rounded bg-orange-500 px-0.5 sm:px-1 md:px-2 py-0.5 sm:py-0.5 md:py-1 text-[8px] sm:text-[10px] md:text-xs text-white">
                        Deadline
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}