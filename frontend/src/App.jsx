import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppShell from "./components/AppShell.jsx";
import Dashboard from "./pages/Dashboard";
import { Show, RedirectToSignIn } from "@clerk/react";
import Createinvoice from "./pages/Createinvoice.jsx";

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
                    <Route
                        path="create-invoice"
                        element={<Createinvoice />}
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
