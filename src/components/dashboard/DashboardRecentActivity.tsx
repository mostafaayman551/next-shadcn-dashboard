"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { activities } from "../../data/dummyData";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const DashboardRecentActivity = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <CardDescription>Latest users actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              className="flex items-center justify-between space-x-4 border-b border-border pb-4 last:border-0"
              key={index}
            >
              <div className="flex items-center gap-2">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={activity.user.avatar}
                    alt="User"
                    className="w-full h-full"
                  />
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium w-full text-center">
                    {activity.user.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-medium">{activity.user.name}</p>
                  <small className="text-muted-foreground">
                    {activity.action}
                  </small>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardRecentActivity;
