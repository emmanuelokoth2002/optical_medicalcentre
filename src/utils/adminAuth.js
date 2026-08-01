const SESSION_KEY = 'eyesight_admin_session';

// Client-side gate only — this is a static frontend with no backend/auth server.
// It hides the product-management UI from regular visitors; it is not real security,
// since the passcode ships inside the JS bundle. Change it before relying on it.
// No fallback: if REACT_APP_ADMIN_PASSCODE isn't set in .env, admin login is disabled.
const ADMIN_PASSCODE = process.env.REACT_APP_ADMIN_PASSCODE;

export function isAdmin() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

export function tryAdminLogin(passcode) {
  if (!ADMIN_PASSCODE) return false;
  if (passcode === ADMIN_PASSCODE) {
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {}
    return true;
  }
  return false;
}

export function adminLogout() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {}
}
