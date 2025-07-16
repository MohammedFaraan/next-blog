import PostForm from "@/components/post/post-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CreatePostPage() {
  return (
    <div className="flex flex-col items-center">
      <Card className="flex flex-col w-[60%] mt-4">
        <CardHeader>
          <CardTitle className="text-center">Create Your Post</CardTitle>
        </CardHeader>
        <CardContent>
          <PostForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatePostPage;
