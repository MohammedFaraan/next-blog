"use client"

import React, { useTransition } from "react";
import z from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const postSchema = z.object({
  title: z
    .string()
    .min(3, "The title should be at least 3 chars long")
    .max(255, "The title shouldn't be more than 255 chars"),
  description: z
    .string()
    .min(5, "The description should be at least 3 chars long")
    .max(255, "The description shouldn't be more than 255 chars"),
  content: z
    .string()
    .min(3, "The content should be at least 3 chars long")
    .max(255, "The content shouldn't be more than 255 chars"),
});

type PostFormValues = z.infer<typeof postSchema>;

function PostForm() {
  const [isPending, startTranstion] = useTransition();

  const {register, handleSubmit, formState: {errors}} = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      description: "",
      content: ""
    }
  });

  const onFormSubmit = async (data: PostFormValues) => {
    try {
      console.log(data);
      
    } catch (err) {
      console.error(err);
    }

  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="title" >Title</Label>  
      <Input placeholder="Enter post title"/>
    </div>
    <div className="space-y-2">
      <Label htmlFor="description" >Description</Label>  
      <Input placeholder="Enter post description"/>
    </div>
    <div className="space-y-2">
      <Label htmlFor="content" >Content</Label>  
      <Input placeholder="Enter post content"/>
    </div>
    <Button type="submit" disabled={isPending} className="w-full">Create</Button>
  </form>
  );
}

export default PostForm;
