import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { Input, Button, Stack } from "@chakra-ui/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        login_id: "",
        password: "",
    });

    const { t, currentLocale } = useLaravelReactI18n();

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title={t("Log in")} />

            <form onSubmit={submit}>
                <Stack spacing={4}>
                    <div>
                        <Input
                            id="login_id"
                            type="text"
                            name="login_id"
                            className="p-2 border-none"
                            placeholder="ログインID"
                            size="lg"
                            variant="flushed"
                            value={data.login_id}
                            onChange={(e) =>
                                setData("login_id", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.login_id}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            className="p-2 border-none"
                            placeholder="パスワード"
                            size="lg"
                            variant="flushed"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                </Stack>

                <div className="flex items-center justify-center mt-8">
                    <Button type="submit" colorScheme="red">
                        ログイン
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
