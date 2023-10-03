export default function Branching() {
  return (
    <div className="flex flex-col col-span-1 w-[90%]] gap-4 p-4 bg-blue-200 border-2 border-black rounded-md">
      <h2 className="text-2xl font-semibold">Branching</h2>
      <p className=" font-semibold">
        Branches are used to develop features isolated from each other. The
        master branch is the "default" branch when you create a repository.
      </p>
      <div className="flex flex-wrap flex-1 gap-2">
        <div className="flex flex-col gap-2 w-[45%]">
          <p className=" font-semibold before:content-['[*]'] before:text-blue-800 before:pr-2">
            create a new branch named "featured_x" and switch to it.
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> checkout -b featured_x
          </code>
        </div>
        <div className="flex flex-col gap-2 w-[45%]">
          <p className=" font-semibold before:content-['[*]'] before:text-blue-800 before:pr-2">
            switch to master branch
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> checkout master
          </code>
        </div>
        <div className="flex flex-col gap-2 w-[45%]">
          <p className=" font-semibold before:content-['[*]'] before:text-blue-800 before:pr-2">
            Delete an Branch
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> branch -d featured_x
          </code>
        </div>
        <div className="flex flex-col gap-2 w-[45%]">
          <p className=" font-semibold before:content-['[*]'] before:text-blue-800 before:pr-2">
            Pushing a branch to your remote repository
          </p>
          <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
            <span className=" text-yellow-300">git</span> push origin
            branch_name
          </code>
        </div>
      </div>
    </div>
  );
}
