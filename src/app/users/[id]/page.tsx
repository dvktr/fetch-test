import getUser from "@/libs/getUser";
import getUsersPosts from "@/libs/getUserPost";

type userDataAdress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

type userData = {
    id: number;
    name: string;
    username: string;
    email: string;
    adress: userDataAdress;
    phone: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export default async function UserPage({params: {id}}) {
    const [user, posts] = await Promise.all([userData, userPosts])

    return (
        <div className="text-center mt-20">
            <h1 className="text-5x1 font-bold my-4">{userData.name}</h1>
            <h2 className="text-5x1">{userData.email}</h2>
            <h2 className="text-5x1">{userData.phone}</h2>
            <h2 className="text-5x1">{userPosts.id}</h2>
        </div>
    )
}