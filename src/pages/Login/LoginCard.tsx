import { Button, Input } from "@nextui-org/react";
import { possibleAvatars, useChatContext } from "../../hooks/useChatContext";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const loginFormSchema = z.object({
  name: z
    .string({ required_error: "Your name is neccesary" })
    .min(2, { message: "Name must be longer than 5 characteres" }),
  surname: z
    .string({ required_error: "Your surname is neccesary" })
    .min(2, { message: "Surname must be longer than 5 characteres" }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export function LoginCard() {
  const randomPosition = Math.floor(Math.random() * 10);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userAvatar, _setUserAvatar] = useState<string>(
    possibleAvatars[randomPosition]
  );

  const { setUserSession } = useChatContext();
  const navigate = useNavigate();

  const loginFormController = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    const userSession = {
      userName: data.name + " " + data.surname,
      avatarUrl: userAvatar,
      signedIn: new Date().toISOString(),
    };

    localStorage.setItem("userSession", JSON.stringify(userSession));
    setUserSession(userSession);

    navigate("/chat");
  };

  return (
    <div className="bg-gray-light w-full flex justify-center shadow-md flex-col items-end gap-7 rounded-b-xl">
      <div className="flex w-full flex-col justify-center items-center p-12 gap-12">
        <div className="w-32 h-32 min-w-32 min-h-32 rounded-full">
          <img
            src={userAvatar}
            alt="avatar"
            className="w-32 h-32 min-w-32 min-h-32 object-cover rounded-full block"
          />
        </div>
        <form
          className="w-full"
          onSubmit={loginFormController.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col justify-center w-full items-center gap-7">
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              placeholder="Type your name"
              variant="bordered"
              classNames={{
                label: "font-semibold text-md pl-1",
                inputWrapper: "w-full bg-white rounded-md border-none",
              }}
              className="shadow-md shadow-background rounded-md"
              {...loginFormController.register("name")}
              isInvalid={Boolean(loginFormController.formState.errors.name)}
              errorMessage={loginFormController.formState.errors.name?.message}
            />
            <Input
              type="text"
              label="Surname"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Type your surname"
              classNames={{
                label: "font-semibold text-md pl-1",
                inputWrapper: "w-full bg-white rounded-md border-none",
              }}
              className="shadow-md rounded-md shadow-background"
              {...loginFormController.register("surname")}
              isInvalid={Boolean(loginFormController.formState.errors.surname)}
              errorMessage={
                loginFormController.formState.errors.surname?.message
              }
            />
          </div>
          <div className="w-full flex justify-center items-center mt-10">
            <Button
              type="submit"
              color="primary"
              className="text-black rounded-md font-bold text-xl px-28 py-6"
            >
              Join
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
