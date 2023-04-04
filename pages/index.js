import connectDB from "/utils/mongodb.js";

export default function Home({ data }) {
    console.log(data);

    async function addUser() {
        const data = await fetch("/api/addUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first: "John",
                last: "Doe",
                email: "johndoe@gmail.com",
            }),
        });
        const res = await data.json();
        console.log(res);
    }

    return (
        <>
            <div className="">Hello world!</div>
            {data && data.map((user) => <div>{user.first}</div>)}
            <div
                onClick={() => {
                    addUser();
                }}>
                Connect
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const { db } = await connectDB();
    const res = await db.collection("users").find({}).toArray();
    const json = JSON.parse(JSON.stringify(res));
    console.log(res);
    return {
        props: {
            data: json,
        },
    };
}
