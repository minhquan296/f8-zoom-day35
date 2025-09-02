const ProductModal = ({ productItem, handleClickIsOpenModal }) => {
	return (
		<div
			className="fixed inset-0 bg-black/25 flex items-center justify-center"
			onClick={() => handleClickIsOpenModal()}
		>
			<div
				className="bg-white w-[400px] p-3 rounded"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="flex items-center justify-between mb-5">
					<p className="font-bold text-center text-2xl">Product Item</p>
					<button
						className="w-8 h-8 rounded-full text-sm font-bold bg-green-400 cursor-pointer"
						onClick={() => handleClickIsOpenModal()}
					>
						X
					</button>
				</div>
				<div className="h-[200px]">
					<p>
						<span className="font-bold text-lg">Id</span>: {productItem.id}
					</p>
					<p>
						<span className="font-bold text-lg">Title</span>: {productItem.title}
					</p>
					<p className="line-clamp-3">
						<span className="font-bold text-lg">Content</span>: {productItem.content}
					</p>
				</div>
			</div>
		</div>
	);
};
export default ProductModal;
