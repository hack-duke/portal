import connectDB from "/utils/mongodb.js";

export default function Home({ data }) {
    console.log(data);
    return (
        <>
            <div className="">Hello world!</div>
            {data && data.map((user) => <div>{user.first}</div>)}
            <div onClick={() => {}}>Connect</div>
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
