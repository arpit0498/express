import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: "02 Nov, 2020",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Dead last finish is greater than did not finish, which trumps did not start",
    image: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "arpit",
    createdAt: "11 Jan, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Healthy Lifestyle",
    image: "",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mahi",
    createdAt: "01 march, 2022",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Jane12",
    createdAt: "17 March,2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Take care of your body. It’s the only place you have to live.",
    image: "",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vipul2023",
    createdAt: "01 july, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "New on this ",
    image: "",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jane04",
    createdAt: "01 march, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Healthy eating",
    image: "",
    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mahi",
    createdAt: "01 april, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "To stay on top of your fitness goals, you need to be self-motivated",
    image: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "arpit",
    createdAt: "11 June, 2023",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Push harder than yesterday if you want a different tomorrow.",
    image: "https://img.freepik.com/free-vector/motivation-quote-background-yellow-color_23-2147857937.jpg?w=2000",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "arpit",
    createdAt: "01 july, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Just had an amazing workout session! Feeling pumped! 💪",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: "02 july, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Enjoying a cup of coffee while working on my latest project ☕️",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alicesmith",
    createdAt: "01 june, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Exploring new hiking trails this weekend! Can't wait to be surrounded by nature 🌿",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emilyj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Trying out a new recipe today. Hoping it turns out delicious! 🍳",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Just finished reading an amazing book. Highly recommend it! 📚",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alicesmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Attended an inspiring tech conference today. Learned a lot! 💻",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emilyj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Enjoying a relaxing day at the beach. Nothing beats the sound of waves! 🌊",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Excited to start a new coding project. Time to bring my ideas to life! 💻",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alicesmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Spent the day exploring art galleries. So much creativity in one place! 🎨",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emilyj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Enjoying a peaceful evening with a good book and a cup of tea. Blissful! 📖☕️",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },



];
