"use client";
import { useState } from "react";
import { Bot, Play, CheckCircle, XCircle, Clock, Zap, BarChart3, Plus } from "lucide-react";

const agents = [
  { id: "a1", name: "Lead Qualifier", trigger: "webhook", schedule: null, status: "active", last_run: "2 min ago", run_count: 847, success_rate: 98.2 },
  { id: "a2", name: "Daily Report Generator", trigger: "cron", schedule: "0 9 * * *", status: "active", last_run: "6h ago", run_count: 124, success_rate: 100 },
  { id: "a3", name: "Support Ticket Triage", trigger: "webhook", schedule: null, status: "active", last_run: "4 min ago", run_count: 2341, success_rate: 96.8 },
  { id: "a4", name: "Invoice Extractor", trigger: "manual", schedule: null, status: "paused", last_run: "3d ago", run_count: 56, success_rate: 91.0 },
];

const recentRuns = [
  { agent: "Lead Qualifier", status: "completed", duration: "1.2s", time: "2 min ago" },
  { agent: "Support Ticket Triage", status: "completed", duration: "0.8s", time: "4 min ago" },
  { agent: "Lead Qualifier", status: "failed", duration: "3.1s", time: "18 min ago" },
  { agent: "Daily Report Generator", status: "completed", duration: "4.5s", time: "6h ago" },
];

export default function NexusAIDashboard() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-white/8 bg-black/60 px-6 py-4 flex items-center justify-between">
        <div>
          <span className="font-bold text-white">Nexus<span className="text-blue-400">AI</span></span>
          <span className="ml-3 text-xs text-silver/50">Multi-Agent Orchestrator</span>
        </div>
        <button className="flex items-center gap-2 rounded border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 hover:bg-blue-500/20 transition-colors">
          <Plus className="h-3.5 w-3.5" /> New Agent
        </button>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Agents", value: "3", icon: Bot, color: "text-blue-400" },
            { label: "Runs Today", value: "234", icon: Zap, color: "text-emerald-400" },
            { label: "Success Rate", value: "97.8%", icon: CheckCircle, color: "text-emerald-400" },
            { label: "Avg Duration", value: "1.4s", icon: Clock, color: "text-gold" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/8 bg-white/3 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-silver/60">{s.label}</span>
                <s.icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Agents */}
          <div className="rounded-xl border border-white/8 bg-white/3">
            <div className="p-5 border-b border-white/8 flex items-center justify-between">
              <h2 className="font-semibold text-white">Agents</h2>
              <span className="text-xs text-silver/50">{agents.length} total</span>
            </div>
            <div className="divide-y divide-white/5">
              {agents.map((a) => (
                <div key={a.id} className="flex items-center gap-4 p-4 hover:bg-white/2 transition-colors">
                  <div className={`h-2 w-2 rounded-full flex-shrink-0 ${a.status === "active" ? "bg-emerald-400 animate-pulse" : "bg-white/20"}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">{a.name}</span>
                      <span className="text-xs text-silver/40">{a.trigger}</span>
                    </div>
                    <div className="text-xs text-silver/50">Last run: {a.last_run} · {a.run_count} total runs</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-emerald-400">{a.success_rate}%</div>
                    <button className="mt-1 text-xs text-blue-400 hover:text-blue-300">Run now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent runs */}
          <div className="rounded-xl border border-white/8 bg-white/3">
            <div className="p-5 border-b border-white/8">
              <h2 className="font-semibold text-white">Recent Runs</h2>
            </div>
            <div className="divide-y divide-white/5">
              {recentRuns.map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-4">
                  {r.status === "completed"
                    ? <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    : <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white truncate">{r.agent}</div>
                    <div className="text-xs text-silver/50">{r.time} · {r.duration}</div>
                  </div>
                  <span className={`text-xs ${r.status === "completed" ? "text-emerald-400" : "text-red-400"}`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
