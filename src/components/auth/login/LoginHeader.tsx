import { CardHeader } from "@/components/ui/card";
import { FaDumbbell, FaUserTie, FaUser } from "react-icons/fa6";

const roleDetails: Record<
    "developer" | "client",     
    { title: string; subtitle: string; icon: React.ReactNode }
> = {
    developer: {
        title: "Welcome Back, Developer",
        subtitle: "Sign in to manage your projects",
        icon: <FaDumbbell className="text-white" size={28} />,
    },
    client: {
        title: "Client Login",
        subtitle: "Access your projects and tasks",
        icon: <FaUserTie className="text-white" size={28} />,
    },
        
     
};

const LoginHeader = ({ role }: { role: "developer" | "client" }) => {
    return (
        <CardHeader className="text-center p-0 space-y-2">
            <div className="flex justify-center">
                <div
                    className={`bg-blue-600 p-3 rounded-lg shadow-md ${
                        role == "developer" ? "bg-blue-600" : "bg-purple-600"
                    }`}
                >
                    {roleDetails[role].icon} {/* Dynamically render icon */}    
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
                {roleDetails[role].title}
            </h2>
            <p className="text-sm text-gray-600">
                {roleDetails[role].subtitle}
            </p>
        </CardHeader>
    );
};

export default LoginHeader;
