import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/UseAuth";
import { useNavigate } from "react-router-dom";
import { Button, FileInput, TextInput, Modal, Loader } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import TextEditor from "../components/textEditor/TextEditor";
import { RiImageCircleFill } from "react-icons/ri";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { auth } from "../../firebaseAuth";

const DBURL = "/api/blog";

const AdminPanel = () => {
  const userAuth = auth;
  const user = userAuth.currentUser;
  const displayName = user?.displayName || "Didnt work";
  const [opened, { open, close }] = useDisclosure(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const icon = <RiImageCircleFill className="text-sm text-stone-300" />;
  const { logout } = useAuth();
  const nav = useNavigate();

  const form = useForm({
    initialValues: {
      title: "",
      subtitle: "",
      image: null,
      postedDate: new Date(),
      content: "",
      author: displayName,
    },
    validate: {
      title: (value) => (value === "" ? "Title is required" : null),
      subtitle: (value) => (value === "" ? "Subtitle is required" : null),
      content: (value) => (value === "" ? "Content is required" : null),
    },
  });

  const handleLogout = async () => {
    await logout();
    nav("/");
  };

  // Convert file to Base64 before sending
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (values) => {
    console.log("Testing Submit");
    setLoading(true);
    try {
      let base64Image = null;
      if (values.image) {
        base64Image = await fileToBase64(values.image);
      }

      const payload = {
        userId:user.uid,
        title: values.title,
        subtitle: values.subtitle,
        body: values.content,
        postedDate: dayjs(values.postedDate).format("YYYY-MM-DD HH:mm:ss"),
        author: values.author || user.displayName,
        image: base64Image,
        user: user.displayName,
      };
      console.log(payload);
      const response = await axios.post(DBURL, payload);
      console.log("Server response:", response.data);

      form.reset();
      setPreviewUrl(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Preview image before submission
  useEffect(() => {
    if (form.values.image) {
      const url = URL.createObjectURL(form.values.image);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [form.values.image]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 p-4">
      <button onClick={() => console.log(user.uid)}>ClickME</button>
      <h1 className="text-xl font-bold">Admin Panel</h1>

      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <TextInput
          label="Title:"
          placeholder="Enter title"
          {...form.getInputProps("title")}
        />
        <TextInput
          label="Sub Title:"
          placeholder="Enter subtitle"
          {...form.getInputProps("subtitle")}
        />

        <FileInput
          leftSection={icon}
          label="Post Image:"
          placeholder="Select Image to upload"
          accept="image/png,image/jpeg"
          clearable
          {...form.getInputProps("image")}
        />

        <DateTimePicker
          label="Publication date and time:"
          {...form.getInputProps("postedDate")}
        />

        <div className="my-4">
          <TextEditor
            value={form.values.content}
            onChange={(val) => form.setFieldValue("content", val)}
          />
        </div>
        <Modal
          centered
          opened={opened}
          onClose={close}
          size="auto"
          title="Image Preview"
          overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
        >
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-[400px] object-cover rounded"
            />
          )}
        </Modal>

        {previewUrl && (
          <Button
            variant="outline"
            color="white"
            size="sm"
            type="button"
            onClick={open}
          >
            Preview Image
          </Button>
        )}
        <TextInput
          label="Author"
          placeholder="Post Author"
          {...form.getInputProps("author")}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <Loader size="sm" /> : "Save Blog Post"}
        </Button>
      </form>

      <Button variant="outline" color="red" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

export default AdminPanel;
