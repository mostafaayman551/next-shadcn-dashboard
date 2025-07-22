"use client";
import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useState } from "react";
const DashboardSettingsModal = () => {
  const [notifications, setNotifications] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<boolean>(false);
  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    setAlerts(true);
    setTimeout(() => {
      setAlerts(false);
    }, 1500);
  };
  return (
    <Dialog>
      <DialogTrigger>Settings</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between my-4">
          <Label htmlFor="notification">Enable Notifications</Label>
          <Switch
            id="notification"
            checked={notifications}
            onCheckedChange={setNotifications}
            className="data-[state=checked]:bg-blue-500"
          />
        </div>
        <div className="my-2">
          <Label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </Label>
          <Input placeholder="Username" id="username" />
        </div>
        <div className="my-2">
          <Label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </Label>
          <Input placeholder="Email" id="email" />
        </div>
        {alerts && (
          <Alert>
            <CheckCircle2Icon color="#10B981" />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>
        )}
        <div className="flex justify-end gap-2 mt-4">
          <Button variant={"outline"} className="bg-gray-100 dark:bg-gray-800">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600"
            onClick={onSave}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardSettingsModal;
