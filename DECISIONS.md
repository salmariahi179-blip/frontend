# 🧠 Frontend Architecture Decisions - CRM SaaS

## 1. Framework

Choix : Next.js (App Router)

Raisons :
- routing moderne
- performance SSR/CSR hybride
- structure scalable pour CRM

---

## 2. Architecture

Structure feature-based :

features/
  opportunities/
  auth/

Avantages :
- séparation métier claire
- scalabilité
- maintenance facile

---

## 3. State Management

Choix : React hooks natifs (useState, useEffect)

Pourquoi :
- projet CRM de taille moyenne
- éviter complexité Redux inutile

---

## 4. API Layer

Axios centralisé dans `lib/api/client.ts`

Avantages :
- réutilisable
- gestion token centralisée
- cleaner code

---

## 5. Auth

JWT stocké en localStorage

Amélioration future :
- httpOnly cookies (sécurité production)

---

## 6. UX decisions

- modals pour CRUD
- toast notifications (sonner)
- debounce search
- table simple + scalable

---

## 7. Styling

Tailwind CSS

Pourquoi :
- rapidité
- cohérence UI
- compatible SaaS UI patterns

---

## 8. Data fetching

Custom hooks (useOpportunities)

Pourquoi :
- logique isolée
- réutilisable
- cleaner components

---

## 9. Assumptions

- single-user session
- backend REST API
- no real-time sync
- simplified RBAC (future improvement)

---

## 10. Trade-offs

- simplicité > architecture complexe
- rapidité dev > optimisation avancée
- hooks locaux > state global

---

## 11. Scalability direction

Le frontend est prêt pour évoluer vers :
- multi-modules CRM (clients, invoices)
- dashboards analytics
- role-based UI