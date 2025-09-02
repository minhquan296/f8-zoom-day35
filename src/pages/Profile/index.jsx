import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const Profile = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchInfo = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
			const data = await res.json();
			setUser(data);
		};
		fetchInfo();
	}, []);

	if (!user.name) {
		return <Loading />;
	}

	return (
		<div className="flex justify-center items-center">
			<div className="container">
				<h1 className="font-bold text-3xl mb-5 text-center">Profile Card</h1>
				<img
					src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
					alt=""
					className="w-[100px]"
				/>
				<div className="mt-3">
					<p>
						<span className="font-bold text-md">Name</span>: {user.name}
					</p>
					<p>
						<span className="font-bold text-md">UserName</span>: {user.username}
					</p>
					<p>
						<span className="font-bold text-md">Email</span>: {user.email}
					</p>
					<p>
						<span className="font-bold text-md">Phone</span>: {user.phone}
					</p>
					<p>
						<span className="font-bold text-md">Website</span>: {user.website}
					</p>
					<p>
						<span className="font-bold text-md">Address</span> : street {user.address?.street} - city{" "}
						{user.address?.city}
					</p>
				</div>
			</div>
		</div>
	);
};
export default Profile;
