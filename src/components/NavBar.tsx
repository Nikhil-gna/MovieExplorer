import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 bg-blue-900 bg-opacity-95 backdrop-blur-md rounded-b-lg text-white shadow-lg z-50 px-6 py-5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <NavLink
                    to="/"
                    className="text-2xl font-extrabold tracking-wide hover:text-blue-300 transition-colors"
                >
                    Movie Explorer
                </NavLink>

                <div className="space-x-8 text-sm md:text-base flex">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `hover:text-blue-300 transition-colors ${isActive ? "text-blue-300 underline font-semibold" : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            `hover:text-blue-300 transition-colors ${isActive ? "text-blue-300 underline font-semibold" : ""
                            }`
                        }
                    >
                        Favorites
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
