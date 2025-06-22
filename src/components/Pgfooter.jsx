export default function pgfooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 text-center py-6 border-t border-zinc-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Yash Lahane. All rights reserved.
      </p>
    </footer>
  );
}
