import userImage from "../assets/user.jpg";
export interface Stat {
  title: string;
  value: string | number;
  icon: string;
  score: string;
}
export interface Activity {
  user: { name: string; email: string; avatar: string; initials: string };
  action: string;
  time: string;
}

export interface ChartData {
  name: string;
  amount: number;
}

export const stats: Stat[] = [
  {
    title: "Total Users",
    value: 1000,
    icon: "Users",
    score: "+15%",
  },
  {
    title: "Expenses",
    value: 2500,
    icon: "BanknoteArrowDown",
    score: "-15%",
  },
  {
    title: "Revenue",
    value: 5000,
    icon: "BanknoteArrowUp",
    score: "+15%",
  },
];

export const activities: Activity[] = [
  {
    user: {
      name: "Mostafa Ayman",
      email: "mostafaayman551@gmail.com",
      avatar: userImage.src,
      initials: "MA",
    },
    action: "Added a new product",
    time: "1 hour ago",
  },
  {
    user: {
      name: "John Doe",
      email: "john.doe@gmail.com",
      avatar: userImage.src,
      initials: "JD",
    },
    action: "Edited a product",
    time: "2 hours ago",
  },
  {
    user: {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      avatar: userImage.src,
      initials: "JD",
    },
    action: "Deleted a product",
    time: "3 hours ago",
  },
];

export const chartData: ChartData[] = [
  { name: "Jan", amount: 400 },
  { name: "Feb", amount: 800 },
  { name: "Mar", amount: 700 },
  { name: "Apr", amount: 1000 },
  { name: "May", amount: 900 },
  { name: "Jun", amount: 1200 },
];
