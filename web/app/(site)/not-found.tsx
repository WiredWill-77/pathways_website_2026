import { NotFoundContent } from "@/components/layout/NotFoundContent";

/** Unknown slug on a marketing page: rendered inside the (site) layout, so the chrome is already there. */
export default function NotFound() {
  return <NotFoundContent />;
}
