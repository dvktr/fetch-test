import fetchData from "@/libs/fetchData";
import getUsers from "@/libs/getUsers";
import Link from "next/link";

type usersList = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: [Object];
    },
    phone: string,
    website: string,
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    },
};

type ArrayUsers = Array<usersList>

type PostUser = {
  title: string,
  body: string,
  userId: number,
}

export default async function UsersPage() {
  const users: ArrayUsers = await fetchData<PostUser, ArrayUsers>('posts', {
    method: "POST",
    body: {
      body: 'asd',
      title: 'asfd',
      userId: 1
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(users);
  return (
    <div className="text-center mt-20">
      
    </div>
  );
}
