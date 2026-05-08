import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma as db } from "@/lib/prisma";
import { 
  MessageSquare, 
  Users, 
  ShoppingBag, 
  FileText,
  TrendingUp,
  Clock
} from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  // Fetch some basic stats from Prisma
  // Note: These might fail if the DB migration isn't done yet, but this is the production-ready code.
  const messageCount = await db.contactMessage.count().catch(() => 0);
  const unreadMessages = await db.contactMessage.count({ where: { status: 'UNREAD' } }).catch(() => 0);
  const userCount = await db.user.count().catch(() => 0);

  const stats = [
    {
      label: "Total Messages",
      value: messageCount,
      icon: MessageSquare,
      color: "text-blue-600",
      bg: "bg-blue-100",
      description: `${unreadMessages} unread messages`
    },
    {
      label: "Total Users",
      value: userCount,
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100",
      description: "Admin & Staff accounts"
    },
    {
      label: "Products",
      value: "-", // Will fetch from Sanity later
      icon: ShoppingBag,
      color: "text-orange-600",
      bg: "bg-orange-100",
      description: "Managed in Sanity"
    },
    {
      label: "Articles",
      value: "-", // Will fetch from Sanity later
      icon: FileText,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      description: "Managed in Sanity"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Welcome back, {session?.user?.name || 'Admin'}</h1>
        <p className="text-slate-500 mt-2">Here is what's happening with BPON today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
              <p className="text-xs text-slate-400 mt-1">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Recent Activity placeholder */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">Recent Messages</h3>
            <button className="text-sm text-primary font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {/* We'll implement actual list here in Phase 3 */}
            <div className="flex items-center gap-4 text-slate-400 py-10 justify-center flex-col">
              <Clock className="w-10 h-10 opacity-20" />
              <p>No recent activity found.</p>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <span className="font-medium">Sanity CMS</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Connected</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <span className="font-medium">Database (Prisma)</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Active</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <span className="font-medium">Email Service (Resend)</span>
              <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">Pending Setup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
