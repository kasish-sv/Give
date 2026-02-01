import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 text-xs lg:text-base">
      <Image src="/images/logo.jpeg" alt="Give Logo" width={50} height={50} />
      <div className=" mt-4 text-3xl font-bold w-full p-6 text-center frosted-glass">
        About Give
      </div>
      <p className="mt-4 text-justify">
        Give is more than just a platform, it is a movement built on compassion,
        empathy, and the belief that small acts of kindness can create lasting
        change. In a world where countless individuals face challenges every
        day, Give provides a bridge between those who want to help and those who
        need support. Our mission is simple yet powerful: to make generosity
        effortless, accessible, and impactful. We understand that giving is not
        always about money. Sometimes it is about time, skills, or even a
        listening ear. That is why Give is designed to accommodate different
        forms of contribution, ensuring that everyone can participate in
        building a better tomorrow. Whether you are donating to a cause,
        volunteering your expertise, or simply sharing resources, the platform
        makes it easy to connect your goodwill with the right opportunities.
      </p>
      <p className="mt-4 text-justify">
        Transparency and trust are at the heart of Give. Every interaction is
        guided by the principle that generosity should uplift both the giver and
        the receiver. Donors can feel confident that their contributions are
        reaching genuine needs, while recipients experience dignity and respect
        in the process. By fostering this mutual trust, Give creates a safe and
        welcoming environment where kindness can thrive. Technology plays a
        vital role in our mission. With an intuitive interface and seamless
        navigation, Give removes the barriers that often discourage people from
        helping. Instead of complicated processes, users are greeted with
        clarity and simplicity, allowing them to focus on what truly matters —
        making a difference.
      </p>
      <p className="mt-4 text-justify hidden lg:block">
        The platform is built to be inclusive, ensuring that anyone, regardless
        of background or experience, can join the journey of giving. But Give is
        not just about transactions; it is about building community. Each act of
        generosity strengthens the bonds between people, reminding us that we
        are all connected. By encouraging collaboration and shared
        responsibility, Give inspires a culture where kindness is not an
        occasional gesture but a way of life. Our vision is to create a ripple
        effect of compassion. One small act can inspire another, and together
        these ripples can grow into waves of change. We believe that when people
        come together with open hearts, they can transform not only individual
        lives but entire communities. Give is here to nurture that
        transformation, one connection at a time. Ultimately, Give is about
        hope. It is about believing that no matter how divided or difficult the
        world may seem, there is always room for kindness. By making generosity
        simple and joyful, we aim to remind people that they have the power to
        make a difference. Every click, every share, every contribution is a
        step toward a brighter, more compassionate future.
      </p>
    </main>
  );
}
