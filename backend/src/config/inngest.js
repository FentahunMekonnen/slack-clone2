import { Inngest } from "inngest";
import { connectDB } from "./db.js";
// Create a client to send and receive events
export const inngest = new Inngest({ id: "slack-clone" });

const syncUser = inngest.createFunction(
  { name: "Sync User", event: "clerk/user.created" },
  async ({ event }) => {
    // This function will run whenever a `clerk/user.created` event is sent to Inngest.
    // You can add additional events in the `event` property above, or create new functions
    // for other events.

    await connectDB();

    console.log("Syncing user from Clerk to your database...");
    console.log(event.data);
    // Example: Sync the user to your database
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      image: image_url,
    };
    await User.create(newUser);
  }
);
const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
  }
);
// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser, deleteUserFromDB];
