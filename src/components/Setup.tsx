import { AiFillApple, AiFillWindows } from "react-icons/ai";
import { DiLinux } from "react-icons/di";

export default function Setup() {
  return (
    <div className="flex flex-col col-span-1 w-[26%] gap-4 p-4 bg-blue-200 border-2 border-black rounded-md">
      <h2 className="text-2xl font-semibold">Setup</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <a
            href="http://git-scm.com/download/mac"
            className="flex items-center gap-2 hover:text-black hover:font-bold hover:underline"
          >
            Download Git for <AiFillApple />
          </a>
        </li>
        <li>
          <a
            href="http://git-scm.com/book/en/Getting-Started-Installing-Git"
            className="flex items-center gap-2 hover:text-green-900 hover:font-bold hover:underline"
          >
            Download Git for <DiLinux />
          </a>
        </li>
        <li>
          <a
            href="http://msysgit.github.io/"
            className="flex items-center gap-2 hover:text-blue-700 hover:font-bold hover:underline"
          >
            Download Git for <AiFillWindows />
          </a>
        </li>
      </ul>
    </div>
  );
}
