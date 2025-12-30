import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Give</h1>
      <Image
        src="/images/sample.jpg"
        alt="Sample Image"
        width={600}
        height={400}
      />
    </main>
  );
}
