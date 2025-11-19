import React from "react";

export interface ColumnDef<T> {
    header: string;
    accessor: keyof T | ((row: T) => React.ReactNode);
    render?: (value: unknown, row: T) => React.ReactNode;
    headerClassName?: string;
    cellClassName?: string;
    headerStyle?: React.CSSProperties;
    cellStyle?: React.CSSProperties;
}

interface DataTableProps<T extends Record<string, unknown>> {
    columns: ColumnDef<T>[];
    data: T[];
    getRowId?: (row: T) => string | number;
    minWidth?: string;
    className?: string;
    emptyMessage?: string;
}

export function DataTable<T extends Record<string, unknown>>({
    columns,
    data,
    getRowId = (row: T): string | number => {
        if ("id" in row && (typeof row.id === "string" || typeof row.id === "number")) {
            return row.id;
        }
        if ("key" in row && (typeof row.key === "string" || typeof row.key === "number")) {
            return row.key;
        }
        return String(row);
    },
    minWidth = "800px",
    className = "",
    emptyMessage = "No data available",
}: DataTableProps<T>) {
    const getCellValue = (column: ColumnDef<T>, row: T): unknown => {
        if (typeof column.accessor === "function") {
            return column.accessor(row);
        }
        return row[column.accessor];
    };

    const renderCell = (column: ColumnDef<T>, row: T): React.ReactNode => {
        const value = getCellValue(column, row);
        
        if (column.render) {
            return column.render(value, row);
        }
        
        if (React.isValidElement(value) || typeof value === "string" || typeof value === "number") {
            return value ?? "-";
        }
        
        return String(value ?? "-");
    };

    return (
        <div className={className || ""} style={{ minWidth }}>
            <table className="min-w-full divide-y divide-black/10 text-left text-[10px] sm:text-xs">
                <thead className="bg-white text-black text-xs sm:text-sm">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className={`px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white ${
                                    index < columns.length - 1 ? "border-r border-black/10" : ""
                                } ${column.headerClassName || ""}`}
                                style={column.headerStyle}
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/10 bg-white">
                    {data.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="px-1.5 sm:px-2 md:px-4 py-8 text-center text-black/60"
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        data.map((row) => (
                            <tr key={getRowId(row)}>
                                {columns.map((column, index) => (
                                    <td
                                        key={index}
                                        className={`px-1.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-3 bg-white ${
                                            index < columns.length - 1 ? "border-r border-black/10" : ""
                                        } ${index === 0 ? "font-medium text-black/70" : ""} ${
                                            column.cellClassName || ""
                                        }`}
                                        style={column.cellStyle}
                                    >
                                        {renderCell(column, row)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}