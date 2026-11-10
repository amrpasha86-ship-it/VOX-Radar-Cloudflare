export default {
  async fetch(request, env, ctx) {
    const url = "https://egy.voxcinemas.com/showtimes";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "text/html"
        }
      });

      const html = await response.text();

      return Response.json({
        project: "VOX RADAR 2",
        test: "VOX WEBSITE CONNECTION",
        status: response.status,
        success: response.ok,
        html_length: html.length,
        showtimes_found: html.toLowerCase().includes("showtime"),
        checked_at: new Date().toISOString()
      });

    } catch (error) {
      return Response.json({
        project: "VOX RADAR 2",
        success: false,
        error: error.message
      });
    }
  }
};
