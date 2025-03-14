import { Label } from "@/components/Common/Label";
import { CardFooter } from "@/components/ui/card";
import Link from "next/link";

const RegisterFooter = ({ role }: { role: string }) => (
    <CardFooter className="w-full text-center text-sm flex justify-center gap-2 py-0 items-center">
        <Label size="xs" className="text-gray-600 flex w-fit">
            Already have a developer account? 
        </Label>
        <Link href={`/login/${role}`}>
            <Label
                size="xs"
                className={` hover:underline font-semibold text-xs cursor-pointer flex items-center ${
                    role == "developer" ? "text-blue-600" : "text-purple-600" 
                }`}
            >
                Login In
            </Label>
        </Link>
    </CardFooter>
);

export default RegisterFooter;
