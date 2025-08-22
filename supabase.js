<script src="https://unpkg.com/@supabase/supabase-js"></script>
<script>
  // ✅ Use your project URL (without /rest/v1/messages)
  const SUPABASE_URL = "https://aijweamsznbkyotuqetj.supabase.co";
  const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";

  const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  async function sendMessage(username, text) {
    const { error } = await supabase
      .from("messages")
      .insert([{ username: username, text: text }]);

    if (error) {
      console.error("Insert error:", error);
    } else {
      console.log("Message sent!");
    }
  }
</script>
