import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardRecentActivity from "@/components/dashboard/DashboardRecentActivity";
import DashboardStats from "@/components/dashboard/DashboardStats";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Home = () => {
  return (
    <DashboardLayout>
      <div>
        <div className="space-y-6 mb-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, Joe!
              </h1>
              <p className="text-muted-foreground mt-1">
                Here's an overview of your business.
              </p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
        <div className="space-y-6 my-2">
          <DashboardStats />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 space-y-6">
          <div>
            <DashboardChart />
          </div>
          <div>
            <DashboardRecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
