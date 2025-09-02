import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const Comment = () => {
	const [comments, setComments] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [body, setBody] = useState("");
	const [isDisableButton, setIsDisableButton] = useState(true);

	useEffect(() => {
		const fetchComments = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
			const data = await res.json();
			setComments(data);
		};
		fetchComments();
	}, []);

	useEffect(() => {
		if (email && name && body) {
			setIsDisableButton(false);
		} else {
			setIsDisableButton(true);
		}
	}, [email, name, body]);

	if (!comments.length) {
		return <Loading />;
	}

	const submitComment = (e) => {
		e.preventDefault();
		setComments((prevComments) => [{ id: Math.random(), name, body, email }, ...prevComments]);
		setName("");
		setEmail("");
		setBody("");
		setIsDisableButton(true);
	};

	return (
		<div>
			<form className="container p-5 flex flex-col gap-3">
				<h1 className="font-bold text-3xl text-center mb-4"> Comment System</h1>
				<div>
					<input
						className="input-comment"
						placeholder="Nhập tên của bạn"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="email"
						className="input-comment"
						placeholder="Nhập email của bạn"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<textarea
						rows={3}
						className="input-comment"
						placeholder="Nhập bình luận của bạn"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>

				<button
					className={`${
						isDisableButton ? "opacity-25" : "hover:bg-blue-200 cursor-pointer"
					} bg-blue-300 font-bold p-3 text-md  rounded-lg `}
					onClick={submitComment}
					disabled={isDisableButton}
				>
					ĐĂNG
				</button>
			</form>
			<div className="flex flex-col gap-3 p-4 items-center">
				{comments.map((comment) => {
					return (
						<div key={comment.id} className="container flex gap-3 w-[850px] border-gray-400">
							<img
								className="flex items-center justify-center shrink-0 font-bold w-11 h-11 rounded-full"
								src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
								alt="avatar"
							/>

							<div>
								<p className="font-bold">{comment.name}</p>
								<div className="flex gap-2 text-sm text-gray-500 mb-2">
									<p className="">{comment.email}</p>
									<p>1 giờ trước</p>
								</div>
								<p>{comment.body}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Comment;
