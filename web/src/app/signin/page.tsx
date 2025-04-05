import {log} from "@ff/utils";
import signin from "./signin.module.scss";
import {FButton} from "@ff/ui/dist";

export default function SignInPage() {
    log("SignIn Page");
    return (
        <div className={signin.signin}>
            <FButton />
        </div>
    );
}

