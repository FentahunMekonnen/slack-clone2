import mongoose from "mongoose";
import { Inngest } from "inngest";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String },
    avatarUrl: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// Create a client to send and receive events
export const inngest = new Inngest({ id: "slack-clone" });

const syncUser = inngest.createFunction(
  { name: "Sync User", event: "clerk/user.created" },
  async ({ event, step }) => {
    // This function will run whenever a `clerk/user.created` event is sent to Inngest.
    // You can add additional events in the `event` property above, or create new functions
    // for other events.
    const user = event.data;
  }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [];
