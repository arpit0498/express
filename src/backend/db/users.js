import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "Adarsh",
    lastname: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "I'm adarsh balika!",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804932/NegProjects/SocialMedia/76_zofevc.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Arpit",
    lastname: "Gupta",
    username: "arpit",
    password: "2023",
    bio: "To stay on top of your fitness goals, you need to be self-motivated",
    website: "https://arpit.netlify.app/",
    avatarUrl:
      "https://media.licdn.com/dms/image/C5103AQEgS8KmybxHpg/profile-displayphoto-shrink_400_400/0/1518783125635?e=1693440000&v=beta&t=NS0WVlgtxbdH98PcOT-aTpuYBS2mYvVyMG4j_lmzuEk",

    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "mahima",
    lastname: "gupta",
    username: "mahi",
    password: "mahi",
    bio: "Software Enginneer",
    website: "https://google.com",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/87_tlp0ec.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "jane",
    lastname: "gupta",
    username: "jane04",
    password: "jane04",
    bio: "Software Enginneer",
    website: "https://google.com",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/87_tlp0ec.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Vipul",
    lastname: "Mahajan",
    username: "vipul2023",
    password: "vipul",
    bio: "senior Software Enginneer",
    website: "https://google.com",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/87_tlp0ec.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
