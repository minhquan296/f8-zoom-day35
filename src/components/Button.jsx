import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({
	children,
	primary = false,
	bordered = false,
	rounded = false,
	size = "medium",
	href = "",
	disabled = false,
	loading = false,
	className,
	onClick = () => {},
}) => {
	const btnClass = classNames("px-8 py-4 font-bold bg-gray-300 border-[2px] rounded", {
		"bg-green-500 text-white": primary,
		"border-[4px] border-red-500": bordered,
		"rounded-2xl": rounded,
		"!px-4 !py-2": size === "small",
		"!px-16 !py-6": size === "large",
		"disabled opacity-[50%]": disabled,
		"hover:opacity-[0.7]": !disabled,
		"bg-transparent border-none underline": href,
	});

	const handleClick = () => {
		loading || disabled ? (onClick = () => {}) : onClick();
	};

	const Component = href ? "a" : "button";

	return (
		<>
			<Component href={href} className={className ? `${btnClass} ${className}` : btnClass} onClick={handleClick}>
				{loading ? (
					<div className="w-5 h-5 border-gray-800 rounded-full border-[2px] border-t-transparent animate-spin"></div>
				) : (
					children
				)}
			</Component>
		</>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	primary: PropTypes.bool,
	bordered: PropTypes.bool,
	rounded: PropTypes.bool,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	size: PropTypes.string,
	href: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};
export default Button;
