import faker from "faker";
import { mockImgAvatar } from "../mockImages";
import { set, sub } from "date-fns";

export const notificationData = [
  {
    id: 1,
    updateP: "it's dummy content for Profile Notifications",
    time: "11:45am",
    date: "sep 20,2021",
  },
  {
    id: 2,
    updateP: "it's dummy content for Profile Notifications",
    time: "12:45am",
    date: "oct 20,2021",
  },
  {
    id: 3,
    updateP: "it's dummy content for Profile Notifications",
    time: "1:45am",
    date: "nov 20,2021",
  },
  {
    id: 4,
    updateP: "it's dummy content for Profile Notifications",
    time: "2:45am",
    date: "dec 20,2021",
  },
  {
    id: 5,
    updateP: "it's dummy content for Profile Notifications",
    time: "3:45am",
    date: "jan 20,2022",
  },
  {
    id: 6,
    updateP: "it's dummy content for Profile Notifications",
    time: "4:45am",
    date: "feb 20,2022",
  },
];

export const notificationNavData = [
  {
    id: faker.datatype.uuid(),
    title: "Your order is placed",
    description: "waiting for shipping",
    avatar: null,
    type: "order_placed",
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.findName(),
    description: "answered to your comment on the Minimal",
    avatar: mockImgAvatar(2),
    type: "friend_interactive",
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: "You have new message",
    description: "5 unread messages",
    avatar: null,
    type: "chat_message",
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: "You have new mail",
    description: "sent from Guido Padberg",
    avatar: null,
    type: "mail",
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: "Delivery processing",
    description: "Your order is being shipped",
    avatar: null,
    type: "order_shipped",
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];
