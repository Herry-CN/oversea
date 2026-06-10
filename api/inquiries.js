module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({
      error: 'RESEND_API_KEY is missing',
      hint: 'Set RESEND_API_KEY (and optionally RESEND_FROM) in Vercel project environment variables, then redeploy.',
    });
  }

  const getBody = () => {
    if (req.body && typeof req.body === 'object') return req.body;
    if (typeof req.body === 'string' && req.body.trim()) {
      try {
        return JSON.parse(req.body);
      } catch {
        return null;
      }
    }
    return null;
  };

  const body = getBody();
  if (!body) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const { name, company, email, jobTitle, interest, message } = body;
  if (!name || !company || !email) {
    return res.status(400).json({ error: 'Missing required fields (name, company, email)' });
  }

  const safe = (v) =>
    String(v ?? '').replace(/[<>&]/g, (ch) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[ch]));

  const from = process.env.RESEND_FROM || 'ZENTK Website <onboarding@resend.dev>';
  const to = ['sasha@ZENTKglobal.com', 'herry.li@zentkglobel.com'];
  const subject = `[ZENTK Website] ${safe(company)} — ${safe(name)}`;
  const html = `
    <div style="font-family: ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.6;">
      <h2 style="margin: 0 0 12px;">New website inquiry</h2>
      <table style="border-collapse: collapse;">
        <tr><td style="padding: 6px 12px 6px 0; color:#64748b;">Name</td><td style="padding: 6px 0;">${safe(name)}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color:#64748b;">Company</td><td style="padding: 6px 0;">${safe(company)}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color:#64748b;">Email</td><td style="padding: 6px 0;">${safe(email)}</td></tr>
        ${jobTitle ? `<tr><td style="padding: 6px 12px 6px 0; color:#64748b;">Job Title</td><td style="padding: 6px 0;">${safe(jobTitle)}</td></tr>` : ''}
        ${interest ? `<tr><td style="padding: 6px 12px 6px 0; color:#64748b;">Interest</td><td style="padding: 6px 0;">${safe(interest)}</td></tr>` : ''}
      </table>
      ${message ? `<h3 style="margin: 16px 0 8px;">Message</h3><pre style="white-space: pre-wrap; background:#0b1220; color:#e2e8f0; padding:12px; border-radius:10px;">${safe(message)}</pre>` : ''}
    </div>
  `.trim();

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: email,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    return res.status(502).json({ error: 'Email delivery failed', detail });
  }

  return res.status(200).json({ ok: true });
};
