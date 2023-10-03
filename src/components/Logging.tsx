export default function Logging() {
  return (
    <div className="flex flex-col flex-grow gap-4 p-4 border-2 bg-purple-200 border-black rounded-md">
      <h2 className="text-2xl font-semibold">Logging</h2>
      <p>In its simplest form we can study repository history,</p>
      <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
        <span className=" text-yellow-300">git</span> log
      </code>
      <p>
        You can add a lot more parameters to make the log look like what you
        want.
      </p>
      <div className="flex flex-wrap flex-1 gap-2">
        <div className="flex flex-col gap-2 w-[45%]">
          <p className="font-semibold before:content-['[*]'] before:text-green-800 before:pr-2">
            To see only commits of Certain author,
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> log
            --author=author_name
          </code>
        </div>
        <div className="flex flex-col gap-2 w-[45%]">
          <p className="font-semibold before:content-['[*]'] before:text-green-800 before:pr-2">
            To see a very compressed log where each commit is one line:
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> log --pretty=oneline
          </code>
        </div>
        <div className="flex flex-col gap-2 w-[45%]">
          <p className="font-semibold before:content-['[*]'] before:text-green-800 before:pr-2">
            To see an ASCII art tree of all the branches,
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> log --graph --oneline
            --decorate --all
          </code>
        </div>
        <div className="flex flex-col gap-2 w-[45%]">
          <p className="font-semibold before:content-['[*]'] before:text-green-800 before:pr-2">
            To see only which filed has changed:
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> log --name-status
          </code>
        </div>
      </div>
    </div>
  );
}
