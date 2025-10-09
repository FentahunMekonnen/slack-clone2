import React from "react";

function App() {
  return (
<<<<<<< Updated upstream
    <>
      <h1 class="text-3xl font-bold underline">Vite + React</h1>
    </>
=======
    <header className="absolute top-0 left-0 w-full p-4 flex justify-end bg-black text-white">
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
>>>>>>> Stashed changes
  );
}

export default App;
