"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { stats } from "../../data/dummyData";
import { Users, BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";
const DashboardStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="shadow-sm hover:shadow-md transition duration-200"
        >
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-md font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            {stat.icon === "Users" ? (
              <Users className="w-5 h-5 text-blue-500" />
            ) : stat.icon === "BanknoteArrowDown" ? (
              <BanknoteArrowDown className="w-5 h-5 text-red-500" />
            ) : (
              <BanknoteArrowUp className="w-5 h-5 text-green-500" />
            )}
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-xl font-medium pb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">
              {stat.score === "+15%" ? (
                <i className="text-xs">
                  <span className="text-green-500">+15%</span> from last month
                </i>
              ) : (
                <i className="text-xs">
                  <span className="text-red-500">-15%</span> from last month
                </i>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
