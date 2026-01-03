"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

export default function ProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [language, setLanguage] = useState("en");
  const [savedDestinations, setSavedDestinations] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Mock user data
    setName("Monika");
    setEmail("monika@example.com");
    setSavedDestinations(["Tokyo", "Barcelona", "Bali"]);
  }, []);

  const nameError = useMemo(() => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return null;
  }, [name]);

  const canSubmit = !nameError && !isSubmitting;

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!canSubmit) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), photoUrl: photoUrl.trim() || null, language }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setMessage(data?.error ?? "Failed to update profile");
        return;
      }

      setMessage("Profile updated");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhotoUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  async function handleDeleteAccount() {
    if (!confirm("Are you sure you want to delete your account? This action cannot be undone.")) return;
    await fetch("/api/user/account", { method: "DELETE" });
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-400/20 via-transparent to-transparent">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-green-400 rounded-full opacity-25 blur-2xl animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-red-400 rounded-full opacity-25 blur-2xl animate-bounce"></div>
        </div>
        <div className="px-4 py-10">
          <div className="mx-auto w-full max-w-2xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Profile & Settings</h1>
              <p className="mt-2 text-base text-white/90">Manage your account and preferences.</p>
            </div>

            {message && (
              <div
                className={`mb-6 rounded-xl border px-4 py-3 text-sm backdrop-blur-sm ${
                  message.includes("update")
                    ? "border-purple-300/50 bg-purple-500/20 text-purple-100"
                    : "border-red-300/50 bg-red-500/20 text-red-100"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Profile photo</label>
                <div className="flex items-center gap-4">
                  {photoUrl ? (
                    <img src={photoUrl} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-purple-500/30 flex items-center justify-center border-2 border-purple-400/50">
                      <span className="text-2xl text-white font-bold">
                        {name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <label className="cursor-pointer">
                    <input type="file" accept="image/*" onChange={handlePhotoChange} className="sr-only" />
                    <div className="rounded-lg border border-purple-300/50 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-100">
                      Change photo
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Name</label>
                <input
                  className="w-full rounded-lg border border-purple-300/50 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm text-purple-900 outline-none transition-colors focus:ring-2 focus:ring-purple-500/50"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="mt-1 text-xs text-red-600">{nameError}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
                <input
                  className="w-full rounded-lg border border-purple-300/50 bg-purple-500/20 px-4 py-2 text-sm text-purple-200"
                  value={email}
                  disabled
                />
                <p className="mt-1 text-xs text-purple-200">Email cannot be changed here.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Language</label>
                <select
                  className="w-full rounded-lg border border-purple-300/50 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm text-purple-900 outline-none transition-colors focus:ring-2 focus:ring-purple-500/50"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="ja">日本語</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Saved destinations</label>
                <div className="flex flex-wrap gap-2">
                  {savedDestinations.map((dest) => (
                    <span
                      key={dest}
                      className="rounded-full bg-purple-500/30 backdrop-blur-sm border border-purple-400/50 px-3 py-1 text-xs font-medium text-white"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Trip Photos</label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1502602893406-5e88db641a7d?w=300&h=200&fit=crop&auto=format" 
                      alt="Paris trip" 
                      className="w-full h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="absolute bottom-1 left-1 text-white text-xs font-medium">Paris</div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1537956150983-4db2c5a4a6d9?w=300&h=200&fit=crop&auto=format" 
                      alt="Bali trip" 
                      className="w-full h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="absolute bottom-1 left-1 text-white text-xs font-medium">Bali</div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1493976040374-85c8e9962cd9?w=300&h=200&fit=crop&auto=format" 
                      alt="Tokyo trip" 
                      className="w-full h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="absolute bottom-1 left-1 text-white text-xs font-medium">Tokyo</div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1496442226666-8104f0aef5c4?w=300&h=200&fit=crop&auto=format" 
                      alt="New York trip" 
                      className="w-full h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="absolute bottom-1 left-1 text-white text-xs font-medium">New York</div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-15834185592383-9b07aea8b2a6?w=300&h=200&fit=crop&auto=format" 
                      alt="Barcelona trip" 
                      className="w-full h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="absolute bottom-1 left-1 text-white text-xs font-medium">Barcelona</div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1512459974797-539a54e6c95b?w=300&h=200&fit=crop&auto=format" 
                      alt="Dubai trip" 
                      className="w-full h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="absolute bottom-1 left-1 text-white text-xs font-medium">Dubai</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-purple-200 mt-2">Click to view full gallery</p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-pink-700 disabled:opacity-60 shadow-lg shadow-purple-500/25"
                >
                  {isSubmitting ? "Saving…" : "Save changes"}
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-purple-300/50">
              <h2 className="text-lg font-semibold text-white/90 mb-4">Danger Zone</h2>
              <button
                onClick={handleDeleteAccount}
                className="rounded-lg border border-red-300/50 bg-red-500/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-red-100 transition-colors hover:bg-red-500/30"
              >
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
