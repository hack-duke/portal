import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <div>
            a
            <div
                onClick={() => {
                    router.push("/apply");
                }}>
                Apply
            </div>
        </div>
    );
}
