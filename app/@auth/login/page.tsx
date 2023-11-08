"use client";
import { BaseModal } from "../../components/Modal";
import { useRouter } from "next/navigation";

export default function RouteModal() {
  const router = useRouter();
  return (
    <BaseModal
      displayed
      onClick={(event) => {
        router.back();
      }}
    >
      <h1>Login</h1>
    </BaseModal>
  );
}
