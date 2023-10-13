import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, res) => {

  try {
    await connectToDb();

    const prompts = await Prompt.find({})
   
    return new Response(JSON.stringify(prompts), {status: 200})
    
  } catch(error) {
    return new Response('Failed to fetch prompts', {status: 500})
  }
}