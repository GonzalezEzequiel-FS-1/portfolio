import React, { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput, PasswordInput, Text, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import FirefliesBackground from "../components/FirefliesBackground";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../firebaseAuth";
import { useAuth } from "../auth/UseAuth";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const nav = useNavigate();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      userName: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email address",
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  const handleSubmit = async (values) => {
    setError(""); // Reset error on submit
    try {
      if (signup) {
        // Capture the UserCredential response
        const cred = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        // Update the displayName
        await updateProfile(cred.user, {
          displayName: values.userName,
        });

        // Reload user so AuthProvider picks up the updated profile
        await cred.user.reload();
      } else {
        await signInWithEmailAndPassword(auth, values.email, values.password);
      }

      // After successful login/signup, navigate to admin
      navigate("/blogpost");
    } catch (err) {
      setError(err.message);
    }
  };

  // Auto-redirect if already logged in
  useEffect(() => {
    if (user) navigate("/blogpost");
  }, [user, navigate]);

  return (
    <AnimatePresence>
      <div className="w-screen h-screen overflow-clip">
        <FirefliesBackground />

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, filter: "none" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          className="w-screen h-screen flex items-center justify-center relative"
        >
          <form
            onSubmit={form.onSubmit(handleSubmit)}
            className="flex flex-col gap-4 p-6 bg-slate-800/50 rounded-2xl shadow-lg z-10"
          >
            <div className="text-2xl font-bold text-white font-tomorrow tracking-wide text-center">
              EG<span className="text-indigo-400">Web</span>Dev
            </div>

            {signup ? (
              <>
                <TextInput
                  classNames={{
                    input: `bg-stone-400/50`,
                  }}
                  withAsterisk
                  label="User Name"
                  placeholder="Create a User Name"
                  {...form.getInputProps("userName")}
                />

                <TextInput
                  withAsterisk
                  label="Email"
                  placeholder="abc@email.com"
                  {...form.getInputProps("email")}
                />

                <PasswordInput
                  withAsterisk
                  label="Password"
                  placeholder="Enter your password"
                  {...form.getInputProps("password")}
                />
              </>
            ) : (
              <>
                <TextInput
                  withAsterisk
                  label="Email"
                  placeholder="abc@email.com"
                  {...form.getInputProps("email")}
                />

                <PasswordInput
                  withAsterisk
                  label="Password"
                  placeholder="Enter your password"
                  {...form.getInputProps("password")}
                />
              </>
            )}

            {error && (
              <Text color="red" size="sm">
                {error}
              </Text>
            )}

            <Button
              type="submit"
              size="sm"
              variant="gradient"
              gradient={{ from: "violet", to: "cyan", deg: 133 }}
            >
              {signup ? "Sign Up" : "Sign In"}
            </Button>
            <Group justify="center">
              <Button
                fullWidth
                variant="light"
                color="gray"
                onClick={() => setSignup((prev) => !prev)}
              >
                {signup ? "Already have an account?" : "Don't have an account?"}
              </Button>
              <Button
                size="xs"
                onClick={() => nav("/")}
                variant="outline"
                color="red"
              >
                Go Back
              </Button>
            </Group>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Login;
