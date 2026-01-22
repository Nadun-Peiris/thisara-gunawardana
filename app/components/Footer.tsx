export default function Footer() {
  return (
    <footer className="w-full py-6 mt-24 border-t border-glassBorder">
      <p className="text-center text-sm text-textSecondary">
        © {new Date().getFullYear()} Thisara Gunawardana. All rights reserved.
      </p>
    </footer>
  );
}
