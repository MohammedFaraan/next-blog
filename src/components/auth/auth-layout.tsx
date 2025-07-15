"use client"

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

function AuthLayout() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full p-5 max-w-md bg-card border-2 rounded-lg shadow-sm">
        <h2 className="font-bold text-2xl text-center mb-4">Welcome!</h2>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 mb-4 w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm onSuccess={() => setActiveTab("login")}/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthLayout;
