"use client";
import Link from "next/link";
import React from "react";

export default function ArticuloCard({ categoria, id, titulo, tiempo }) {
  return (
    <Link
      href={`/documentacion/${categoria}/${id}`}
      className="block bg-[#111827] border border-[#2A3550] rounded-xl p-4 hover:border-[#00D9FF]/60 transition"
    >
      <h3 className="text-base font-semibold text-white">{titulo}</h3>
      <p className="text-sm text-[#8B9DC3] mt-1">Tiempo de lectura: {tiempo}</p>
    </Link>
  );
}
