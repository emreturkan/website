let accessToken = "";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const responses = await fetch("https://raindrop.io/oauth/access_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.NEXT_PUBLIC_RAINDROP_CLIENT_ID,
          refresh_token: process.env.NEXT_PUBLIC_RAINDROP_REFRESH_TOKEN,
          client_secret: process.env.NEXT_PUBLIC_RAINDROP_CLIENT_SECRET,
          grant_type: "refresh_token",
        }),
      });

      if (!responses.ok) {
        throw new Error("Failed to refresh token");
      }

      const tokenData = await responses.json();

      accessToken = tokenData.access_token;

      res
        .status(200)
        .json({ message: "Token refreshed successfully", tokenData });
    } catch (error) {
      console.error("Error refreshing token:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
