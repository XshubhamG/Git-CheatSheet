interface Props {
  heading: string;
  predetails: string;
  command: string;
  code?: string;
  postdetails: string;
  bg: string;
  width: string;
}

export default function Card({
  heading,
  predetails,
  command,
  code,
  postdetails,
  bg,
  width,
}: Props) {
  return (
    <div
      style={{ backgroundColor: bg, width: width }}
      className="flex flex-col flex-grow gap-4 p-4 border-2 border-black rounded-md"
    >
      <h2 className="text-2xl font-semibold">{heading}</h2>
      <code className="bg-black w-fit text-white py-2 px-2 rounded-md">
        <span>git</span> {command}
      </code>
      <div>
        {predetails}{" "}
        <code className="bg-blue-300 font-bold text-black rounded-md">
          {code}
        </code>{" "}
        {postdetails}
      </div>
    </div>
  );
}
