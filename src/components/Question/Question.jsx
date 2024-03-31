import PropTypes from "prop-types";
import { FaCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

function Question({ data, className }) {
	console.log(data);

	function Level() {
		var questionLevel = data.level.toLowerCase();
		if (questionLevel === "hard")
			return <FaCircle className="text-red-600 text-xs" />;
		if (questionLevel === "medium")
			return <FaCircle className="text-orange-400 text-xs" />;
		if (questionLevel === "easy")
			return <FaCircle className="gc-text-green text-xs" />;
	}

<<<<<<< HEAD
    function Level() {
        var questionLevel = data.level.toLowerCase();
        if (questionLevel === "hard") return (<FaCircle className="text-red-600 text-xs" />);
        if (questionLevel === "medium") return (<FaCircle className="text-orange-400 text-xs" />);
        if (questionLevel === "easy") return (<FaCircle className="gc-text-green text-xs" />);
    }
    return (
        <div className={"flex  justify-between items-center border rounded-lg px-3 py-1 bg-white" + ' ' + className}>
=======
	return (
		<div
			className={
				"flex max-w-[1200px] justify-between items-center border rounded-lg px-3 py-1 bg-white" +
				" " +
				className
			}>
>>>>>>> dc49e62 (get all question and question by id done at user side)
			<div>
				<div className="truncate">
					<span className="me-2 text-md font-bold">
						{data.number}
					</span>
					{data.title}
				</div>
				<div className="text-sm flex items-center">
					<Level />
					&nbsp;Level
				</div>
			</div>
			<div className="flex">
				<div className="text-center ">
					<AiOutlineHeart className="mx-auto text-xl gc-text-green" />
					<div className="text-sm">{data.likes}</div>
				</div>
			</div>
		</div>
	);
}

Question.propTypes = {
<<<<<<< HEAD
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
}
=======
	data: PropTypes.object.isRequire,
	className: PropTypes.string,
};
>>>>>>> dc49e62 (get all question and question by id done at user side)

export default Question;
