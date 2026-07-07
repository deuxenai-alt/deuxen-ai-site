# Set Up AI Chatbot with n8n + Google Sheets

Your AI receptionist will collect client data and store it in Google Sheets.

---

## Step 1: Create Google Sheets for Client Database

1. Go to https://sheets.google.com/
2. Click **+ New Spreadsheet**
3. Name it: `Deuxen AI - Client Database`
4. Create these columns (in row 1):
   ```
   Timestamp | Name | Phone | Email | Company | Service | Notes | Status
   ```
5. Keep it open (you'll need the link in step 3)

---

## Step 2: Set Up n8n Workflow

### Create n8n Account:

1. Go to https://n8n.cloud/ (free tier available) or self-host at https://www.n8n.io/
2. Click **Sign Up**
3. Complete signup with email
4. Create new workflow

### Build the Workflow:

**Node 1: Webhook Trigger (Receive form data)**
- Node type: `Webhook`
- Method: `POST`
- Copy the webhook URL (looks like `https://n8n.yourinstance.com/webhook/...`)

**Node 2: Parse JSON**
- Node type: `Set`
- Map incoming data:
  ```
  name: {{ $json.body.name }}
  phone: {{ $json.body.phone }}
  email: {{ $json.body.email }}
  company: {{ $json.body.company }}
  service: {{ $json.body.service }}
  notes: {{ $json.body.notes }}
  timestamp: {{ new Date().toISOString() }}
  ```

**Node 3: Google Sheets - Append Row**
- Node type: `Google Sheets`
- Action: `Append or update row`
- Connect your Google account (click "Connect")
- Spreadsheet: Select `Deuxen AI - Client Database`
- Sheet: `Sheet1`
- Map columns to your data:
  ```
  Timestamp → {{ $json.timestamp }}
  Name → {{ $json.name }}
  Phone → {{ $json.phone }}
  Email → {{ $json.email }}
  Company → {{ $json.company }}
  Service → {{ $json.service }}
  Notes → {{ $json.notes }}
  Status → "New Lead"
  ```

**Node 4: Response (Send confirmation back)**
- Node type: `Respond to Webhook`
- Body: `{ "success": true, "message": "Data saved" }`

### Test the Workflow:

1. Click **Execute Workflow** (play button)
2. Send test data to your webhook URL using Postman or curl:
   ```bash
   curl -X POST https://your-n8n-webhook-url \
     -H "Content-Type: application/json" \
     -d '{
       "name": "John Smith",
       "phone": "+44123456789",
       "email": "john@example.com",
       "company": "Smith Dental",
       "service": "New Patient Intake",
       "notes": "Interested in pricing"
     }'
   ```
3. Check your Google Sheets — the data should appear!

### Activate the Workflow:

1. Click **Activate** (toggle on)
2. Your webhook is now live and listening for data

---

## Step 3: Connect the Chatbot to Your Website (already built ✅)

Every "Book a Demo" button on the site opens a form (`src/components/ui/demo-form-modal.tsx`)
collecting name, phone, email, company, industry, and notes. On submit, it
POSTs JSON to the webhook URL in `VITE_N8N_WEBHOOK_URL`.

**Until that variable is set, the form falls back to opening the visitor's
email client** with the details pre-filled — so the site works today, and
upgrades to the automated Sheets pipeline the moment you activate n8n.

### To activate it, once you have your n8n webhook URL:

1. Copy `.env.example` to `.env` in the project root:
   ```bash
   cd /Users/mano/deuxen-ai-site
   cp .env.example .env
   ```
2. Edit `.env` and paste your webhook URL:
   ```
   VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/abc123
   ```
3. **Important:** Vite bakes environment variables in at *build time*, not
   runtime. Rebuild and redeploy for the change to take effect:
   ```bash
   npm run deploy
   ```
4. Test it — click "Book a Demo" on https://deuxen.co.uk and submit the
   form. A new row should appear in your Google Sheet within seconds.

The JSON body sent matches the Google Sheets columns exactly: `name`,
`phone`, `email`, `company`, `service` (industry), `notes`.

---

## Step 4: Access Your Client Data

1. Go to https://sheets.google.com/
2. Open `Deuxen AI - Client Database`
3. New leads appear automatically as they book demos
4. You can filter by status, sort by date, export as CSV, build charts, or
   share the sheet with your team.

---

## Optional: Trigger a Vapi Call Automatically

If you want the chatbot to actually **call** the customer using your
existing Vapi setup:

1. Log into https://www.vapi.ai/
2. Get your Vapi Phone Number ID
3. In n8n, add an `HTTP Request` node after Google Sheets:
   - URL: `https://api.vapi.ai/call`
   - Body:
     ```json
     {
       "phoneNumber": "{{ $json.phone }}",
       "assistantId": "YOUR_ASSISTANT_ID"
     }
     ```

---

## Workflow Summary

```
Website Form → n8n Webhook → Google Sheets (stored)
                           → Optional: Vapi Call Trigger
```

All client data flows automatically — no manual data entry needed.

---

## Troubleshooting

- **Webhook not firing** — check the URL is correct and the workflow is
  Activated (toggle on).
- **Data not appearing in Sheets** — verify the Google account connection
  and that column names match exactly.
- **Errors on POST** — check the JSON body is valid and all required
  fields are present; review the n8n execution log for details.
