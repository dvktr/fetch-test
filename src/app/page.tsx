import Link from "next/link";

export default async function Home() {
  return (
      <div className="text-center mt-20">
        <h1 className="text-5x1 font-bold">Test</h1>
        <Link href={"/users"}>GO to users </Link>
      </div>
  )
}
