import { CardHeader } from "@/components/ui/card";
import { FaDumbbell, FaUserTie, FaRunning } from "react-icons/fa";

const roleDetails: Record<
    "developer" | "client",
    { title: string; subtitle: string; icon: React.ReactNode }
> = {
    developer: {
        title: "Register as a Developer",
        subtitle: "Set up your developer account and start managing your projects.",
        icon: <FaUserTie className="text-white" size={28} />,
    },
        client: {
        title: "Join as a Client",
        subtitle: "Register to manage your projects.",
        icon: <FaRunning className="text-white" size={28} />,
    },
  
};

const RegisterHeader = ({ role }: { role: "developer" | "client" }) => {
    const { title, subtitle, icon } = roleDetails[role];

    return (
        <CardHeader className="text-center p-0 space-y-2">
            {/* Icon Container */}
            <div className="flex justify-center">
                <div
                    className={`p-3 rounded-lg shadow-md ${
                        role == "developer" ? "bg-blue-600" : "bg-purple-600"
                    }`}
                >
                    {icon}
                </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

            {/* Subtext */}
            <p className="text-sm text-gray-600">{subtitle}</p>
        </CardHeader>
    );
};

export default RegisterHeader;
