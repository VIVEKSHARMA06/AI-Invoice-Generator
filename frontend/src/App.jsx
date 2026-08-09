import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppShell from "./components/Appshell";
import Dashboard from "./pages/Dashboard";
import { Show, RedirectToSignIn } from "@clerk/react";

const ClerkProtected = ({ children }) => (
    <>
        <Show when="signed-in">{children}</Show>
        <Show when="signed-out">
            <RedirectToSignIn />
        </Show>
    </>
);

const App = () => {
    return (
        <div className="min-h-screen max-w-full overflow-x-hidden">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* it must be a protected route */}
                <Route
                    path="/app"
                    element={
                        <ClerkProtected>
                            <AppShell />
                        </ClerkProtected>
                    }
                >
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
