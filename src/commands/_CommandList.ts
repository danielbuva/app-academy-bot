import { Command } from "../utils/interfaces";
import { aaa } from "./aaa";
import { ping } from "./ping";
import { server } from "./server";
import { user } from "./user";

export const CommandList: Command[] = [aaa, ping, server, user];
