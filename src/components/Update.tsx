export default function Update() {
  return (
    <div className="flex flex-col flex-grow gap-4 p-4 border-2 bg-orange-200 border-black rounded-md">
      <h2 className="text-2xl font-semibold">Update & Merge</h2>
      <p className=" font-semibold">
        To update your local directory to the newest commit, execute :{" "}
      </p>
      <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
        <span className=" text-yellow-300">git</span> pull
      </code>
      <p className=" font-semibold">
        in your working directory to <em>fetch</em> and <em>merge</em> remote
        changes.
      </p>
      <div className="flex flex-wrap flex-1 gap-2">
        <div className="flex flex-col gap-2 w-[45%]">
          <p className=" font-semibold before:content-['[*]'] before:text-purple-800 before:pr-2">
            To merge another branch into your active branch, use:{" "}
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> merge branch_name
          </code>
        </div>
        <div className="flex flex-col gap-2 w-[45%]">
          <p className=" font-semibold before:content-['[*]'] before:text-purple-800 before:pr-2">
            Before merging changes, you can also preview them by using
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> diff source_branch
            target_branch
          </code>
        </div>
      </div>
    </div>
  );
}
