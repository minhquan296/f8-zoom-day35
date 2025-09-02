import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ProductModal from "../../components/ProductModal";

const Products = () => {
	const [productList, setProductList] = useState([]);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [productItem, setProductItem] = useState({});

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
			const data = await res.json();
			setProductList(data);
		};
		fetchProducts();
	}, []);

	if (!productList.length) {
		return <Loading />;
	}

	const handleClickIsOpenModal = (prodItem) => {
		setIsOpenModal(!isOpenModal);
		setProductItem(prodItem);
	};

	return (
		<div>
			<div className="grid grid-cols-6 gap-2">
				{productList.map((prod) => {
					return (
						<div key={prod.id} className="bg-orange-300 p-3 rounded flex flex-col ">
							<div className="h-[200px]">
								<p>
									<span className="font-bold text-lg">Id</span>: {prod.id}
								</p>
								<p>
									<span className="font-bold text-lg">Title</span>: {prod.title}
								</p>
								<p className="line-clamp-3">
									<span className="font-bold text-lg">Content</span>: {prod.body}
								</p>
							</div>
							<button
								className="bg-green-400 p-2 mt-3 rounded font-bold cursor-pointer hover:bg-green-300"
								onClick={() =>
									handleClickIsOpenModal({
										id: prod.id,
										title: prod.title,
										content: prod.body,
									})
								}
							>
								Xem chi tiết
							</button>
						</div>
					);
				})}
			</div>
			{isOpenModal && <ProductModal productItem={productItem} handleClickIsOpenModal={handleClickIsOpenModal} />}
		</div>
	);
};

export default Products;
