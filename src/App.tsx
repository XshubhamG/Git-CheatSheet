import { BsGit } from "react-icons/bs";
import Setup from "./components/Setup";
import Card from "./components/Card";
import Branching from "./components/Branching";
import Update from "./components/Update";
import Logging from "./components/Logging";

function App() {
  return (
    <>
      <div className="w-full h-screen px-8 py-4">
        <h1 className="flex justify-center gap-4 items-center text-purple-700 text-4xl font-semibold pb-4">
          <span className=" text-amber-950">
            <BsGit />
          </span>
          Git CheatSheet
        </h1>
        <div className="flex items-stretch w-[90%] mx-auto flex-wrap gap-8">
          <Setup />
          <Card
            heading="Create new Repo"
            predetails="create a new directory, open it and perform the above"
            command="init"
            code="command"
            postdetails="to create a new repository."
            bg="#34eb8c"
            width="26%"
          />

          <Card
            heading="Clone a Repo"
            command="clone username@host:/path/to/repository"
            predetails="create a working copy of repository by running the above"
            code="command"
            postdetails="."
            width="40%"
            bg="#a24f32"
          />

          <Card
            heading="Adding files"
            command="add <filename>"
            predetails="This is the first step in the basic git workflow"
            bg="#9676db"
            postdetails="."
            width="25%"
          />

          <Card
            heading="Commits"
            command='commit -m "Commit Message"'
            predetails="Now The file is commited to the"
            code="HEAD"
            postdetails=", but not in your remote repository yet."
            bg="#f376f5"
            width="67%"
          />

          <Card
            heading="Pushing a cloned repository"
            command="push master origin"
            predetails="To send those changes to your remote repository. Change"
            code="master"
            postdetails=" to whatever branch you want to push your changes to."
            bg="#f5ad76"
            width="45%"
          />

          <Card
            heading="Pushing not cloned repository"
            command="remote add origin <server>"
            predetails="If you have not cloned an existing repository and want to connect your repository to a remote server"
            bg="#34eb8c"
            postdetails="."
            width="45%"
          />

          <Branching />
          <Update />
          <Logging />
        </div>
      </div>
    </>
  );
}

export default App;
