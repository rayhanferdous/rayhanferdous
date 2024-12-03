import FiverrSvg from "@/components/Svg/FiverrSvg";
import { GithubSvg } from "@/components/Svg/GithubSvg";
import { LinkedInSvg } from "@/components/Svg/LinkedInSvg";
import Link from "next/link";

const FollowMe = () => {
  return (
    <div className="flex w-fit gap-9 items-center bg-cardBg px-9 py-4 rounded-5px">
      <Link href="https://github.com/rayhanferdous" target="_blank">
        <GithubSvg />
      </Link>
      <Link href="https://bd.linkedin.com/in/therayhanferdous" target="_blank">
        <LinkedInSvg />
      </Link>
      <Link href="https://www.fiverr.com/therayhan" target="_blank">
        <FiverrSvg />
      </Link>
    </div>
  );
};

export default FollowMe;
