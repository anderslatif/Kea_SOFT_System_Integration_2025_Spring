# 12a [Pair] Expose and Integrate with a Webhook System

**Type**: Work in pairs. Switch role between exposee and integrator. 

---

## Exposee 

The exposee would be akin to Github. Try to imagine what systems they have to allow for webhook registration.

Facilitate the Integrator's ability to register and unregister webhooks for various event types.

**Event Types**: 
- Choose a consistent theme for your events (e.g., payment or invoice processes).
- Define clear event types such as “payment received”, “payment processed”, “invoice processing”, “invoice completed”.
- Ensure that the endpoints are well-documented.

**Webhook Registration System**:
- Develop a simple mechanism for webhook registration and unregistration. 
- Include instructions in your documentation on how to use this system.
- Having an UI is not a requirement.

**Ping Event and Random Calls**:
- Implement the endpoint `/ping` for testing that an integrator can call which should then call all the registered webhooks. 
- Include guidelines on how these features work in your documentation.

**Internals: Storage of Endpoint Data**
- Use a straightforward storage method for registered endpoints (e.g., Sqlite, NeDB, plaintext files).

---

## Integrator

The integrator would be akin to a Github user trying to register a webhook. 

- Setup a web server. 

- Create a script that registers a webhook.  

---

## Hosting [Optional]

Deploying the system is optional. If the goal is to host the system on both sides, then a serverless approach would be ideal. 

---

## Hand-in.

There will be two hand-ins:

1. **Exposee**: Code + documentation. (As always, all information on how to integrate should be clear via documentation.)

2. **Integrator**: Code + screenshots. 
