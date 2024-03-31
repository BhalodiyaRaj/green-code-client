<<<<<<< HEAD
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetQuestionById } from "../../hooks/data";
import { FaCircle } from "react-icons/fa";
import { AuthContext } from "../../services/context/AuthContext";
import { Solution } from "../../components/Solution"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import SelectMenu from "../../lib/Select";
import useGetSolutions from "../../hooks/data/useGetSolutions";
import { Comment } from "../../components/Comment";

function QuestionPage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const params = useParams();
  const [question] = useGetQuestionById(params.id);
  const [isQuestionOpen, setIsQuestionOpen] = useState(true);
  const [solution] = useGetSolutions(params.id);

  function Level() {
    var questionLevel = question.level?.toLowerCase();
    if (questionLevel === "hard") return (<FaCircle className="text-red-600 text-xs" />);
    if (questionLevel === "medium") return (<FaCircle className="text-orange-400 text-xs" />);
    if (questionLevel === "easy") return (<FaCircle className="gc-text-green text-xs" />);
  }

  const comments = [
    {
      username: "hello world",
      comment: "this is comment",
      date: "2024-10-12",
    },
    {
      username: "hello world",
      comment: "this is comment",
      date: "2024-10-12",
    },
    {
      username: "hello world",
      comment: "this is comment",
      date: "2024-10-12",
    },
    {
      username: "hello world",
      comment: "this is comment",
      date: "2024-10-12",
    },
    {
      username: "hello world",
      comment: "this is comment",
      date: "2024-10-12",
    },
    {
      username: "hello world",
      comment: "this is comment",
      date: "2024-10-12",
    }
  ]

  return (
    <div className="h-full ">
      <div className="md:flex">
        <div className="w-[100%] mx-5 mb-5">
          <div className={`${isLoggedIn ? "p-2" : ""}`}>
            {isLoggedIn && (
              <>
                <button className={`border gc-border-green rounded-l-md px-2 py-1 ${isQuestionOpen ? "gc-bg-green text-white" : "gc-text-green"}`} onClick={() => { if (!isQuestionOpen) { setIsQuestionOpen(!isQuestionOpen) } }}>
                  Question
                </button>
                <button className={`border gc-border-green rounded-r-md px-2 py-1 ${isQuestionOpen ? "gc-text-green" : " gc-bg-green text-white"} `} onClick={() => { if (isQuestionOpen) { setIsQuestionOpen(!isQuestionOpen) } }}>
                  Comment
                </button>
              </>
            )}
          </div>
          <div className="">
            <span className=" text-2xl font-bold">
              {question.number}
            </span>
            <span className="text-xl p-2 font-medium">
              {question.title}
            </span>
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <Level />
                <span className="text-sm ms-1">
                  {question.level}
                </span>
              </div>
              <div className="flex gap-2">
                <div className="text-sm">{question.likes}</div>
                {
                  question?.isLiked ? <AiFillHeart className={`mx-auto text-xl gc-text-green`} /> : <AiOutlineHeart className={`mx-auto text-xl gc-text-green`} />
                }
              </div>
            </div>
          </div>
          <div className="w-full overflow-auto  border gc-border-green p-4 rounded-md" style={{ height: 'calc(100vh - 180px)'}}>
            {
              isQuestionOpen ? <>{question.body}</>: <>
                <button className="py-1 font-semibold px-2.5 hover:scale-105 border rounded-full gc-text-green gc-border-green duration-300">
                  {user?.username[0].toUpperCase()}
                </button><span className="mx-2 font-medium">{user?.username[0].toUpperCase() + user?.username.slice(1)}</span>
                <div className="flex items-center mt-2 "><input type="text" className="w-full border-0 border-b-2 gc-border-black  p-2 focus:border-lime-500 focus:outline-none required:border-red-500" placeholder="Write a comment" /><button className="gc-bg-green ms-4 text-white w-[110px] p-2 border rounded-lg hover:scale-110 duration-300" >POST</button></div>

                {comments.map((e, index) => {
                  const date = new Date(e.date);
                  return <Comment key={index} admin={user.role == "admin" ? true : false} username={e.username} className="m-2 mb-3 border-0 border-t border-s gc-border-green rounded-lg gc-shadow-74 " comment={e.comment} date={date.toDateString()} />

                })
                }
              </>
            }
          </div>
        </div>
        {isLoggedIn && (
          <div className="md:w-1/2">
            <div className="flex justify-end mx-4 py-2">
              <SelectMenu onChange={(data) => setLevel(data?.value)} className="min-w-[130px]" placeholder="Language" isClearable isGreen options={solution?.map((item) => { return { "value": item?.language?.name, "label": item?.language?.name } })} />
            </div>
            <div className="min-w-[37vw]  mx-4 my-2 p-4 rounded overflow-auto gc-shadow-25 " style={{height:'calc(100vh - 132px)'}} >
              {solution?.map((data, index) => {
                return (
                  <Solution key={index} title={data?.title} code={data?.code} language="java" admin={user.role ? true : false} /> // Pass a unique key
                );
              })}
            </div>
          </div>
        )}
      </div>
      {
        !isLoggedIn ? (<div className="text-center ">
          <Link to="/login" className="gc-bg-green w-[10rem] py-2 px-5 text-white rounded-md">View Solution</Link>
        </div>) : (<></>)
      }
    </div>
  );
=======
import{ useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionById } from "../../hooks/data";
import { FaCircle } from "react-icons/fa";
import { AuthContext } from "../../services/context/AuthContext";
import { Solution } from "../../components/Solution";
import { AiOutlineHeart } from "react-icons/ai";

function QuestionPage() {
	const { isLoggedIn } = useContext(AuthContext);
	const params = useParams();

	const [question] = useGetQuestionById(params.id);

	function Level() {
		var questionLevel = question.level?.toLowerCase();
		if (questionLevel === "hard")
			return <FaCircle className="text-red-600 text-xs" />;
		if (questionLevel === "medium")
			return <FaCircle className="text-orange-400 text-xs" />;
		if (questionLevel === "easy")
			return <FaCircle className="gc-text-green text-xs" />;
	}

	function SolutionList() {
		const solutionData = {
			title: "Solution",
			solution: "System.out.println('hello world');",
			admin: true,
			language: "Java",
		};
	
		return (
			<Solution
				data={solutionData} // Pass data as a function
				className="my-6"
			/>
		);
	}
	console.log(question);
	return (
		<div className="h-full flex">
			<div className="w-[100%] mx-5 mb-5">
				<div className={`${isLoggedIn ? "p-2" : ""}`}>
					{isLoggedIn && (
						<>
							<button className="border gc-border-green gc-text-green rounded-md px-2 py-1 mx-0.5 gc-hover-bg-green hover:text-white">
								Question
							</button>
							<button className="border gc-border-green gc-text-green rounded-md px-2 py-1 mx-0.5 gc-hover-bg-green hover:text-white">
								Comment
							</button>
						</>
					)}
				</div>
				<div className="mt-4">
					<span className=" text-2xl font-bold">
						{question.number}
					</span>
					<span className="text-xl p-2 font-light">
						{question.title}
					</span>
					<div className="flex justify-between mb-2">
						<div className="flex items-center">
							<Level />
							<span className="text-sm ms-1">
								{question.level}
							</span>
						</div>
						<div className="flex gap-2">
							<div className="text-sm">{question.likes}</div>
							<AiOutlineHeart className={`mx-auto text-xl gc-text-green ${question?.isLiked ? "gc-bg-green":""}`} />
						</div>
					</div>
				</div>
				<div className="w-full overflow-auto md:h-[65vh] border gc-border-green p-4 rounded-md">
					{question.body}
				</div>
			</div>
			{isLoggedIn && (
				<div className="w-[50%]">
					<SolutionList />
				</div>
			)}
		</div>
	);
>>>>>>> dc49e62 (get all question and question by id done at user side)
}

export default QuestionPage;
